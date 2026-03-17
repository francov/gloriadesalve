import { getCollection } from 'astro:content';
import type { Locale } from './utils';

export async function getArtworksByLocale(locale: Locale) {
  const all = await getCollection('artworks');
  return all
    .filter((a) => a.id.startsWith(`${locale}/`))
    .sort((a, b) => a.data.order - b.data.order);
}

/** Strip locale prefix: "it/avanzata" -> "avanzata" */
export function artworkSlug(id: string): string {
  return id.split('/').slice(1).join('/');
}
