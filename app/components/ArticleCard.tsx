import Link from 'next/link';
import { Article } from '../types';

interface ArticleCardProps {
  article: Article;
}

export default function ArticleCard({ article }: ArticleCardProps) {
  const postFormatClass = article.postFormat === 'standard' ? '' : `format-${article.postFormat}`;

  return (
    <article className={`masonry-brick entry ${postFormatClass}`}>
      <div className="entry-thumb">
        <Link href={`/posts/${article.id}`} className="thumb-link">
          <img src={article.featuredImage} alt={article.title} />
        </Link>
      </div>

      <div className="entry-text">
        <div className="entry-header">
          <div className="entry-meta">
            <span className="cat-links">
              <Link href={`/category/${article.category}`}>{article.category}</Link>
            </span>
          </div>

          <h1 className="entry-title">
            <Link href={`/posts/${article.id}`}>{article.title}</Link>
          </h1>
        </div>
        <div className="entry-excerpt">{article.excerpt}</div>
      </div>
    </article>
  );
}
