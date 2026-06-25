import type { MetadataRoute } from 'next';

const BASE_URL = 'https://anveshan.local';
const ROUTES = ['/', '/pipeline', '/usecases', '/security'];

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '/' ? 1 : 0.8,
  }));
}
