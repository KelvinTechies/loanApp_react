import React from "react";

function Loan() {
  return (
    <div>
      <main>
        {/* Banner start */}
        <section
          className="banner-area-2 loan-banner pt-145"
          style={{ backgroundImage: "url(assets/img/banner/loan-banner.png)" }}
        >
          <div className="container">
            <div className="row align-items-center  pt-165 pb-200">
              <div className="col-lg-7 mx-auto">
                <div className="banner-content text-center">
                  <div className="section-title">
                    <h1 className="wow fadeInUp">
                      Get your loan approved in 3 steps
                    </h1>
                  </div>
                  <a
                    className="theme-btn theme-btn-lg theme-btn-alt mt-50 wow fadeInUp"
                    data-wow-delay="0.2s"
                    href="loan-details.html"
                  >
                    Get started <i className="arrow_right" />
                  </a>
                </div>
              </div>
            </div>
            <div className="row position-relative pt-70 d-lg-block d-none">
              <div className="col-md-12">
                <div className="floated-widget">
                  <div className="row gy-4 gy-lg-0 gx-5">
                    <div className="col-lg-4 border-end">
                      <div
                        className="steps-widget pr-30 pl-30 wow fadeInUp"
                        data-wow-delay="0.1s"
                      >
                        <img src="assets/img/steps/icon-1.png" alt="icon" />
                        <h4>
                          <a href="#">Check Eligibility</a>
                        </h4>
                        <p>
                          Select your loan amount, answer a few questions and
                          get instant loan amount
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-4  border-end">
                      <div
                        className="steps-widget pr-30 pl-30 wow fadeInUp"
                        data-wow-delay="0.3s"
                      >
                        <img src="assets/img/steps/icon-2.png" alt="icon" />
                        <h4>
                          <a href="#">Submit Documents</a>
                        </h4>
                        <p>
                          Share required documents with our representative
                          hassle-free
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div
                        className="steps-widget pr-30 pl-30 wow fadeInUp"
                        data-wow-delay="0.5s"
                      >
                        <img src="assets/img/steps/icon-3.png" alt="icon" />
                        <h4>
                          <a href="#">Approval in Principle</a>
                        </h4>
                        <p>
                          Choose the final sanctioned loan offer with the terms
                          that work best for you
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Banner end */}
        {/* Apply Loan start */}
        <section className="apply-loan-area pt-200 pb-140 bg_disable">
          <div className="container">
            <div className="row pt-3">
              <div className="col-xl-6 mx-auto">
                <div className="section-title">
                  <h2 className="wow fadeInUp">
                    One step closer to finding your perfect Home!
                  </h2>
                </div>
              </div>
            </div>
            <form action="https://html-template.spider-themes.net/banca/personal-details.html">
              <div className="row">
                <div className="col-md-10 mx-auto">
                  <div className="row pt-35  gy-lg-0 gy-3">
                    <div className="col-lg-4">
                      <div
                        className="loan-apply-widget wow fadeInRight"
                        data-wow-delay="0.1s"
                      >
                        <div className="icon">
                          <img
                            src="assets/img/apply-loan/icon-1.1.png"
                            alt="icon-1"
                          />
                          <img
                            src="assets/img/apply-loan/icon-1.2.png"
                            alt="icon-1.2"
                          />
                        </div>
                        <div className="apply-content">
                          <span className="title">How much do you need?</span>
                          <p className="d-flex">
                            ${" "}
                            <input
                              className="w-100"
                              type="text"
                              defaultValue="5,000"
                            />{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div
                        className="loan-apply-widget wow fadeInRight"
                        data-wow-delay="0.3s"
                      >
                        <div className="icon">
                          <img
                            src="assets/img/apply-loan/icon-2.1.png"
                            alt="icon-2"
                          />
                          <img
                            src="assets/img/apply-loan/icon-2.2.png"
                            alt="icon-2.2"
                          />
                        </div>
                        <div className="apply-content">
                          <span className="title">Type of Loan</span>
                          <select name="select-loan-type" id="select-loan-type">
                            <option>Select your Loan</option>
                            <option value="Home Loan">Home Loan</option>
                            <option value="Loan Against Property">
                              Loan Against Property
                            </option>
                            <option value="Loan Renovation">
                              Loan Renovation
                            </option>
                            <option value="Commercial Property">
                              Commercial Property
                            </option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div
                        className="loan-apply-widget wow fadeInRight"
                        data-wow-delay="0.5s"
                      >
                        <div className="icon">
                          <img
                            src="assets/img/apply-loan/icon-3.1.png"
                            alt="icon-3"
                          />
                          <img
                            src="assets/img/apply-loan/icon-3.2.png"
                            alt="icon-3.2"
                          />
                        </div>
                        <div className="apply-content">
                          <span className="title">
                            Where do you currently live?
                          </span>
                          <div
                            className="select-location d-flex align-items-center"
                            id="locationSlectParent"
                          >
                            <select
                              className="w-100"
                              name="select-location"
                              id="locationSelect"
                            >
                              <option value="Bagerhat">Bagerhat</option>
                              <option value="Bandarban" selected>
                                Bandarban
                              </option>
                              <option value="Barguna">Barguna</option>
                              <option value="Barisal">Barisal</option>
                              <option value="Bhola">Bhola</option>
                              <option value="Barishal Metro">
                                Barishal Metro
                              </option>
                              <option value="Bogra">Bogra</option>
                              <option value="Brahmmanbaria">
                                Brahmmanbaria
                              </option>
                              <option value="Chandpur">Chandpur</option>
                              <option value="Chapai Nawabganj">
                                Chapai Nawabganj
                              </option>
                              <option value="Chittagong">Chittagong</option>
                              <option value="Chuadanga">Chuadanga</option>
                              <option value="Chottogram Metro">
                                Chottogram Metro
                              </option>
                              <option value="Cox's Bazar">Cox's Bazar</option>
                              <option value="Coxsbazar">Coxsbazar</option>
                              <option value="Cumilla">Cumilla</option>
                              <option value="Dhaka">Dhaka</option>
                              <option value="Dinajpur">Dinajpur</option>
                              <option value="Dhaka Metro">Dhaka Metro</option>
                              <option value="Faridpur">Faridpur</option>
                              <option value="Feni">Feni</option>
                              <option value="Gaibandha">Gaibandha</option>
                              <option value="Gazipur">Gazipur</option>
                              <option value="Gazipur Metro">
                                Gazipur Metro
                              </option>
                              <option value="Gopalgonj">Gopalgonj</option>
                              <option value="Habigonj">Habigonj</option>
                              <option value="Jaflong">Jaflong</option>
                              <option value="Jamalpur">Jamalpur</option>
                              <option value="Jessore">Jessore</option>
                              <option value="Jhalokathi">Jhalokathi</option>
                              <option value="Jhenaidah">Jhenaidah</option>
                              <option value="Joypurhat">Joypurhat</option>
                              <option value="Khagrachari">Khagrachari</option>
                              <option value="Khulna">Khulna</option>
                              <option value="Kishoregonj">Kishoregonj</option>
                              <option value="Khulna Metro">Khulna Metro</option>
                              <option value="Kurigram">Kurigram</option>
                              <option value="Kustia">Kustia</option>
                              <option value="Lalmonirhat">Lalmonirhat</option>
                              <option value="Laxmipur">Laxmipur</option>
                              <option value="Madaripur">Madaripur</option>
                              <option value="Magura">Magura</option>
                              <option value="Manikgonj">Manikgonj</option>
                              <option value="Meherpur">Meherpur</option>
                              <option value="Moulabhibazar">
                                Moulabhibazar
                              </option>
                              <option value="Munshigonj">Munshigonj</option>
                              <option value="Mymensingh">Mymensingh</option>
                              <option value="Naogaon">Naogaon</option>
                              <option value="Narail">Narail</option>
                              <option value="Narayangonj">Narayangonj</option>
                              <option value="Narsingdi">Narsingdi</option>
                              <option value="Natore">Natore</option>
                              <option value="Netrokona">Netrokona</option>
                              <option value="Nilphamari">Nilphamari</option>
                              <option value="Noakhali">Noakhali</option>
                              <option value="Pabna">Pabna</option>
                              <option value="Panchagarh">Panchagarh</option>
                              <option value="Patuakhali">Patuakhali</option>
                              <option value="Pirojpur">Pirojpur</option>
                              <option value="Rajbari">Rajbari</option>
                              <option value="Rajshahi">Rajshahi</option>
                              <option value="Rangamati">Rangamati</option>
                              <option value="Rangpur">Rangpur</option>
                              <option value="Rajshahi Metro ">
                                Rajshahi Metro{" "}
                              </option>
                              <option value="Rangpur Metro ">
                                Rangpur Metro{" "}
                              </option>
                              <option value="Saint Martin">Saint Martin</option>
                              <option value="Satkhira">Satkhira</option>
                              <option value="Shariatpur">Shariatpur</option>
                              <option value="Sherpur">Sherpur</option>
                              <option value="Sirajgonj">Sirajgonj</option>
                              <option value="Sylhet Metro">Sylhet Metro</option>
                              <option value="Srimangal">Srimangal</option>
                              <option value="Sunamgonj">Sunamgonj</option>
                              <option value="Sylhet">Sylhet</option>
                              <option value="Tangail">Tangail</option>
                              <option value="Teknaf">Teknaf</option>
                              <option value="Thakurgaon">Thakurgaon</option>
                            </select>
                            <span className="close" id="readOnlyClose">
                              <i className="icon_close" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 mt-15 d-flex wow fadeInLeft">
                      <div className="icon">
                        <img
                          className="img=fluid"
                          src="assets/img/steps/sheild.png"
                          alt="sheild"
                        />
                      </div>
                      <p className="security-info d-inline-block ms-2">
                        Your information is 100% secure. We do not share your
                        info with other parties.
                      </p>
                    </div>
                    <div className="col-12 text-center mt-35">
                      <button
                        className="theme-btn theme-btn-lg wow fadeInUp"
                        type="submit"
                      >
                        apply now <i className="arrow_right" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </section>
        {/* Apply Loan end */}
        {/* Emi Calculator start */}
        <section className="pt-125 pb-140 bg_white">
          <div className="container">
            <div className="row ">
              <div className="col-lg-6 mx-auto">
                <div className="section-title">
                  <h2 className="wow fadeInUp">Calculator</h2>
                  <p className="wow fadeInUp" data-wow-delay="0.3s">
                    Get an approximate figure for the total monthly instalment
                    payments along with a complete break-up of the home loan.
                  </p>
                </div>
              </div>
            </div>
            <div className="calculator-widget mt-50">
              <div className="row  gy-lg-0 gy-3">
                <div className="col-lg-7">
                  <div
                    className="single-calculator-widget wow fadeInUp"
                    data-wow-delay="0.1s"
                  >
                    <div className="single-range">
                      <div className="range-header d-flex justify-content-between align-items-center mb-25">
                        <h6>Loan Amount</h6>
                        <input type="text" id="SetRange" />
                      </div>
                      <div id="RangeSlider" />
                    </div>
                    <div className="single-range mt-85 mb-95">
                      <div className="range-header d-flex flex-wrap justify-content-between align-items-center mb-25">
                        <h6>Loan Duration</h6>
                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                          <li>
                            <span className="active_bar" />
                          </li>
                          <li className="nav-item" role="presentation">
                            <a
                              className="nav-link month-tab"
                              id="monthTab-tab"
                              data-bs-toggle="tab"
                              href="#monthTab"
                              role="tab"
                              aria-controls="monthTab"
                              aria-selected="true"
                            >
                              Month
                            </a>
                          </li>
                          <li className="nav-item " role="presentation">
                            <a
                              className="nav-link year-tab active"
                              id="yearTab-tab"
                              data-bs-toggle="tab"
                              href="#yearTab"
                              role="tab"
                              aria-controls="yearTab"
                              aria-selected="false"
                            >
                              Year
                            </a>
                          </li>
                        </ul>
                        <input type="text" id="SetMonthRange" />
                      </div>
                      <div className="tab-content">
                        <div
                          className="tab-pane fade "
                          id="monthTab"
                          role="tabpanel"
                          aria-labelledby="monthTab"
                        >
                          <div id="MonthRangeSlider" />
                        </div>
                        <div
                          className="tab-pane fade show active"
                          id="yearTab"
                          role="tabpanel"
                          aria-labelledby="yearTab"
                        >
                          <div id="YearRangeSlider" />
                        </div>
                      </div>
                      <div className="d-none" id="WeekRangeSlider" />
                    </div>
                    <div className="bg_disable px-4 py-2 mb-5 interestBox">
                      <p>Rate of Interest</p>
                      <span id="InterestAmount" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-5 pl-lg-35">
                  <div
                    className="calculator-result-widget bg_disable wow fadeInUp"
                    data-wow-delay="0.3s"
                  >
                    <div className="row align-items-center">
                      <div className="col-lg-7 col-md-8 col-sm-7">
                        <div className="emi-amount">
                          <h6>EMI Amount</h6>
                          <span>Principal + Interest</span>
                          <p className="mt-10 LoanTotalAmount" />
                        </div>
                        <div className="interest-payable mt-20">
                          <h6>Interest Payable</h6>
                          <p className="mt-10" id="InterestPayable" />
                        </div>
                      </div>
                      <div className="col-lg-5 col-md-4 col-sm-5 col-7 mx-auto">
                        <div className="pie-wrapper" id="loan_graph_circle">
                          <div className="pie">
                            <div className="left-side half-circle" />
                            <div className="right-side half-circle" />
                          </div>
                          <div className="circle-border" />
                        </div>
                      </div>
                    </div>
                    <div className="row mt-lg-60 mt-25 text-center">
                      <div className="col-12">
                        <h4 className="mb-1">Your EMI Amount</h4>
                        <h1 className="m-0" id="emiAmount">
                          $ 3,495*
                        </h1>
                        <a
                          href="personal-details.html"
                          className="theme-btn theme-btn-lg mt-40"
                        >
                          Apply Now
                          <i className="arrow_right" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Emi Calculator end */}
        {/* Testimonial start */}
        <section className="pt-140 pb-140 testimonial-area bg_disable">
          <div className="container-fluid px-0">
            <div className="testimonial-slider">
              <div className="single-slider container px-0">
                <div className="testimonial-widget">
                  <div className="row">
                    <div className="col-4">
                      <div className="author-img">
                        <img
                          src="assets/img/testimonial/img-2.png"
                          alt="image"
                        />
                      </div>
                    </div>
                    <div className="col-8 d-flex align-items-center">
                      <div className="testimonial-content">
                        <div className="watch-button">
                          <a
                            data-fancybox
                            href="https://www.youtube.com/watch?v=xcJtL7QggTI"
                          >
                            <i className="fa fa-play" />
                            watch the video
                          </a>
                        </div>
                        <h2>Making dreams a reality!</h2>
                        <p className="pr-lg-60">
                          We were looking for a home of happiness and peace.
                          Thanks to the Grihashakti team, who helped us to
                          realise this dream of ours. Our home has been very
                          lucky for us – as we shifted to our new home,
                          prosperity followed!
                        </p>
                        <div className="author-info">
                          <h4>Maxwell Wood</h4>
                          <span>New York, US</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="single-slider container px-0">
                <div className="testimonial-widget">
                  <div className="row">
                    <div className="col-4">
                      <div className="author-img">
                        <img
                          src="assets/img/testimonial/img-1.png"
                          alt="image"
                        />
                      </div>
                    </div>
                    <div className="col-8 d-flex align-items-center">
                      <div className="testimonial-content">
                        <div className="watch-button">
                          <a
                            data-fancybox
                            href="https://www.youtube.com/watch?v=xcJtL7QggTI"
                          >
                            <i className="fa fa-play" />
                            watch the video
                          </a>
                        </div>
                        <h2>Making dreams a reality!</h2>
                        <p className="pr-lg-60">
                          We were looking for a home of happiness and peace.
                          Thanks to the Grihashakti team, who helped us to
                          realise this dream of ours. Our home has been very
                          lucky for us – as we shifted to our new home,
                          prosperity followed!
                        </p>
                        <div className="author-info">
                          <h4>Maxwell Wood</h4>
                          <span>New York, US</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="single-slider container px-0">
                <div className="testimonial-widget">
                  <div className="row">
                    <div className="col-4">
                      <div className="author-img">
                        <img
                          src="assets/img/testimonial/img-2.png"
                          alt="image"
                        />
                      </div>
                    </div>
                    <div className="col-8 d-flex align-items-center">
                      <div className="testimonial-content">
                        <div className="watch-button">
                          <a
                            data-fancybox
                            href="https://www.youtube.com/watch?v=xcJtL7QggTI"
                          >
                            <i className="fa fa-play" />
                            watch the video
                          </a>
                        </div>
                        <h2>Making dreams a reality!</h2>
                        <p className="pr-lg-60">
                          We were looking for a home of happiness and peace.
                          Thanks to the Grihashakti team, who helped us to
                          realise this dream of ours. Our home has been very
                          lucky for us – as we shifted to our new home,
                          prosperity followed!
                        </p>
                        <div className="author-info">
                          <h4>Maxwell Wood</h4>
                          <span>New York, US</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="single-slider container px-0">
                <div className="testimonial-widget">
                  <div className="row">
                    <div className="col-4">
                      <div className="author-img">
                        <img
                          src="assets/img/testimonial/img-1.png"
                          alt="image"
                        />
                      </div>
                    </div>
                    <div className="col-8 d-flex align-items-center">
                      <div className="testimonial-content">
                        <div className="watch-button">
                          <a
                            data-fancybox
                            href="https://www.youtube.com/watch?v=xcJtL7QggTI"
                          >
                            <i className="fa fa-play" />
                            watch the video
                          </a>
                        </div>
                        <h2>Making dreams a reality!</h2>
                        <p className="pr-lg-60">
                          We were looking for a home of happiness and peace.
                          Thanks to the Grihashakti team, who helped us to
                          realise this dream of ours. Our home has been very
                          lucky for us – as we shifted to our new home,
                          prosperity followed!
                        </p>
                        <div className="author-info">
                          <h4>Maxwell Wood</h4>
                          <span>New York, US</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Testimonial end */}
      </main>
    </div>
  );
}

export default Loan;
