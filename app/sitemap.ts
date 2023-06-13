import { MetadataRoute } from 'next';

type Sitemap = Array<{
  url: string
  lastModified?: string | Date
}>

const sitemap: MetadataRoute.Sitemap = [
  {
    url: 'https://colin-williams.dev',
    lastModified: new Date(),
  },
  {
    url: 'https://colin-williams.dev/about',
    lastModified: new Date(),
  },
  {
    url: 'https://colin-williams.dev/contact',
    lastModified: new Date(),
  },
  {
    url: 'https://colin-williams.dev/skills',
    lastModified: new Date(),
  },
  // Add more URLs as needed
];

export default sitemap;
