import rss from '@astrojs/rss';
import { getArticles, articlePath } from '@/lib/articles';
import { site } from '@/config/site';
import type { APIRoute } from 'astro';

export const GET: APIRoute = async (context) => {
  const articles = await getArticles();
  return rss({
    title: site.name,
    description: site.description,
    site: context.site?.toString() ?? site.url,
    items: articles.map((article) => ({
      title: article.data.title,
      description: article.data.description,
      pubDate: article.data.date,
      link: articlePath(article),
    })),
  });
};
