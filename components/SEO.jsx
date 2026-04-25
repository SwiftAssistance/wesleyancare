import { Helmet } from 'react-helmet-async';

export const SITE_URL   = 'https://www.wesleyancare.co.uk';
const SITE_NAME         = 'Wesleyan Care';
const DEFAULT_DESC      = 'Private home care in Slough and Berkshire. Specialist support for dementia, mental health, cardiac conditions, spinal injuries, palliative care, and more. Local, independent, fully vetted. Call 01753 424 473.';
const DEFAULT_IMAGE     = 'https://images.pexels.com/photos/8088906/pexels-photo-8088906.jpeg?auto=compress&cs=tinysrgb&w=1200';
const PHONE             = '+441753424473';
const EMAIL             = 'support@wesleyancare.onmicrosoft.com';

/* ── Local business JSON-LD (appears on every page) ──────────────── */
const LOCAL_BUSINESS_LD = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'MedicalOrganization'],
  name: SITE_NAME,
  url: SITE_URL,
  telephone: PHONE,
  email: EMAIL,
  logo: `${SITE_URL}/logo.png`,
  image: DEFAULT_IMAGE,
  address: {
    '@type': 'PostalAddress',
    streetAddress: '18 Teesdale Road',
    addressLocality: 'Slough',
    postalCode: 'SL2 1UD',
    addressRegion: 'Berkshire',
    addressCountry: 'GB',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 51.5232,
    longitude: -0.5902,
  },
  areaServed: [
    { '@type': 'City',                name: 'Slough' },
    { '@type': 'City',                name: 'Windsor' },
    { '@type': 'City',                name: 'Maidenhead' },
    { '@type': 'City',                name: 'Eton' },
    { '@type': 'City',                name: 'Langley' },
    { '@type': 'City',                name: 'Burnham' },
    { '@type': 'AdministrativeArea', name: 'Berkshire' },
  ],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday'],
      opens: '08:00',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Saturday'],
      opens: '09:00',
      closes: '13:00',
    },
  ],
  priceRange: '££',
  currenciesAccepted: 'GBP',
  description: DEFAULT_DESC,
  sameAs: [],
};

/* ── BlogPosting JSON-LD builder ─────────────────────────────────── */
export function buildArticleLD(post) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.summary,
    image: post.coverImage || DEFAULT_IMAGE,
    datePublished: post.isoDate,
    dateModified: post.isoDate,
    author: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/logo.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/blogs/${post.slug}`,
    },
    keywords: post.tag,
    articleSection: post.tag,
    inLanguage: 'en-GB',
    wordCount: post.body
      .filter(b => b.type === 'p' || b.type === 'quote')
      .reduce((n, b) => n + (b.text ? b.text.split(/\s+/).length : 0), 0),
  };
}

/* ── BreadcrumbList JSON-LD builder ─────────────────────────────── */
export function buildBreadcrumbLD(crumbs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map(({ name, path }, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name,
      ...(path ? { item: `${SITE_URL}${path}` } : {}),
    })),
  };
}

/* ── Main SEO component ──────────────────────────────────────────── */
export default function SEO({
  title,
  description,
  canonical,
  image,
  type = 'website',
  extraSchema = [],
}) {
  const pageTitle     = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} – Private Home Care in Slough & Berkshire`;
  const pageDesc      = description || DEFAULT_DESC;
  const pageImage     = image || DEFAULT_IMAGE;
  const pageCanonical = `${SITE_URL}${canonical ?? '/'}`;
  const schemas       = [LOCAL_BUSINESS_LD, ...extraSchema];

  return (
    <Helmet>
      {/* ── Core ── */}
      <html lang="en-GB" />
      <title>{pageTitle}</title>
      <meta name="description"        content={pageDesc} />
      <link rel="canonical"           href={pageCanonical} />
      <meta name="robots"             content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />

      {/* ── Open Graph ── */}
      <meta property="og:site_name"   content={SITE_NAME} />
      <meta property="og:title"       content={pageTitle} />
      <meta property="og:description" content={pageDesc} />
      <meta property="og:image"       content={pageImage} />
      <meta property="og:image:alt"   content={`${SITE_NAME} – ${title || 'Private Home Care Slough'}`} />
      <meta property="og:url"         content={pageCanonical} />
      <meta property="og:type"        content={type} />
      <meta property="og:locale"      content="en_GB" />

      {/* ── Twitter / X ── */}
      <meta name="twitter:card"        content="summary_large_image" />
      <meta name="twitter:title"       content={pageTitle} />
      <meta name="twitter:description" content={pageDesc} />
      <meta name="twitter:image"       content={pageImage} />
      <meta name="twitter:image:alt"   content={`${SITE_NAME} – ${title || 'Private Home Care Slough'}`} />

      {/* ── JSON-LD (one block per schema) ── */}
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(s)}
        </script>
      ))}
    </Helmet>
  );
}
