import { en } from './en';

// Simple i18n utility (single locale for now)
const dict = en;

export function t(key: string, params?: Record<string, string | number>) {
  let template = (dict as any)[key] || key;
  if (params) {
    Object.entries(params).forEach(([k,v]) => {
      template = template.replace(new RegExp(`{${k}}`, 'g'), String(v));
    });
  }
  return template as string;
}

