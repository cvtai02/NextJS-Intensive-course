import Header from '../components/Header';
import Footer from '../components/Footer';

export default function AboutPage() {
  return (
    <>
      <Header />

      <section id="content-wrap" className="about">
        <div className="row">
          <div className="col-full">
            <h1>About Us</h1>

            <p className="lead">
              Lorem ipsum Ut velit dolor Ut labore id fugiat in ut fugiat nostrud qui in dolore
              commodo eu magna Duis cillum dolor officia esse mollit proident Excepteur exercitation
              nulla.
            </p>

            <img src="/images/thumbs/about-us.jpg" alt="About" />

            <h2>Our Mission</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>

            <h2>Our Team</h2>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </p>

            <h2>Contact Information</h2>
            <p>
              Email: info@example.com
              <br />
              Phone: (123) 456-7890
              <br />
              Address: 123 Main Street, City, State 12345
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
