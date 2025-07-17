interface TranslationValue {
  [key: string]: string | TranslationValue;
}

interface Translations {
  [key: string]: TranslationValue;
}

export async function getTranslations(locale: string): Promise<(key: string) => string> {
  let translations: Translations;
  
  try {
    translations = (await import(`../../messages/${locale}.json`)).default;
  } catch {
    translations = (await import('../../messages/de.json')).default;
  }

  return (key: string): string => {
    const keys = key.split('.');
    let value: string | TranslationValue = translations;
    
    for (const k of keys) {
      if (typeof value === 'object' && value !== null && k in value) {
        value = value[k];
      } else {
        return key; // fallback to key if path not found
      }
    }
    
    return typeof value === 'string' ? value : key;
  };
} 