import React from "react";

function Contact() {
  return (
    <div>
      <main>
        {/* BreadCrumb start */}
        <section className="breadcrumb-area">
          <div
            className="breadcrumb-widget  breadcrumb-widget-3 pt-200 pb-200"
            style={{ backgroundImage: "url(assets/img/breadcrumb/bg-4.jpg)" }}
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-7 mx-auto">
                  <div className="breadcrumb-content pt-100">
                    <h1>We're here to help.</h1>
                    <ul>
                      <li>
                        <Link to="/">home</Link>
                      </li>
                      <li>Contact Us</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* BreadCrumb end */}
        {/* Get In Touch start */}
        <section className="pt-140 pb-140 get-touch-area bg_white">
          <div className="container">
            <div className="row gy-4 gy-lg-0">
              <div className="col-lg-5">
                <div className="section-title text-start">
                  <h2>Get in touch with us.</h2>
                  <p>
                    Want to get in touch? We'd love to hear from you. Here's how
                    you can reach us...
                  </p>
                </div>
                <div className="row mt-55">
                  <div className="col-sm-6">
                    <div className="get-touch-box">
                      <div className="icon">
                        <img
                          src="assets/img/contact/call-outline.png"
                          alt="call icon"
                        />
                      </div>
                      <div>
                        <p>Call the helpline:</p>
                        <span>(02) 4003 7936</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="get-touch-box">
                      <div className="icon">
                        <img
                          src="assets/img/contact/mail-open-outline.png"
                          alt="mail icon"
                        />
                      </div>
                      <div>
                        <p>Email us:</p>
                        <span>hello@banca.com</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="get-touch-box mt-30">
                      <div className="icon">
                        <i className="icon_pin_alt " />
                      </div>
                      <div>
                        <p>Location</p>
                        <span>
                          1550 Bryant Street STE 750, San Francisco, CA 94103
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="get-touch-box mt-30">
                      <div className="icon">
                        <i className="icon_clock_alt " />
                      </div>
                      <div>
                        <p>Work Hours</p>
                        <span>
                          Monday - Saturday: 9am - 7pm Sunday: 12am — 6pm
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 offset-lg-1">
                <div className="contact-form-widget">
                  <form action="" method="">
                    <div className="row">
                      <div className="col-md-6">
                        <label htmlFor="f-name">Full Name</label>
                        <input
                          type="text"
                          id="f-name"
                          name="name"
                          className="form-control"
                          placeholder="What's your name?"
                          required
                        />
                      </div>
                      <div className="col-md-6 mt-20 mt-md-0">
                        <label htmlFor="email-address">Email</label>
                        <input
                          type="email"
                          id="email-address"
                          name="email"
                          className="form-control"
                          placeholder="yourname@example.com"
                          required
                        />
                      </div>
                      <div className="col-md-12 mt-20">
                        <label htmlFor="form-sub">Subject</label>
                        <input
                          type="text"
                          id="form-sub"
                          name="subject"
                          className="form-control"
                          placeholder="Your subject"
                          required
                        />
                      </div>
                      <div className="col-md-12 mt-20">
                        <label htmlFor="form-text">Messages</label>
                        <textarea
                          cols={30}
                          rows={5}
                          name="message"
                          id="form-text"
                          className="form-control pt-15"
                          placeholder="Your message......"
                          required
                          defaultValue={""}
                        />
                      </div>
                      <div className="col-12 mt-3">
                        <p className="policy-text">
                          By submitting this form you consent to us emailing you
                          occasionally about our products and services. You can
                          unsubscribe from emails at any time, and we will never
                          pass your email onto third parties. Privacy Policy
                        </p>
                      </div>
                      <div className="col-12 mt-35">
                        <button
                          type="submit"
                          className="theme-btn theme-btn-lg w-100"
                        >
                          Submit Now
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Get In Touch end */}
        {/* need more help start */}
        <section className="pt-125 pb-140 bg_disable">
          <div className="container">
            <div className="row ">
              <div className="col-md-8 mx-auto">
                <div className="section-title">
                  <h2 className="wow fadeInUp">Need more help?</h2>
                  <p className="wow fadeInUp" data-wow-delay="0.3s">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor.
                  </p>
                </div>
              </div>
            </div>
            <div className="row mt-60 gy-lg-0 gy-4">
              <div className="col-lg-4">
                <div
                  className="feature-card-widget-4 wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <img src="assets/img/contact/help-icon-1.svg" alt="icon" />
                  <h5 className="mt-4 mb-10">Articles &amp; Guides</h5>
                  <p>
                    100+ articles to get the information you need when you need
                    it.
                  </p>
                  <a href="#" className="theme-btn theme-btn-outlined mt-30">
                    Visit Knowledge Base
                  </a>
                </div>
              </div>
              <div className="col-lg-4">
                <div
                  className="feature-card-widget-4 wow fadeInUp"
                  data-wow-delay="0.3s"
                >
                  <img src="assets/img/contact/help-icon-2.svg" alt="icon" />
                  <h5 className="mt-4 mb-10">Technical Support</h5>
                  <p>
                    If you ever need help, you can chat directly with our
                    support team!
                  </p>
                  <a href="#" className="theme-btn theme-btn-outlined mt-30">
                    Chat With Support
                  </a>
                </div>
              </div>
              <div className="col-lg-4">
                <div
                  className="feature-card-widget-4 wow fadeInUp"
                  data-wow-delay="0.5s"
                >
                  <img src="assets/img/contact/help-icon-3.svg" alt="icon" />
                  <h5 className="mt-4 mb-10">Social Media Support</h5>
                  <p>
                    Doing customer support on social media requires a dedicated
                    strategy.{" "}
                  </p>
                  <div className="social-button mt-35 mb-10">
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-pinterest-p" />
                    </a>
                    <a href="#">
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* need more help end */}
        {/* Frequently Asked Question start */}
        <section className="faq-area-2 pt-125 pb-200 bg_white">
          <div className="container">
            <div className="section-title">
              <h2 className="wow fadeInUp">Frequently asked questions</h2>
            </div>
            <div className="row">
              <div className="col-lg-10 mx-auto">
                <div className="faq-widget">
                  <div className="accordion" id="accordionExample">
                    <div
                      className="single-widget-one wow fadeInUp px-sm-5 px-4"
                      data-wow-delay="0.1s"
                    >
                      <div className="widget-icon">
                        <i className="icon_question_alt2 " />
                      </div>
                      <div className="w-100">
                        <div className="faq-header" id="headingOne">
                          <h4
                            className="mb-0"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                          >
                            Can I pay off my loan early?
                            <i className="icon_plus" />
                            <i className=" icon_minus-06" />
                          </h4>
                        </div>
                        <div
                          id="collapseOne"
                          className="collapse show"
                          aria-labelledby="headingOne"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="faq-body pr-lg-130">
                            <p>
                              Anim pariatur cliche reprehenderit, enim eiusmod
                              high life accusamus terry richardson ad squid. 3
                              wolf moon officia aute, non cupidatat skateboard
                              dolor brunch.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="single-widget-one wow fadeInUp px-sm-5 px-4"
                      data-wow-delay="0.3s"
                    >
                      <div className="widget-icon">
                        <i className="icon_question_alt2 " />
                      </div>
                      <div className="w-100">
                        <div className="faq-header" id="headingTwo">
                          <h4
                            className="mb-0 collapsed"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="true"
                            aria-controls="collapseTwo"
                          >
                            How much can I Banca?
                            <i className="icon_plus" />
                            <i className=" icon_minus-06" />
                          </h4>
                        </div>
                        <div
                          id="collapseTwo"
                          className="collapse"
                          aria-labelledby="headingTwo"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="faq-body pr-lg-130">
                            <p>
                              Anim pariatur cliche reprehenderit, enim eiusmod
                              high life accusamus terry richardson ad squid. 3
                              wolf moon officia aute, non cupidatat skateboard
                              dolor brunch.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="single-widget-one wow fadeInUp px-sm-5 px-4"
                      data-wow-delay="0.5s"
                    >
                      <div className="widget-icon">
                        <i className="icon_question_alt2 " />
                      </div>
                      <div className="w-100">
                        <div className="faq-header" id="headingThree">
                          <h4
                            className="mb-0 collapsed"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                            aria-expanded="true"
                            aria-controls="collapseThree"
                          >
                            Do you offering refinancing ?
                            <i className="icon_plus" />
                            <i className=" icon_minus-06" />
                          </h4>
                        </div>
                        <div
                          id="collapseThree"
                          className="collapse"
                          aria-labelledby="headingThree"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="faq-body pr-lg-130">
                            <p>
                              Anim pariatur cliche reprehenderit, enim eiusmod
                              high life accusamus terry richardson ad squid. 3
                              wolf moon officia aute, non cupidatat skateboard
                              dolor brunch.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="single-widget-one wow fadeInUp px-sm-5 px-4"
                      data-wow-delay="0.7s"
                    >
                      <div className="widget-icon">
                        <i className="icon_question_alt2 " />
                      </div>
                      <div className="w-100">
                        <div className="faq-header" id="headingFour">
                          <h4
                            className="mb-0 collapsed"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseFour"
                            aria-expanded="true"
                            aria-controls="collapseFour"
                          >
                            Can I do all of my banking with you?
                            <i className="icon_plus" />
                            <i className=" icon_minus-06" />
                          </h4>
                        </div>
                        <div
                          id="collapseFour"
                          className="collapse"
                          aria-labelledby="headingFour"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="faq-body pr-lg-130">
                            <p>
                              Anim pariatur cliche reprehenderit, enim eiusmod
                              high life accusamus terry richardson ad squid. 3
                              wolf moon officia aute, non cupidatat skateboard
                              dolor brunch.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="single-widget-one wow fadeInUp px-sm-5 px-4"
                      data-wow-delay="0.9s"
                    >
                      <div className="widget-icon">
                        <i className="icon_question_alt2 " />
                      </div>
                      <div className="w-100">
                        <div className="faq-header" id="headingFive">
                          <h4
                            className="mb-0 collapsed"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseFive"
                            aria-expanded="true"
                            aria-controls="collapseFive"
                          >
                            When should i apply?
                            <i className="icon_plus" />
                            <i className=" icon_minus-06" />
                          </h4>
                        </div>
                        <div
                          id="collapseFive"
                          className="collapse"
                          aria-labelledby="headingFive"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="faq-body pr-lg-130">
                            <p>
                              Anim pariatur cliche reprehenderit, enim eiusmod
                              high life accusamus terry richardson ad squid. 3
                              wolf moon officia aute, non cupidatat skateboard
                              dolor brunch.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Frequently Asked Question end */}
        {/* Call To Action start */}
        <section className="cta-area pt-60 bg_white">
          <div className="container">
            <div className="row">
              <div className="col-md-12 position-relative">
                <div
                  className="cta cta-bg-violet"
                  style={{ backgroundImage: "url(assets/img/cta/wave.png)" }}
                >
                  <div className="row align-items-center">
                    <div className="col-lg-7">
                      <div className="cta-content wow fadeInRight text-center text-lg-start">
                        <h2 className="mb-0">
                          Meet Banca, the financial partner you can bank on.
                        </h2>
                      </div>
                    </div>
                    <div className="col-lg-5 mt-4 mt-lg-0 text-center ">
                      <div className="cta-content  text-center text-lg-end">
                        <a
                          href="#"
                          className="theme-btn theme-btn-alt wow fadeInLeft cta-text-violet"
                        >
                          Open an Account
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Call To Action end */}
      </main>
    </div>
  );
}

export default Contact;
