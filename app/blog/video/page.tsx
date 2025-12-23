import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Link from 'next/link';
import { articles } from '@/app/lib/data';

export default function VideoPostPage() {
  // Get a video post article
  const article = articles.find((a) => a.postFormat === 'video') || articles[0];

  return (
    <>
      <Header />

      <section id="content-wrap" className="blog-single">
        <div className="row">
          <div className="col-twelve">
            <article className="format-video">
              <div className="content-media">
                <div className="fluid-video-wrapper">
                  <iframe
                    src={article.videoUrl || 'https://player.vimeo.com/video/14592941?title=0&byline=0&portrait=0'}
                    width="640"
                    height="360"
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>

              <div className="primary-content">
                <h1 className="entry-title">Hey, This Is A Video Format Post.</h1>

                <ul className="entry-meta">
                  <li className="date">October 09, 2015</li>
                  <li className="cat">
                    <Link href="/category">Wordpress</Link>
                    <Link href="/category">Design</Link>
                  </li>
                </ul>

                <p className="lead">
                  Duis ex ad cupidatat tempor Excepteur cillum cupidatat fugiat nostrud cupidatat dolor sunt sint sit nisi est eu exercitation incididunt adipisicing veniam velit id fugiat enim mollit amet anim veniam dolor dolor irure velit commodo cillum sit nulla ullamco magna amet magna cupidatat qui labore cillum sit in tempor veniam consequat non laborum adipisicing aliqua ea nisi sint.
                </p>

                <p>
                  Duis ex ad cupidatat tempor Excepteur cillum cupidatat fugiat nostrud cupidatat dolor sunt sint sit nisi est eu exercitation incididunt adipisicing veniam velit id fugiat enim mollit amet anim veniam dolor dolor irure velit commodo cillum sit nulla ullamco magna amet magna cupidatat qui labore cillum sit in tempor veniam consequat non laborum adipisicing aliqua ea nisi sint ut quis proident ullamco ut dolore culpa occaecat ut laboris in sit minim cupidatat ut dolor voluptate enim veniam consequat occaecat fugiat in adipisicing in amet Ut nulla nisi non ut enim aliqua laborum mollit quis nostrud sed sed.
                </p>

                <p>
                  <img src="/images/shutterbug.jpg" alt="" />
                </p>

                <h2>Large Heading</h2>

                <p>
                  Harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus{' '}
                  <a href="#">omnis voluptas assumenda est</a> id quod maxime placeat facere possimus, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et.
                </p>

                <blockquote>
                  <p>
                    This is a simple example of a styled blockquote. A blockquote tag typically specifies a section that is quoted from another source of some sort, or highlighting text in your post.
                  </p>
                </blockquote>

                <p>
                  Odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nulla vitae elit libero, a pharetra augue laboris in sit minim cupidatat ut dolor voluptate enim veniam consequat occaecat fugiat in adipisicing in amet Ut nulla nisi non ut enim aliqua laborum mollit quis nostrud sed sed..
                </p>

                <h3>Smaller Heading</h3>

                <p>
                  Quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.
                </p>

                <pre>
                  <code>{`code {
   font-size: 1.4rem;
   margin: 0 .2rem;
   padding: .2rem .6rem;
   white-space: nowrap;
   background: #F1F1F1;
   border: 1px solid #E1E1E1;	
   border-radius: 3px;
}`}</code>
                </pre>

                <p>
                  Odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa.
                </p>

                <ul>
                  <li>
                    Donec nulla non metus auctor fringilla.
                    <ul>
                      <li>Lorem ipsum dolor sit amet.</li>
                      <li>Lorem ipsum dolor sit amet.</li>
                      <li>Lorem ipsum dolor sit amet.</li>
                    </ul>
                  </li>
                  <li>Donec nulla non metus auctor fringilla.</li>
                  <li>Donec nulla non metus auctor fringilla.</li>
                </ul>

                <p>
                  Odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nulla vitae elit libero, a pharetra augue laboris in sit minim cupidatat ut dolor voluptate enim veniam consequat occaecat fugiat in adipisicing in amet Ut nulla nisi non ut enim aliqua laborum mollit quis nostrud sed sed..
                </p>

                <p className="tags">
                  <span>Tagged in :</span>
                  <a href="#">orci</a>
                  <a href="#">lectus</a>
                  <a href="#">varius</a>
                  <a href="#">turpis</a>
                </p>

                <div className="author-profile">
                  <img src="/images/avatars/user-05.jpg" alt="" />

                  <div className="about">
                    <h4>
                      <a href="#">Jonathan Smith</a>
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
                  <Link href="/blog/audio" rel="prev">
                    <span>Previous</span>
                    Audio Format Post
                  </Link>
                </div>
                <div className="next-nav">
                  <Link href="/blog/gallery" rel="next">
                    <span>Next</span>
                    Gallery Format Post
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </div>

        {/* Comments Section */}
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
                      <cite>Itachi Suspended</cite>
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
                        Suscipit laborum et dolorum fuga. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.
                      </p>
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
