import React from "react";
import "./Footer.css";
export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer__top wow animate__animated animate__fadeInUp">
          <div className="footer__text">
            <h2>Subscribe To Our Newsletter</h2>
          </div>
          <div className="footer__form">
            <form>
              <input type="text" name id placeholder="Your Email Address" />
              <button>
                <i class="fa-solid fa-caret-right"></i>
              </button>
            </form>
          </div>
        </div>
        <div className="footer__bottom">
          <div className="footer__item wow animate__animated animate__fadeIn animate__delay-1s">
            <ul className="footer__contact">
              <li>
                <i className="fa fa-phone" />
                <span>
                  1800-123-4567
                  <br />
                  +91 987-654-3210
                </span>
              </li>
              <li>
                <i className="fa fa-envelope" />
                <span>
                  info@example.com
                  <br />
                  services@gmail.com
                </span>
              </li>
              <li>
                <i className="fas fa-map-marker-alt" />
                <span>
                  Demo Address #8901 Marmora
                  <br />
                  Road City
                </span>
              </li>
            </ul>
          </div>
          <div className="footer__item wow animate__animated animate__fadeIn animate__delay-1s">
            <h3>Our links</h3>
            <ul>
              <li>
                <a href="#">
                  <i className="fa fa-angle-right" />
                  Home
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-angle-right" />
                  About Us
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-angle-right" />
                  Services
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-angle-right" />
                  Team
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-angle-right" />
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__item wow animate__animated animate__fadeIn animate__delay-1s">
            <h3>Our Services</h3>
            <ul>
              <li>
                <a href="#">
                  <i className="fa fa-angle-right" />
                  Strategy &amp; Research
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-angle-right" />
                  Web Development
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-angle-right" />
                  Web Solution
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-angle-right" />
                  Digital Marketing
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-angle-right" />
                  App Design
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__item wow animate__animated animate__fadeIn animate__delay-1s">
            <h3>Other links</h3>
            <ul>
              <li>
                <a href="#">
                  <i className="fa fa-angle-right" />
                  FAQ
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-angle-right" />
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-angle-right" />
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-angle-right" />
                  Terms &amp; Conditions
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-angle-right" />
                  Support
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer__copyright ">
        <div className="container footer__content">
          <div className="footer__left">
            Copyright © 2021 <span>DexignZone</span> . All rights reserved.
          </div>
          <div className="footer__right">
            <a href="#">
              <i className="fab fa-facebook-f" />
            </a>
            <a href>
              <i className="fab fa-instagram" />
            </a>
            <a href>
              <i className="fab fa-twitter" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
