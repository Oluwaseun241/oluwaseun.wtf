import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import { promises as fs } from 'fs';
import { join } from 'path';
import rehypeHighlight from 'rehype-highlight';
import rehypeStringify from 'rehype-stringify';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import remarkGfm from 'remark-gfm';

const articlesDirectory = join(process.cwd(), 'content/articles');

export interface ArticleMetadata {
  title: string;
  date: string;
  summary: string;
  slug: string;
}

export async function getArticleBySlug(slug: string) {
  const fullPath = join(articlesDirectory, `${slug}.md`);
  const fileContents = await fs.readFile(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  
  const processedContent = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeHighlight)
    .use(rehypeStringify, {
      closeSelfClosing: true,
      allowDangerousHtml: true,
      allowDangerousCharacters: true,
    })
    .process(content);
  
  return {
    slug,
    content: processedContent.toString(),
    ...data,
  };
}

export async function getAllArticles(): Promise<ArticleMetadata[]> {
  const fileNames = await fs.readdir(articlesDirectory);
  const articles = await Promise.all(
    fileNames.map(async (fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = join(articlesDirectory, fileName);
      const fileContents = await fs.readFile(fullPath, 'utf8');
      const { data } = matter(fileContents);

      return {
        slug,
        ...data,
      } as ArticleMetadata;
    })
  );

  return articles.sort((a, b) => (a.date < b.date ? 1 : -1));
} 