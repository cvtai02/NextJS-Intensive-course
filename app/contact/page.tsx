import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ContactPage() {
  return (
    <>
      <Header />

      <section id="content-wrap" className="contact">
        <div className="row">
          <div className="col-full">
            <h1>Get In Touch</h1>

            <p className="lead">
              Lorem ipsum Deserunt est dolore Ut Excepteur nulla occaecat magna occaecat Excepteur
              nisi esse veniam dolor consectetur minim qui nisi ex aute ipsa pariatur consequat.
            </p>

            <div className="row">
              <div className="col-six tab-full">
                <h3>Send Us A Message</h3>

                <form name="contactForm" id="contactForm" method="post">
                  <div className="form-field">
                    <input
                      name="contactName"
                      type="text"
                      id="contactName"
                      placeholder="Name"
                      minLength={2}
                      required
                    />
                  </div>

                  <div className="form-field">
                    <input
                      name="contactEmail"
                      type="email"
                      id="contactEmail"
                      placeholder="Email"
                      required
                    />
                  </div>

                  <div className="form-field">
                    <input
                      name="contactSubject"
                      type="text"
                      id="contactSubject"
                      placeholder="Subject"
                    />
                  </div>

                  <div className="form-field">
                    <textarea
                      name="contactMessage"
                      id="contactMessage"
                      placeholder="Message"
                      rows={10}
                      minLength={10}
                      required
                    ></textarea>
                  </div>

                  <div className="form-field">
                    <button className="submitform">Submit</button>

                    <div id="submit-loader">
                      <div className="text-loader">Sending...</div>
                      <div className="s-loader">
                        <div className="bounce1"></div>
                        <div className="bounce2"></div>
                        <div className="bounce3"></div>
                      </div>
                    </div>
                  </div>
                </form>

                <div id="message-warning"></div>
                <div id="message-success">
                  <i className="fa fa-check"></i>Your message was sent, thank you!
                  <br />
                </div>
              </div>

              <div className="col-six tab-full">
                <h3>Contact Info</h3>

                <div className="cinfo">
                  <h5>Where to Find Us</h5>
                  <p>
                    1600 Amphitheatre Parkway
                    <br />
                    Mountain View, CA
                    <br />
                    94043 US
                  </p>
                </div>

                <div className="cinfo">
                  <h5>Email Us At</h5>
                  <p>
                    contact@abstractwebsite.com
                    <br />
                    info@abstractwebsite.com
                  </p>
                </div>

                <div className="cinfo">
                  <h5>Call Us At</h5>
                  <p>
                    Phone: (+63) 555 1212
                    <br />
                    Mobile: (+63) 555 0100
                    <br />
                    Fax: (+63) 555 0101
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
