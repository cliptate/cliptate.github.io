"""Validate the built, no-JavaScript SEO surface and all locale relationships."""
import json
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urljoin, urlsplit
import xml.etree.ElementTree as ET

SITE = 'https://cliptate.github.io'
DIST = Path(__file__).resolve().parents[1] / 'dist'
LANGUAGES = {'zh': 'zh-CN', 'en': 'en', 'ja': 'ja', 'ko': 'ko', 'de': 'de'}


class Page(HTMLParser):
    def __init__(self, source):
        super().__init__()
        self.meta, self.alternates, self.links, self.images = {}, {}, [], []
        self.ids, self.locales, self.schemas = set(), set(), []
        self.title, self.h1, self.text = [], [], []
        self.in_title = self.in_h1 = self.in_schema = False
        self.schema_text = ''
        self.h1_count = 0
        self.feed(source)

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag == 'html':
            self.lang = attrs.get('lang')
        if attrs.get('id'):
            self.ids.add(attrs['id'])
        if attrs.get('data-locale'):
            self.locales.add(attrs['data-locale'])
        if tag == 'title':
            self.in_title = True
        if tag == 'h1':
            self.in_h1 = True
            self.h1_count += 1
        if tag == 'meta':
            self.meta[attrs.get('name', attrs.get('property'))] = attrs.get('content', '')
        if tag == 'link' and attrs.get('rel') == 'canonical':
            self.canonical = attrs['href']
        if tag == 'link' and attrs.get('hreflang'):
            assert attrs['hreflang'] not in self.alternates, 'duplicate hreflang'
            self.alternates[attrs['hreflang']] = attrs['href']
        if tag == 'a' and attrs.get('href'):
            self.links.append(attrs['href'])
        if tag == 'img':
            self.images.append(attrs)
        if tag == 'script' and attrs.get('type') == 'application/ld+json':
            self.in_schema = True
            self.schema_text = ''

    def handle_endtag(self, tag):
        if tag == 'title':
            self.in_title = False
        if tag == 'h1':
            self.in_h1 = False
        if tag == 'script' and self.in_schema:
            data = json.loads(self.schema_text)
            self.schemas.extend(data.get('@graph', [data]))
            self.in_schema = False

    def handle_data(self, data):
        if self.in_title:
            self.title.append(data)
        if self.in_h1:
            self.h1.append(data)
        if self.in_schema:
            self.schema_text += data
        else:
            self.text.append(data)


def language_path(path):
    prefix = path.split('/')[1]
    if prefix in LANGUAGES:
        return prefix, path[len(prefix) + 1:] or '/'
    return 'zh', path


def localize(path, language):
    return path if language == 'zh' else f'/{language}{path}'


def require(condition, message):
    if not condition:
        raise SystemExit(message)


files = list(DIST.rglob('index.html'))
require(files, 'Build the site before running npm run check:seo')
pages = {}
for file in files:
    path = '/' + file.parent.relative_to(DIST).as_posix().strip('.')
    path = path.rstrip('/') + '/'
    pages[path] = Page(file.read_text())
base_paths = {path for path in pages if language_path(path)[0] == 'zh'}
require(set(pages) == {localize(path, lang) for path in base_paths for lang in LANGUAGES}, 'Missing locale routes')

sitemap = {}
for file in DIST.glob('sitemap-*.xml'):
    tree = ET.parse(file)
    for element in tree.findall('{http://www.sitemaps.org/schemas/sitemap/0.9}url'):
        location = element.findtext('{http://www.sitemaps.org/schemas/sitemap/0.9}loc')
        sitemap[location] = {link.get('hreflang'): link.get('href') for link in element.findall('{http://www.w3.org/1999/xhtml}link')}
require(set(sitemap) == {SITE + path for path in pages}, 'Sitemap must contain exactly the canonical pages')
titles = set()
for path, page in pages.items():
    language, base = language_path(path)
    canonical = SITE + path
    expected = {locale: SITE + localize(base, lang) for lang, locale in LANGUAGES.items()}
    expected['x-default'] = SITE + base
    require(page.lang == LANGUAGES[language], f'{path}: wrong document language')
    require(page.locales == {language}, f'{path}: mixed language content in static HTML')
    require(page.h1_count == 1 and ''.join(page.h1).strip(), f'{path}: expected one meaningful H1')
    require(page.canonical == canonical, f'{path}: incorrect canonical')
    require(page.alternates == expected, f'{path}: missing or incorrect hreflang relationship')
    require(sitemap[canonical] == expected, f'{path}: sitemap alternates disagree with HTML')
    title = ''.join(page.title).strip()
    require(title and title not in titles, f'{path}: missing or duplicate title')
    titles.add(title)
    require(page.meta.get('description'), f'{path}: missing description')
    require('noindex' not in page.meta.get('robots', '').lower(), f'{path}: unexpectedly noindex')
    for key, value in [('og:url', canonical), ('og:title', title), ('twitter:title', title), ('og:description', page.meta['description']), ('twitter:description', page.meta['description'])]:
        require(page.meta.get(key) == value, f'{path}: {key} disagrees with page metadata')
    image = page.meta.get('og:image', '')
    require(image == page.meta.get('twitter:image') and (DIST / urlsplit(image).path.lstrip('/')).is_file(), f'{path}: missing social image')
    for img in page.images:
        require('alt' in img and img.get('width') and img.get('height'), f'{path}: image lacks alt or dimensions')
        require((DIST / img['src'].lstrip('/')).is_file(), f'{path}: broken image')
    types = {schema['@type']: schema for schema in page.schemas}
    require({'Organization', 'WebSite', 'WebPage'} <= types.keys(), f'{path}: missing site identity schema')
    require(types['WebPage']['url'] == canonical and types['WebPage']['inLanguage'] == page.lang, f'{path}: wrong WebPage schema')
    if base == '/':
        app = types.get('SoftwareApplication', {})
        require(app.get('url') == canonical and app.get('description') == page.meta['description'], f'{path}: wrong application schema')
        require(app['offers']['price'] == '0' and app['offers']['url'].startswith('https://github.com/cliptate/cliptate/releases'), f'{path}: free offer must identify GitHub distribution')
    else:
        require('BreadcrumbList' in types, f'{path}: missing breadcrumbs')
        for crumb in types['BreadcrumbList']['itemListElement']:
            require(urlsplit(crumb['item']).path in pages, f'{path}: broken breadcrumb')
    if base == '/guide/':
        faq = types.get('FAQPage', {})
        visible_text = ' '.join(page.text)
        require(faq.get('inLanguage') == page.lang and len(faq.get('mainEntity', [])) >= 6, f'{path}: incomplete FAQ schema')
        for question in faq['mainEntity']:
            require(question['name'] in visible_text and question['acceptedAnswer']['text'] in visible_text, f'{path}: schema FAQ differs from visible content')
    elif base.startswith('/blog/') and base != '/blog/':
        article = types.get('Article', {})
        require(article.get('inLanguage') == page.lang and article.get('mainEntityOfPage') == canonical and article.get('headline') == ''.join(page.h1).strip(), f'{path}: article schema does not match page')
    for href in page.links:
        url = urlsplit(urljoin(canonical, href))
        if url.netloc != urlsplit(SITE).netloc:
            continue
        require(url.path in pages, f'{path}: broken internal link {href}')
        if url.fragment:
            require(unquote(url.fragment) in pages[url.path].ids, f'{path}: missing anchor {href}')
        target_language, target_base = language_path(url.path)
        if target_base != base:
            require(target_language == language, f'{path}: navigation loses language at {href}')
require('Sitemap: ' + SITE + '/sitemap-index.xml' in (DIST / 'robots.txt').read_text(), 'robots.txt does not advertise sitemap')
print(f'SEO checks passed: {len(pages)} static pages, five locales, metadata, schemas, sitemap, images and internal links.')
