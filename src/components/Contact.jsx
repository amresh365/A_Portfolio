import React from "react";

export const Contact = () => {
  return (
    <div className="text-light container">
      <div className="introd text-light">
        <button
          className="btn btn-dark d-flex align-items-center justify-contant-center"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseWidthExample"
          aria-expanded="false"
          aria-controls="collapseWidthExample"
        >
          <h5 className="connectUs">Connect with us</h5>
          <i className="fa-solid fa-handshake-simple"></i>
        </button>
      </div>

      <div className="d-flex justify-content-center">
        <div
          className="collapse collapse-horizontal "
          id="collapseWidthExample"
        >
          <div className="card card-body text-dark bg-dark collaps my-4">
            <ul className="contactlist text-dark">
              <li>
                <a href="https://www.linkedin.com/in/amresh-gupta-737154239">
                  <i className="fa-brands fa-linkedin logo"></i>
                </a>
              </li>
              <li>
                <a href="https://github.com/amresh365">
                  <i className="fa-brands fa-github logo"></i>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/AmreshG5656">
                  <i className="fa-brands fa-square-x-twitter logo"></i>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/amreshg_365/?hl=en">
                  <i className="fa-brands fa-instagram logo"></i>
                </a>
              </li>
              <li>
                <a href="https://leetcode.com/u/amreshgupta365/">
                  <i className="fa-solid fa-l logo"></i>
                </a>
              </li>
              <li>
                <a href="https://www.hackerrank.com/profile/amreshgupta365">
                  <i className="fa-brands fa-hackerrank logo"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="contact ">
        <div className="container d-flex justify-content-center">
          <h3 className="headings">Contact</h3>
        </div>
        <ul className="contactlist">
          <li>
            <a href="https://wa.me/919598920855" text="urlencodedtext">
              <i class="fa-brands fa-square-whatsapp logo"></i>
            </a>
          </li>
          <li>
            <a href="https://t.me/AmreshG365">
              <i class="fa-brands fa-telegram logo"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
