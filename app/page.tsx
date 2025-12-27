import Header from './components/Header';
import Footer from './components/Footer';
import FeaturedSlider from './components/FeaturedSlider';
import Link from 'next/link';

async function getArticles() {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
    const res = await fetch(`${baseUrl}/api/articles`, { 
      cache: 'no-store',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!res.ok) throw new Error('Failed to fetch');
    return await res.json();
  } catch (error) {
    console.error('Error fetching articles:', error);
    return [];
  }
}

export default async function Home() {
  const articles = await getArticles();
  const featuredArticles = articles.slice(0, 3);

  return (
    <>
      <Header />

      {/* Masonry Section */}
      <section id="bricks">
        <div className="row masonry">
          {/* brick-wrapper */}
          <div className="bricks-wrapper">
            <div className="grid-sizer"></div>

            {/* Featured Slider */}
            <FeaturedSlider articles={featuredArticles} />

            {/* Regular Articles */}
            {articles.map((article, index) => {
              // Skip featured articles
              if (index < 3) return null;

              if (article.postFormat === 'standard') {
                return (
                  <article key={article.id} className="brick entry format-standard animate-this">
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
                            {article.tags.length > 0 && (
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
                );
              }

              if (article.postFormat === 'audio') {
                return (
                  <article key={article.id} className="brick entry format-audio animate-this">
                    <div className="entry-thumb">
                      <Link href={`/posts/${article.id}`} className="thumb-link">
                        <img src={article.featuredImage} alt={article.title} />
                      </Link>
                      {article.audioUrl && (
                        <div className="audio-wrap">
                          <audio id="player" src={article.audioUrl}  controls></audio>
                        </div>
                      )}
                    </div>
                    <div className="entry-text">
                      <div className="entry-header">
                        <div className="entry-meta">
                          <span className="cat-links">
                            <Link href={`/category/${article.category}`}>{article.category}</Link>
                            {article.tags.length > 0 && (
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
                );
              }

              if (article.postFormat === 'gallery') {
                return (
                  <article key={article.id} className="brick entry format-gallery group animate-this">
                    <div className="entry-thumb">
                      <div className="post-slider flexslider">
                        <ul className="slides">
                          {article.galleryImages?.map((img, idx) => (
                            <li key={idx}>
                              <img src={img} alt={`${article.title} ${idx + 1}`} />
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="entry-text">
                      <div className="entry-header">
                        <div className="entry-meta">
                          <span className="cat-links">
                            <Link href={`/category/${article.category}`}>{article.category}</Link>
                            {article.tags.length > 0 && (
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
                );
              }

              if (article.postFormat === 'video') {
                return (
                  <article key={article.id} className="brick entry format-video animate-this">
                    <div className="entry-thumb video-image">
                      {article.videoUrl ? (
                        <a href={article.videoUrl} data-lity>
                          <img src={article.featuredImage} alt={article.title} />
                        </a>
                      ) : (
                        <Link href={`/posts/${article.id}`}>
                          <img src={article.featuredImage} alt={article.title} />
                        </Link>
                      )}
                    </div>
                    <div className="entry-text">
                      <div className="entry-header">
                        <div className="entry-meta">
                          <span className="cat-links">
                            <Link href={`/category/${article.category}`}>{article.category}</Link>
                            {article.tags.length > 0 && (
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
                );
              }

              if (article.postFormat === 'quote') {
                return (
                  <article key={article.id} className="brick entry format-quote animate-this">
                    <div className="entry-thumb">
                      <blockquote>
                        <p>{article.quote}</p>
                        <cite>{article.quoteAuthor}</cite>
                      </blockquote>
                    </div>
                  </article>
                );
              }

              if (article.postFormat === 'link') {
                return (
                  <article key={article.id} className="brick entry format-link animate-this">
                    <div className="entry-thumb">
                      <div className="link-wrap">
                        <p>{article.linkDescription}</p>
                        <cite>
                          <a target="_blank" href={article.linkUrl} rel="noopener noreferrer">
                            {article.linkUrl}
                          </a>
                        </cite>
                      </div>
                    </div>
                  </article>
                );
              }

              return null;
            })}
          </div>
        </div>

        {/* Pagination */}
        <div className="row">
          <nav className="pagination">
            <span className="page-numbers prev inactive">Prev</span>
            <span className="page-numbers current">1</span>
            <a href="#" className="page-numbers">2</a>
            <a href="#" className="page-numbers">3</a>
            <a href="#" className="page-numbers">4</a>
            <a href="#" className="page-numbers">5</a>
            <a href="#" className="page-numbers">6</a>
            <a href="#" className="page-numbers">7</a>
            <a href="#" className="page-numbers">8</a>
            <a href="#" className="page-numbers">9</a>
            <a href="#" className="page-numbers next">Next</a>
          </nav>
        </div>
      </section>

      <Footer />
    </>
  );
}
