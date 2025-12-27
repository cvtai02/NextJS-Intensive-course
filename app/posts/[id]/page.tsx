import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';

async function getArticle(id: string) {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
    const res = await fetch(`${baseUrl}/api/articles/${id}`, { 
      cache: 'no-store',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!res.ok) return null;
    return await res.json();
  } catch (error) {
    console.error('Error fetching article:', error);
    return null;
  }
}

export default async function PostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const article = await getArticle(id);

  if (!article) {
    return (
      <>
        <Header />
        <div className="row">
          <div className="col-full">
            <h1>Article not found</h1>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />

      <section id="content-wrap" className="blog-single">
        <div className="row">
          <div className="col-twelve">
            <article className="format-standard">
              <div className="content-media">
                <div className="post-thumb">
                  <img src={article.featuredImage || '/images/thumbs/single/single-01.jpg'} alt={article.title} />
                </div>
              </div>

              <div className="primary-content">
                <h1 className="page-title">{article.title}</h1>

                <ul className="entry-meta">
                  <li className="date">{article.publishDate}</li>
                  <li className="cat">
                    <Link href={`/category/${article.category}`}>{article.category}</Link>
                  </li>
                </ul>

                {article.excerpt && (
                  <p className="lead">
                    {article.excerpt}
                  </p>
                )}

                {/* Render HTML content from admin */}
                <div dangerouslySetInnerHTML={{ __html: article.content }} />

                {article.tags && article.tags.length > 0 && (
                  <p className="tags">
                    <span>Tagged in :</span>
                    {article.tags.map((tag, i) => (
                      <a key={i} href="#">{tag}</a>
                    ))}
                  </p>
                )}

                <div className="author-profile">
                  <img src="/images/avatars/user-05.jpg" alt="" />

                  <div className="about">
                    <h4>
                      <a href="#">{article.author || 'Jonathan Smith'}</a>
                    </h4>

                    <p>
                      Alias aperiam at debitis deserunt dignissimos dolorem doloribus, fuga fugiat impedit laudantium magni maxime nihil nisi quidem quisquam sed ullam voluptas voluptatum. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </p>

                    <ul className="author-social">
                      <li><a href="#">Facebook</a></li>
                      <li><a href="#">Twitter</a></li>
                      <li><a href="#">GooglePlus</a></li>
                      <li><a href="#">Instagram</a></li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="pagenav group">
                <div className="prev-nav">
                  <a href="#" rel="prev">
                    <span>Previous</span>
                    Tips on Minimalist Design
                  </a>
                </div>
                <div className="next-nav">
                  <a href="#" rel="next">
                    <span>Next</span>
                    Less Is More
                  </a>
                </div>
              </div>
            </article>
          </div>
        </div>

        <div className="comments-wrap">
          <div id="comments" className="row">
            <div className="col-full">
              <h3>5 Comments</h3>

              <ol className="commentlist">
                <li className="depth-1">
                  <div className="avatar">
                    <img width="50" height="50" className="avatar" src="/images/avatars/user-01.jpg" alt="" />
                  </div>

                  <div className="comment-content">
                    <div className="comment-info">
                      <cite>Itachi Uchiha</cite>

                      <div className="comment-meta">
                        <time className="comment-time" dateTime="2014-07-12T23:05">Jul 12, 2014 @ 23:05</time>
                        <span className="sep">/</span>
                        <a className="reply" href="#">Reply</a>
                      </div>
                    </div>

                    <div className="comment-text">
                      <p>
                        Adhuc quaerendum est ne, vis ut harum tantas noluisse, id suas iisque mei. Nec te inani ponderum vulputate, facilisi expetenda has et. Iudico dictas scriptorem an vim, ei alia mentitum est, ne has voluptua praesent.
                      </p>
                    </div>
                  </div>
                </li>

                <li className="thread-alt depth-1">
                  <div className="avatar">
                    <img width="50" height="50" className="avatar" src="/images/avatars/user-04.jpg" alt="" />
                  </div>

                  <div className="comment-content">
                    <div className="comment-info">
                      <cite>John Doe</cite>

                      <div className="comment-meta">
                        <time className="comment-time" dateTime="2014-07-12T24:05">Jul 12, 2014 @ 24:05</time>
                        <span className="sep">/</span>
                        <a className="reply" href="#">Reply</a>
                      </div>
                    </div>

                    <div className="comment-text">
                      <p>
                        Sumo euismod dissentiunt ne sit, ad eos iudico qualisque adversarium, tota falli et mei. Esse euismod urbanitas ut sed, et duo scaevola pericula splendide. Primis veritus contentiones nec ad, nec et tantas semper delicatissimi.
                      </p>
                    </div>
                  </div>

                  <ul className="children">
                    <li className="depth-2">
                      <div className="avatar">
                        <img width="50" height="50" className="avatar" src="/images/avatars/user-03.jpg" alt="" />
                      </div>

                      <div className="comment-content">
                        <div className="comment-info">
                          <cite>Kakashi Hatake</cite>

                          <div className="comment-meta">
                            <time className="comment-time" dateTime="2014-07-12T25:05">Jul 12, 2014 @ 25:05</time>
                            <span className="sep">/</span>
                            <a className="reply" href="#">Reply</a>
                          </div>
                        </div>

                        <div className="comment-text">
                          <p>
                            Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris
                          </p>
                        </div>
                      </div>

                      <ul className="children">
                        <li className="depth-3">
                          <div className="avatar">
                            <img width="50" height="50" className="avatar" src="/images/avatars/user-04.jpg" alt="" />
                          </div>

                          <div className="comment-content">
                            <div className="comment-info">
                              <cite>John Doe</cite>

                              <div className="comment-meta">
                                <time className="comment-time" dateTime="2014-07-12T25:15">July 12, 2014 @ 25:15</time>
                                <span className="sep">/</span>
                                <a className="reply" href="#">Reply</a>
                              </div>
                            </div>

                            <div className="comment-text">
                              <p>
                                Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum.
                              </p>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>

                <li className="depth-1">
                  <div className="avatar">
                    <img width="50" height="50" className="avatar" src="/images/avatars/user-02.jpg" alt="" />
                  </div>

                  <div className="comment-content">
                    <div className="comment-info">
                      <cite>Shikamaru Nara</cite>

                      <div className="comment-meta">
                        <time className="comment-time" dateTime="2014-07-12T25:15">July 12, 2014 @ 25:15</time>
                        <span className="sep">/</span>
                        <a className="reply" href="#">Reply</a>
                      </div>
                    </div>

                    <div className="comment-text">
                      <p>Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem.</p>
                    </div>
                  </div>
                </li>
              </ol>

              <div className="respond">
                <h3>Leave a Comment</h3>

                <form name="contactForm" id="contactForm" method="post" action="">
                  <fieldset>
                    <div className="form-field">
                      <input name="cName" type="text" id="cName" className="full-width" placeholder="Your Name" />
                    </div>

                    <div className="form-field">
                      <input name="cEmail" type="text" id="cEmail" className="full-width" placeholder="Your Email" />
                    </div>

                    <div className="form-field">
                      <input name="cWebsite" type="text" id="cWebsite" className="full-width" placeholder="Website" />
                    </div>

                    <div className="message form-field">
                      <textarea name="cMessage" id="cMessage" className="full-width" placeholder="Your Message"></textarea>
                    </div>

                    <button type="submit" className="submit button-primary">Submit</button>
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
