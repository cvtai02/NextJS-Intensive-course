'use client';

import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

export default function CategoryPage() {
  const searchParams = useSearchParams();
  const category = searchParams.get('cat') || 'all';
  const [articles, setArticles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchArticles() {
      try {
        const url = category !== 'all' 
          ? `/api/articles?category=${category}`
          : '/api/articles';
        const res = await fetch(url);
        const data = await res.json();
        setArticles(data);
      } catch (error) {
        console.error('Error fetching articles:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchArticles();
  }, [category]);

  return (
    <>
      <Header />

      {/* page header */}
      <section id="page-header">
        <div className="row current-cat">
          <div className="col-full">
            <h1>Category: {category.charAt(0).toUpperCase() + category.slice(1)}</h1>
          </div>
        </div>
      </section>

      {/* masonry */}
      <section id="bricks" className="with-top-sep">
        <div className="row masonry">
          {/* brick-wrapper */}
          <div className="bricks-wrapper">
            <div className="grid-sizer"></div>

            {loading ? (
              <div className="col-full">
                <p>Loading articles...</p>
              </div>
            ) : articles.length === 0 ? (
              <div className="col-full">
                <p>No articles found in this category.</p>
              </div>
            ) : (
              articles.map((article) => (
                <article key={article.id} className="brick entry format-standard animate-this">
                  <div className="entry-thumb">
                    <Link href={`/posts/${article.id}`} className="thumb-link">
                      <img src={article.featuredImage || '/images/thumbs/diagonal-building.jpg'} alt={article.title} />
                    </Link>
                  </div>

                  <div className="entry-text">
                    <div className="entry-header">
                      <div className="entry-meta">
                        <span className="cat-links">
                          <Link href={`/category?cat=${article.category}`}>{article.category}</Link>
                          {article.tags && article.tags[0] && (
                            <Link href="#">{article.tags[0]}</Link>
                          )}
                        </span>
                      </div>

                      <h1 className="entry-title">
                        <Link href={`/posts/${article.id}`}>{article.title}</Link>
                      </h1>
                    </div>
                    <div className="entry-excerpt">
                      {article.excerpt}
                    </div>
                  </div>
                </article>
              ))
            )}

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
