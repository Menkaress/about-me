import { useParams } from 'next/navigation';
import { useMemo } from 'react';
import de from '../../messages/de.json';
import en from '../../messages/en.json';
import ru from '../../messages/ru.json';

// Create a simple lookup object
const messages = { de, en, ru } as const;

export function useTranslations() {
  const params = useParams();
  const locale = (params?.locale as string) || 'de';

  const t = useMemo(() => {
    return (key: string): string => {
      const currentMessages = messages[locale as keyof typeof messages] || messages.de;
      const keys = key.split('.');
      let value: unknown = currentMessages;
      
      for (const k of keys) {
        if (value && typeof value === 'object' && k in value) {
          value = (value as Record<string, unknown>)[k];
        } else {
          return key;
        }
      }
      
      return typeof value === 'string' ? value : key;
    };
  }, [locale]);

  return t;
} 