import rss from '@astrojs/rss';
import { getArticles, getArticlePath, getArticleSlug } from '../utils/articles';
import { site } from '../config/site';

export async function GET(context: { site: string | undefined }) {
  const articles = await getArticles();
  const siteUrl = context.site ?? site.url;

  return rss({
    title: site.name,
    description: site.description,
    site: siteUrl,
    items: articles.map((entry) => ({
      title: entry.data.title,
      description: entry.data.description,
      pubDate: entry.data.date,
      link: new URL(getArticlePath(entry), siteUrl).href,
      author: entry.data.author,
      categories: [...entry.data.topics, ...entry.data.tags],
    })),
    customData: `<language>en-us</language>`,
  });
}
