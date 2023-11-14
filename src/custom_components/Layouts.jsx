import React from "react";
import ExternalLinks from "./ExternalLinks";
import { Link, Outlet } from "react-router-dom";

export default function Layouts({ children }) {
  return (
    <>
      <ExternalLinks />
      {/*  <div id="preloader">
        <div id="ctn-preloader" class="ctn-preloader">
          <div class="round_spinner">
            <div class="spinner"></div>
            <div class="text">
              <img src="assets/img/logo/Logo-2.png" alt="" />
            </div>
          </div>
          <h2 class="head">Did You Know?</h2>
          <p></p>
        </div>
      </div> */}
      <header className="header">
        <div className="header-menu header-menu-1" id="sticky">
          <nav className="navbar navbar-expand-lg ">
            <div className="container">
              <Link className="navbar-brand sticky_logo" href="index.html">
                <img
                  className="main"
                  src="assets/img/logo/Logo.png"
                  srcSet="img/logo/Logo@2x.png 2x"
                  alt="logo"
                />
                <img
                  className="sticky"
                  src="assets/img/logo/Logo-3.png"
                  srcSet="img/logo/Logo-3@2x.png 2x"
                  alt="logo"
                />
              </Link>
              <button
                className="navbar-toggler collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="menu_toggle">
                  <span className="hamburger">
                    <span />
                    <span />
                    <span />
                  </span>
                  <span className="hamburger-cross">
                    <span />
                    <span />
                  </span>
                </span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav menu ms-auto">
                  <li className="nav-item dropdown submenu ">
                    <Link
                      to="/"
                      className="nav-link dropdown-toggle active"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="nav-item dropdown  ">
                    <Link to="about" className="nav-link dropdown-toggle ">
                      About Us
                    </Link>
                  </li>
                  <li className="nav-item dropdown  ">
                    <Link to="/contact" className="nav-link dropdown-toggle ">
                      Contact US
                    </Link>
                  </li>
                  <li className="nav-item dropdown submenu">
                    <Link
                      className="nav-link dropdown-toggle"
                      to="/loan"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Loan
                    </Link>
                    <i
                      className="arrow_carrot-down_alt2 mobile_dropdown_icon"
                      aria-hidden="false"
                      data-bs-toggle="dropdown"
                    />
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          href="#"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          Loan Application
                        </Link>
                        <i
                          className="arrow_carrot-down_alt2 mobile_dropdown_icon"
                          aria-hidden="false"
                          data-bs-toggle="dropdown"
                        />
                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <Link className="nav-link" to="loan-details">
                              Step 01
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link className="nav-link" to="personal-details">
                              Step 02
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link className="nav-link" to="document-upload">
                              Step 03
                            </Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>

      {children}

      <Outlet />
      <footer className="footer footer-1">
        <div className="footer-top  pt-115 pb-90">
          <div className="container">
            <div className="row">
              <div className="col-xl-4 col-lg-3 col-6 pr-lg-90">
                <div className="footer-widget mb-30 wow fadeInLeft">
                  <div className="flog mb-35">
                    <Link href="index.html">
                      <img src="assets/img/logo/Logo.png" alt="logo" />
                    </Link>
                  </div>
                  <div className="footer-text mb-20">
                    <p>
                      Follow us on social media to find out the latest updates
                      on our progress.
                    </p>
                  </div>
                  <div className="social-icon mt-5">
                    <Link href="#">
                      <i className="fab fa-facebook-f" />
                    </Link>
                    <Link href="#">
                      <i className="fab fa-twitter" />
                    </Link>
                    <Link href="#">
                      <i className="fab fa-google" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-2 col-6">
                <div
                  className="footer-widget mb-30 wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <div className="f-widget-title">
                    <h5>product</h5>
                  </div>
                  <div className="footer-link">
                    <ul>
                      <li>
                        <Link href="#"> Download</Link>
                      </li>
                      <li>
                        <Link href="#"> Payments</Link>
                      </li>
                      <li>
                        <Link href="#"> Online Banking</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-2 col-6">
                <div
                  className="footer-widget mb-30 wow fadeInUp"
                  data-wow-delay="0.3s"
                >
                  <div className="f-widget-title">
                    <h5>Company</h5>
                  </div>
                  <div className="footer-link">
                    <ul>
                      <li>
                        <Link href="#"> About Us</Link>
                      </li>
                      <li>
                        <Link href="#"> Contact us</Link>
                      </li>
                      <li>
                        <Link href="#"> Roadmap</Link>
                      </li>
                      <li>
                        <Link href="#"> Blog</Link>
                      </li>
                      <li>
                        <Link href="#"> Careers</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2 col-6">
                <div
                  className="footer-widget mb-30 wow fadeInUp"
                  data-wow-delay="0.5s"
                >
                  <div className="f-widget-title">
                    <h5>Services</h5>
                  </div>
                  <div className="footer-link">
                    <ul>
                      <li>
                        <Link href="#">Borrow money</Link>
                      </li>
                      <li>
                        <Link href="#">Collective loans</Link>
                      </li>
                      <li>
                        <Link href="#">Budget schedule</Link>
                      </li>
                      <li>
                        <Link href="#">Debt calculator</Link>
                      </li>
                      <li>
                        <Link href="#">Student scholarship</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* copyright area */}
        <div className="copyright py-4">
          <div className="container-lg container-fluid">
            <div className="row align-items-center ">
              <div className="col-lg-3">
                <div className="d-flex justify-content-center d-lg-block">
                  <select id="select-lang">
                    <option value="English">English</option>
                    <option value="Bangla">Bangla</option>
                    <option value="French">French</option>
                    <option value="Hindi">Hindi</option>
                  </select>
                </div>
              </div>
              <div className="col-lg-5  text-center short-text">
                <Link href="#">Terms &amp; Conditions </Link>
                <Link href="#">Privacy Policy</Link>
                <Link href="#">Legal Notice</Link>
              </div>
              <div className="col-lg-4 text-center text-lg-end ">
                <div className="copyright-text short-text">
                  <p>Copyright© 2021, All Rights Reserved</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
