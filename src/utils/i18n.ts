import en from '../i18n/en.json';
import es from '../i18n/es.json';

export type Lang = 'en' | 'es';

export const defaultLang: Lang = 'en';
export const languages: Lang[] = ['en', 'es'];

const translations = { en, es };

/**
 * Returns a translation function for the given language.
 * Automatically falls back to English if a key is missing.
 */
export function useTranslations(lang: string) {
  const currentLang = (lang === 'es' ? 'es' : 'en') as Lang;
  const dict = translations[currentLang];

  return function t(key: string, defaultVal: string = ''): string {
    const keys = key.split('.');
    let result: any = dict;
    for (const k of keys) {
      if (result && typeof result === 'object' && k in result) {
        result = result[k];
      } else {
        // Fallback to English dictionary
        let fallback: any = translations.en;
        for (const fk of keys) {
          if (fallback && typeof fallback === 'object' && fk in fallback) {
            fallback = fallback[fk];
          } else {
            fallback = null;
            break;
          }
        }
        return typeof fallback === 'string' ? fallback : defaultVal || key;
      }
    }
    return typeof result === 'string' ? result : defaultVal || key;
  };
}

/**
 * Bidirectional mapping between English and Spanish article slugs.
 */
export const slugMap: Record<string, string> = {
  'everything-is-design-the-philosophy-of-utility': 'todo-es-diseno-la-filosofia-de-la-utilidad',
  'the-logo-and-the-company-the-investment-in-trust': 'el-logotipo-y-la-empresa-la-inversion-en-confianza',
  'the-value-of-graphic-design-a-strategic-perspective': 'el-valor-del-diseno-grafico',
  'graphic-design-and-branding-the-authority-system': 'diseno-grafico-y-branding-el-sistema-de-autoridad',
  'what-is-typography-the-dna-of-information': 'que-es-la-tipografia-el-adn-de-la-civilizacion',
  'typographic-classification-the-geometry-of-tone': 'clasificacion-tipografica-la-geometria-del-tono',
  'the-logo-variants-strategic-adaptability': 'las-variantes-del-logotipo-adaptabilidad-estrategica',
  'visual-communication-or-graphic-design': 'comunicacion-visual-o-diseno-grafico',
  'illustrator-basics-precision-tools': 'illustrator-basico-herramientas-de-precision',
  'what-is-the-utility-of-learning-html': 'cual-es-la-utilidad-de-aprender-html',
  'what-is-html-the-structure-of-information': 'que-es-html-la-estructura-de-la-informacion',
  'what-is-css-the-visual-style-system': 'que-es-css-el-sistema-de-estilo-visual',
  'graphic-design-and-web-programming-the-strategic-translation': 'diseno-grafico-y-programacion-web-la-traduccion-estrategica',
};

export const reverseSlugMap: Record<string, string> = Object.fromEntries(
  Object.entries(slugMap).map(([enKey, esKey]) => [esKey, enKey])
);

/**
 * Resolves the alternate URL path for language switching.
 */
export function getAlternatePath(pathname: string, targetLang: string): string {
  // Remove leading/trailing slashes and split
  const cleanPath = pathname.replace(/\/$/, '');
  const parts = cleanPath.split('/').filter(Boolean);

  if (parts.length === 0) {
    return `/${targetLang}/`;
  }

  // Check if first segment is a language prefix
  const firstSegment = parts[0];
  const hasLangPrefix = firstSegment === 'en' || firstSegment === 'es';
  
  // If there's no language prefix or it's something else, return targetLang root
  if (!hasLangPrefix) {
    return `/${targetLang}/`;
  }

  const page = parts[1] || '';
  const slug = parts[2] || '';

  if (targetLang === 'en') {
    if (!page) return '/en/';
    
    // Page segment translation
    if (page === 'trabajos' || page === 'works') {
      return '/en/works';
    }
    
    if (page === 'perspectivas' || page === 'insight') {
      if (slug) {
        const enSlug = reverseSlugMap[slug] || slug;
        return `/en/insight/${enSlug}`;
      }
      return '/en/insight';
    }
  } else { // targetLang === 'es'
    if (!page) return '/es/';

    // Page segment translation
    if (page === 'works' || page === 'trabajos') {
      return '/es/trabajos';
    }

    if (page === 'insight' || page === 'perspectivas') {
      if (slug) {
        const esSlug = slugMap[slug] || slug;
        return `/es/perspectivas/${esSlug}`;
      }
      return '/es/perspectivas';
    }
  }

  // Fallback if not recognized
  return `/${targetLang}/`;
}
