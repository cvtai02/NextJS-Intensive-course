import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function CategoryPage() {
  return (
    <>
      <Header />

      {/* page header */}
      <section id="page-header">
        <div className="row current-cat">
          <div className="col-full">
            <h1>Category: Photography</h1>
          </div>
        </div>
      </section>

      {/* masonry */}
      <section id="bricks" className="with-top-sep">
        <div className="row masonry">
          {/* brick-wrapper */}
          <div className="bricks-wrapper">
            <div className="grid-sizer"></div>

            <article className="brick entry format-standard animate-this">
              <div className="entry-thumb">
                <Link href="/posts/1" className="thumb-link">
                  <img src="/images/thumbs/diagonal-building.jpg" alt="building" />
                </Link>
              </div>

              <div className="entry-text">
                <div className="entry-header">
                  <div className="entry-meta">
                    <span className="cat-links">
                      <a href="#">Design</a>
                      <a href="#">Photography</a>
                    </span>
                  </div>

                  <h1 className="entry-title">
                    <Link href="/posts/1">Just a Standard Format Post.</Link>
                  </h1>
                </div>
                <div className="entry-excerpt">
                  Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua cillum in consequat consequat in culpa in anim.
                </div>
              </div>
            </article>

            <article className="brick entry format-standard animate-this">
              <div className="entry-thumb">
                <Link href="/posts/2" className="thumb-link">
                  <img src="/images/thumbs/ferris-wheel.jpg" alt="ferris wheel" />
                </Link>
              </div>

              <div className="entry-text">
                <div className="entry-header">
                  <div className="entry-meta">
                    <span className="cat-links">
                      <a href="#">Design</a>
                      <a href="#">UI</a>
                    </span>
                  </div>

                  <h1 className="entry-title">
                    <Link href="/posts/2">This Is Another Standard Format Post.</Link>
                  </h1>
                </div>
                <div className="entry-excerpt">
                  Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua cillum in consequat consequat in culpa in anim.
                </div>
              </div>
            </article>

            <article className="brick entry format-audio animate-this">
              <div className="entry-thumb">
                <Link href="/posts/3" className="thumb-link">
                  <img src="/images/thumbs/concert.jpg" alt="concert" />
                </Link>

                <div className="audio-wrap">
                  <audio id="player2" src="/media/AirReview-Landmarks-02-ChasingCorporate.mp3" controls></audio>
                </div>
              </div>

              <div className="entry-text">
                <div className="entry-header">
                  <div className="entry-meta">
                    <span className="cat-links">
                      <a href="#">Design</a>
                      <a href="#">Music</a>
                    </span>
                  </div>

                  <h1 className="entry-title">
                    <Link href="/posts/3">This Is a Audio Format Post.</Link>
                  </h1>
                </div>
                <div className="entry-excerpt">
                  Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua cillum in consequat consequat in culpa in anim.
                </div>
              </div>
            </article>

            <article className="brick entry format-quote animate-this">
              <div className="entry-thumb">
                <blockquote>
                  <p>Good design is making something intelligible and memorable. Great design is making something memorable and meaningful.</p>
                  <cite>Dieter Rams</cite>
                </blockquote>
              </div>
            </article>

            <article className="brick entry format-standard animate-this">
              <div className="entry-thumb">
                <Link href="/posts/4" className="thumb-link">
                  <img src="/images/thumbs/shutterbug.jpg" alt="Shutterbug" />
                </Link>
              </div>

              <div className="entry-text">
                <div className="entry-header">
                  <div className="entry-meta">
                    <span className="cat-links">
                      <a href="#">Photography</a>
                      <a href="#">html</a>
                    </span>
                  </div>

                  <h1 className="entry-title">
                    <Link href="/posts/4">Photography Skills Can Improve Your Graphic Design.</Link>
                  </h1>
                </div>
                <div className="entry-excerpt">
                  Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua cillum in consequat consequat in culpa in anim.
                </div>
              </div>
            </article>

            <article className="brick entry format-standard animate-this">
              <div className="entry-thumb">
                <Link href="/posts/5" className="thumb-link">
                  <img src="/images/thumbs/usaf-rocket.jpg" alt="USAF rocket" />
                </Link>
              </div>

              <div className="entry-text">
                <div className="entry-header">
                  <div className="entry-meta">
                    <span className="cat-links">
                      <a href="#">Branding</a>
                      <a href="#">Mockup</a>
                    </span>
                  </div>

                  <h1 className="entry-title">
                    <Link href="/posts/5">The 10 Golden Rules of Clean Simple Design.</Link>
                  </h1>
                </div>
                <div className="entry-excerpt">
                  Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua cillum in consequat consequat in culpa in anim.
                </div>
              </div>
            </article>

            <article className="brick entry format-gallery group animate-this">
              <div className="entry-thumb">
                <div className="post-slider flexslider">
                  <ul className="slides">
                    <li>
                      <img src="/images/thumbs/gallery/work1.jpg" alt="Gallery 1" />
                    </li>
                    <li>
                      <img src="/images/thumbs/gallery/work2.jpg" alt="Gallery 2" />
                    </li>
                    <li>
                      <img src="/images/thumbs/gallery/work3.jpg" alt="Gallery 3" />
                    </li>
                  </ul>
                </div>
              </div>

              <div className="entry-text">
                <div className="entry-header">
                  <div className="entry-meta">
                    <span className="cat-links">
                      <a href="#">Branding</a>
                      <a href="#">Wordpress</a>
                    </span>
                  </div>

                  <h1 className="entry-title">
                    <Link href="/posts/6">Workspace Design Trends and Ideas.</Link>
                  </h1>
                </div>
                <div className="entry-excerpt">
                  Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua cillum in consequat consequat in culpa in anim.
                </div>
              </div>
            </article>

            <article className="brick entry format-link animate-this">
              <div className="entry-thumb">
                <div className="link-wrap">
                  <p>Looking for affordable &amp; reliable web hosting? We recommend Dreamhost.</p>
                  <cite>
                    <a target="_blank" href="http://www.dreamhost.com/r.cgi?287326" rel="noopener noreferrer">http://www.dreamhost.com</a>
                  </cite>
                </div>
              </div>
            </article>

            <article className="brick entry animate-this">
              <div className="entry-thumb">
                <Link href="/posts/7" className="thumb-link">
                  <img src="/images/thumbs/diagonal-pattern.jpg" alt="Pattern" />
                </Link>
              </div>

              <div className="entry-text">
                <div className="entry-header">
                  <div className="entry-meta">
                    <span className="cat-links">
                      <a href="#">Design</a>
                      <a href="#">UI</a>
                    </span>
                  </div>

                  <h1 className="entry-title">
                    <Link href="/posts/7">You Can See Patterns Everywhere.</Link>
                  </h1>
                </div>
                <div className="entry-excerpt">
                  Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua cillum in consequat consequat in culpa in anim.
                </div>
              </div>
            </article>

            <article className="brick entry format-video animate-this">
              <div className="entry-thumb video-image">
                <a href="http://player.vimeo.com/video/14592941?title=0&amp;byline=0&amp;portrait=0&amp;color=F64B39" data-lity>
                  <img src="/images/thumbs/ottawa-bokeh.jpg" alt="bokeh" />
                </a>
              </div>

              <div className="entry-text">
                <div className="entry-header">
                  <div className="entry-meta">
                    <span className="cat-links">
                      <a href="#">Design</a>
                      <a href="#">Branding</a>
                    </span>
                  </div>

                  <h1 className="entry-title">
                    <Link href="/posts/8">This Is a Video Post Format.</Link>
                  </h1>
                </div>
                <div className="entry-excerpt">
                  Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua cillum in consequat consequat in culpa in anim.
                </div>
              </div>
            </article>

            <article className="brick entry format-standard animate-this">
              <div className="entry-thumb">
                <Link href="/posts/9" className="thumb-link">
                  <img src="/images/thumbs/lighthouse.jpg" alt="Lighthouse" />
                </Link>
              </div>

              <div className="entry-text">
                <div className="entry-header">
                  <div className="entry-meta">
                    <span className="cat-links">
                      <a href="#">Photography</a>
                      <a href="#">Design</a>
                    </span>
                  </div>

                  <h1 className="entry-title">
                    <Link href="/posts/9">Breathtaking Photos of Lighthouses.</Link>
                  </h1>
                </div>
                <div className="entry-excerpt">
                  Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua cillum in consequat consequat in culpa in anim.
                </div>
              </div>
            </article>

            <article className="brick entry format-standard animate-this">
              <div className="entry-thumb">
                <Link href="/posts/10" className="thumb-link">
                  <img src="/images/thumbs/liberty.jpg" alt="Liberty" />
                </Link>
              </div>

              <div className="entry-text">
                <div className="entry-header">
                  <div className="entry-meta">
                    <span className="cat-links">
                      <a href="#">Branding</a>
                      <a href="#">html</a>
                    </span>
                  </div>

                  <h1 className="entry-title">
                    <Link href="/posts/10">Designing With Black and White.</Link>
                  </h1>
                </div>
                <div className="entry-excerpt">
                  Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua cillum in consequat consequat in culpa in anim.
                </div>
              </div>
            </article>

          </div>
        </div>

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
