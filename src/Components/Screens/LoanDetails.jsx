import React from "react";
import { Link } from "react-router-dom";

function LoanDetails() {
  return (
    <div>
      <main>
        {/* BreadCrumb start */}
        <section className="breadcrumb-area">
          <div
            className="breadcrumb-widget  pt-200 pb-110"
            style={{ backgroundImage: "url(assets/img/breadcrumb/bg-1.png)" }}
          >
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="breadcrumb-content pt-85">
                    <h1>Loan deatails</h1>
                    <ul>
                      <li>
                        <Link to="/">home</Link>
                      </li>

                      <li>loan</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* BreadCrumb end */}
        {/* Loan details start */}
        <section className="loan-deatils-area bg_disable pt-130 pb-120">
          <div className="container">
            <div className="row">
              <div className="col-lg-3">
                <div className="stepper-widget mt-sm-5 px-3 px-sm-0">
                  <ul>
                    <li className="active mt-0">
                      <Link to="loan-details">
                        <div className="number">
                          <i className="icon_check" /> <span>1</span>
                        </div>{" "}
                        Loan Details
                      </Link>
                    </li>
                    <li className>
                      <Link to="personal-details">
                        <div className="number">
                          <i className="icon_check" /> <span>2</span>
                        </div>
                        Personal Details
                      </Link>
                    </li>
                    <li>
                      <Link href="document-upload">
                        <div className="number">
                          <i className="icon_check" /> <span>3</span>
                        </div>
                        Documants Upload
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-9">
                <div className="loan-details-widget">
                  <form action="">
                    <div className="row mb-35 gy-4">
                      <div className="col-lg-3 col-md-6">
                        <input
                          className="select-loan-type-radio"
                          name="select-loan-type"
                          type="radio"
                          id="Personal_loan"
                        />
                        <label htmlFor="Personal_loan" className="loan-type">
                          <img
                            src="assets/img/apply-loan/icon-4.1.png"
                            alt="icon"
                          />
                          <img
                            src="assets/img/apply-loan/icon-4.2.png"
                            alt="icon"
                          />
                          <span>Personal Loan</span>
                        </label>
                      </div>
                      <div className="col-lg-3 col-md-6">
                        <input
                          className="select-loan-type-radio"
                          name="select-loan-type"
                          type="radio"
                          id="Home_loan"
                        />
                        <label htmlFor="Home_loan" className="loan-type">
                          <img
                            src="assets/img/apply-loan/icon-5.1.png"
                            alt="icon"
                          />
                          <img
                            src="assets/img/apply-loan/icon-5.2.png"
                            alt="icon"
                          />
                          <span>home Loan</span>
                        </label>
                      </div>
                      <div className="col-lg-3 col-md-6">
                        <input
                          className="select-loan-type-radio"
                          name="select-loan-type"
                          type="radio"
                          id="Buisness_loan"
                        />
                        <label htmlFor="Buisness_loan" className="loan-type">
                          <img
                            src="assets/img/apply-loan/icon-6.1.png"
                            alt="icon"
                          />
                          <img
                            src="assets/img/apply-loan/icon-6.2.png"
                            alt="icon"
                          />
                          <span>Buisness Loan</span>
                        </label>
                      </div>
                      <div className="col-lg-3 col-md-6">
                        <input
                          className="select-loan-type-radio"
                          name="select-loan-type"
                          type="radio"
                          id="Car_loan"
                        />
                        <label htmlFor="Car_loan" className="loan-type">
                          <img
                            src="assets/img/apply-loan/icon-7.1.png"
                            alt="icon"
                          />
                          <img
                            src="assets/img/apply-loan/icon-7.2.png"
                            alt="icon"
                          />
                          <span>car Loan</span>
                        </label>
                      </div>
                    </div>
                    <div className="row gy-4">
                      <div className="col-md-6">
                        <label className="label" htmlFor="loandetails01">
                          Choose your financing type
                        </label>
                        <select className="w-100" id="loandetails01">
                          <option value="Debt-Financing">Debt Financing</option>
                          <option value="Equity-Finance">Equity Finance</option>
                        </select>
                      </div>
                      <div className="col-md-6">
                        <label className="label" htmlFor="loandetails02">
                          Choose your preferred bank service
                        </label>
                        <select className=" w-100" id="loandetails02">
                          <option value="Individual-Banking">
                            Individual Banking
                          </option>
                          <option value="Business-Banking">
                            Business Banking
                          </option>
                          <option value="Digital-Banking">
                            Digital Banking
                          </option>
                          <option value="Loans">Loans</option>
                        </select>
                      </div>
                      <div className="col-md-6">
                        <label className="label" htmlFor="loan-amount">
                          Yout loan amount
                        </label>
                        <div className="input-field">
                          <span>$</span>
                          <input
                            type="number"
                            id="loan-amount"
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <label className="label mb-4">Laon duration</label>
                        <div className="form-check form-check-inline mr-30">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="inlineRadio1"
                            defaultValue="option1"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="inlineRadio1"
                          >
                            12 months
                          </label>
                        </div>
                        <div className="form-check form-check-inline mr-30">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="inlineRadio2"
                            defaultValue="option2"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="inlineRadio2"
                          >
                            18 months
                          </label>
                        </div>
                        <div className="form-check form-check-inline mr-30">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="inlineRadio3"
                            defaultValue="option3"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="inlineRadio3"
                          >
                            24 months
                          </label>
                        </div>
                        <div className="form-check form-check-inline mr-30">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="inlineRadio4"
                            defaultValue="option4"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="inlineRadio4"
                          >
                            36 months
                          </label>
                        </div>
                        <div className="form-check form-check-inline mr-30">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="inlineRadio5"
                            defaultValue="option5"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="inlineRadio5"
                          >
                            48 months
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="row  mt-60">
                      <div className="col-md-12">
                        <div className="nav-btn d-flex justify-content-end">
                          <button
                            className=" theme-btn-primary_alt theme-btn next-btn"
                            type="submit"
                          >
                            next
                            <i className="arrow_right" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Loan details end */}
      </main>
    </div>
  );
}

export default LoanDetails;
