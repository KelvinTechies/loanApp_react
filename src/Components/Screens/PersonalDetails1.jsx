import React from "react";

function PersonalDetails1() {
  return (
    <div>
      <main>
        {/* BreadCrumb start */}
        <section className="breadcrumb-area">
          <div
            className="breadcrumb-widget  pt-200 pb-100"
            style={{ backgroundImage: "url(img/breadcrumb/bg-1.png)" }}
          >
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="breadcrumb-content pt-95">
                    <h1>Personal Details</h1>
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
        {/* Persinal Details start */}
        <section className="loan-deatils-area bg_disable pt-130 pb-120">
          <div className="container">
            <div className="row">
              <div className="col-lg-3">
                <div className="stepper-widget mt-sm-5 px-3 px-sm-0">
                  <ul>
                    <li className=" complete  mt-0">
                      <Link to="loan-details">
                        <div className="number">
                          <i className="icon_check" /> <span>1</span>
                        </div>{" "}
                        Loan Details
                      </Link>
                    </li>
                    <li className="active">
                      <Link href="personal-details">
                        <div className="number">
                          <i className="icon_check" /> <span>2</span>
                        </div>
                        Personal Details
                      </Link>
                    </li>
                    <li>
                      <Link to="document-upload">
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
                    <div className="row gy-4">
                      <div className="col-md-6">
                        <label className="label" htmlFor="fName">
                          First Name*
                        </label>
                        <input
                          id="fName"
                          className="form-control"
                          type="text"
                          required
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="label" htmlFor="lName">
                          Last Name*
                        </label>
                        <input
                          id="lName"
                          className="form-control"
                          type="text"
                          required
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="label" htmlFor="dob-d">
                          Date of Birth*
                        </label>
                        <div className="dob d-flex">
                          <select id="dob-d">
                            <option value>Day</option>
                            <option value="01">01</option>
                            <option value="02">02</option>
                            <option value="03">03</option>
                            <option value="04">04</option>
                            <option value="05">05</option>
                            <option value="06">06</option>
                            <option value="07"></option>
                            <option value="08">08</option>
                            <option value="09">09</option>
                            <option value={10}>10</option>
                            <option value={11}>11</option>
                            <option value={12}>12</option>
                            <option value={13}>13</option>
                            <option value={14}>14</option>
                            <option value={15}>15</option>
                            <option value={16}>16</option>
                            <option value={17}>17</option>
                            <option value={18}>18</option>
                            <option value={19}>19</option>
                            <option value={20}>20</option>
                            <option value={21}>21</option>
                            <option value={22}>22</option>
                            <option value={23}>23</option>
                            <option value={24}>24</option>
                            <option value={25}>25</option>
                            <option value={26}>26</option>
                            <option value={27}>27</option>
                            <option value={28}>28</option>
                            <option value={29}>29</option>
                            <option value={30}>30</option>
                            <option value={31}>31</option>
                          </select>
                          <select id="dob-m">
                            <option value>Month</option>
                            <option value="01">January</option>
                            <option value="02">February</option>
                            <option value="03">March</option>
                            <option value="04">April</option>
                            <option value="05">May</option>
                            <option value="06">June</option>
                            <option value="07">July</option>
                            <option value="08">August</option>
                            <option value="09">September</option>
                            <option value={10}>October</option>
                            <option value={11}>November</option>
                            <option value={12}>December</option>
                          </select>
                          <select className="me-0" id="dob-y">
                            <option value>Year</option>
                            <option value={1970}>1970</option>
                            <option value={1971}>1971</option>
                            <option value={1972}>1972</option>
                            <option value={1973}>1973</option>
                            <option value={1974}>1974</option>
                            <option value={1975}>1975</option>
                            <option value={1976}>1976</option>
                            <option value={1977}>1977</option>
                            <option value={1978}>1978</option>
                            <option value={1979}>1979</option>
                            <option value={1980}>1980</option>
                            <option value={1981}>1981</option>
                            <option value={1982}>1982</option>
                            <option value={1983}>1983</option>
                            <option value={1984}>1984</option>
                            <option value={1985}>1985</option>
                            <option value={1986}>1986</option>
                            <option value={1987}>1987</option>
                            <option value={1988}>1988</option>
                            <option value={1989}>1989</option>
                            <option value={1990}>1990</option>
                            <option value={1991}>1991</option>
                            <option value={1992}>1992</option>
                            <option value={1993}>1993</option>
                            <option value={1994}>1994</option>
                            <option value={1995}>1995</option>
                            <option value={1996}>1996</option>
                            <option value={1997}>1997</option>
                            <option value={1998}>1998</option>
                            <option value={1999}>1999</option>
                            <option value={2000}>2000</option>
                            <option value={2001}>2001</option>
                            <option value={2002}>2002</option>
                            <option value={2003}>2003</option>
                            <option value={2004}>2004</option>
                            <option value={2005}>2005</option>
                            <option value={2006}>2006</option>
                            <option value={2007}>2007</option>
                            <option value={2008}>2008</option>
                            <option value={2009}>2009</option>
                            <option value={2010}>2010</option>
                            <option value={2011}>2011</option>
                            <option value={2012}>2012</option>
                            <option value={2013}>2013</option>
                            <option value={2014}>2014</option>
                            <option value={2015}>2015</option>
                            <option value={2016}>2016</option>
                            <option value={2017}>2017</option>
                            <option value={2018}>2018</option>
                            <option value={2019}>2019</option>
                            <option value={2020}>2020</option>
                            <option value={2021}>2021</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <label className="label mb-4">Marital Statas*</label>
                        <div className="form-check form-check-inline me-5">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="MaritalStatas"
                            id="single"
                            defaultValue="single"
                          />
                          <label className="form-check-label" htmlFor="single">
                            Single
                          </label>
                        </div>
                        <div className="form-check form-check-inline me-5">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="MaritalStatas"
                            id="married"
                            defaultValue="married"
                          />
                          <label className="form-check-label" htmlFor="married">
                            Married
                          </label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <label className="label" htmlFor="emailName">
                          Email
                        </label>
                        <input
                          className="form-control"
                          type="email"
                          id="emailName"
                          placeholder="examplename@example.com"
                          required
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="label" htmlFor="inputPhoneNumber">
                          Mobile Number*
                        </label>
                        <input
                          id="inputPhoneNumber"
                          className="form-control w-100"
                          type="number"
                        />
                      </div>
                      <div className="col-md-12">
                        <label className="label" htmlFor="pAddress">
                          Present Address*
                        </label>
                        <input
                          id="pAddress"
                          className="form-control"
                          type="text"
                        />
                      </div>
                      <div className="col-md-4">
                        <label className="label" htmlFor="stateName">
                          State*
                        </label>
                        <input
                          id="stateName"
                          className="form-control"
                          type="text"
                        />
                      </div>
                      <div className="col-md-4">
                        <label className="label" htmlFor="cityName">
                          City*
                        </label>
                        <input
                          id="cityName"
                          className="form-control"
                          type="text"
                        />
                      </div>
                      <div className="col-md-4">
                        <label className="label" htmlFor="zipCode">
                          Postal / Zip Code*
                        </label>
                        <input
                          id="zipCode"
                          className="form-control"
                          type="number"
                        />
                      </div>
                    </div>
                    <div className="row mt-60">
                      <div className="col-md-12">
                        <div className="nav-btn d-flex flex-wrap justify-content-between">
                          <Link
                            to="loan-details"
                            className=" prev-btn theme-btn-primary_alt theme-btn"
                          >
                            <i className="arrow_left" />
                            previous
                          </Link>
                          <button
                            type="submit"
                            className=" next-btn theme-btn-primary_alt theme-btn "
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
        {/* Persinal Details end */}
      </main>
    </div>
  );
}

export default PersonalDetails1;
