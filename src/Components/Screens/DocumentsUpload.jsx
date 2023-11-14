import React from "react";
import { Link } from "react-router-dom";

function DocumentsUpload() {
  return (
    <div>
      <main>
        {/* BreadCrumb start */}
        <section className="breadcrumb-area">
          <div
            className="breadcrumb-widget  pt-200 pb-100"
            style={{ backgroundImage: "url(assets/img/breadcrumb/bg-1.png)" }}
          >
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="breadcrumb-content pt-90">
                    <h1>Documants Upload</h1>
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
        {/* Document Details Start */}
        <section className="loan-deatils-area bg_disable pt-140 pb-120">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
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
                    <li className="complete">
                      <Link to="personal-details">
                        <div className="number">
                          <i className="icon_check" /> <span>2</span>
                        </div>
                        Personal Details
                      </Link>
                    </li>
                    <li className=" active">
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
              <div className="col-md-9">
                <div className="loan-details-widget">
                  <form action="#">
                    <div className="row gy-4">
                      <div className="col-12">
                        <div className="doc-info">
                          <span>1.</span>
                          <p>
                            Selfie Photo. Your Personal Photo. The photo must be
                            done by yourself. The photo must show your face and
                            your both shoulders. (Please attach file )
                          </p>
                        </div>
                        <div className="doc-info mt-3">
                          <span>2.</span>
                          <p>
                            ID Card. Valid Government ID Card. Front and Back
                            side. Original ID Card. Full photo. All parts of the
                            ID card must be shown. The four corners of the ID
                            card must show on the photo. ID must be original and
                            valid. ID card must be very clear. (Please attach
                            file) *
                          </p>
                        </div>
                      </div>
                      <div className="col-12">
                        <div id="dropzone" className="dropzone" />
                      </div>
                      <div className="col-12 mt-4">
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="agreeBox"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="agreeBox"
                          >
                            I hereby agree that the information given is true,
                            accurate and complete as of the date of this
                            application submission. **
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="row mt-5">
                      <div className="col-md-12">
                        <div className="nav-btn d-flex flex-wrap justify-content-between">
                          <Link
                            to="personal-details"
                            className="prev-btn theme-btn-primary_alt theme-btn"
                          >
                            <i className="arrow_left" />
                            previous
                          </Link>
                          <button
                            type="submit"
                            className="theme-btn-primary_alt theme-btn"
                          >
                            Submit
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
        {/* Document Details end */}
      </main>
    </div>
  );
}

export default DocumentsUpload;
