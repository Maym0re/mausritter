import { en } from './en';

// Simple i18n utility (single locale for now)
const dict: Record<string, string> = en as Record<string, string>; // widen to allow dynamic key lookup

type Params = Record<string, string | number>;

export function t(key: string, params?: Params): string {
  let template = dict[key] ?? key;
  if (params) {
    for (const [k, v] of Object.entries(params)) {
      template = template.replace(new RegExp(`{${k}}`, 'g'), String(v));
    }
  }
  return template;
}
