import { MetadataRoute } from 'next';
import { siteConfig } from '@/utils/site';

export default function sitemap(): MetadataRoute.Sitemap {
    const routes = ['', '/about', '/services', '/contact', '/blog'].map((route) => ({
        url: `${siteConfig.url}${route}`,
        lastModified: new Date().toISOString().split('T')[0],
    }));

    const blogPosts = ['why-nextjs-app-router', 'tailwind-css-best-practices', 'seo-in-the-age-of-ai'].map(
        (slug) => ({
            url: `${siteConfig.url}/blog/${slug}`,
            lastModified: new Date().toISOString().split('T')[0],
        })
    );

    return [...routes, ...blogPosts];
}
