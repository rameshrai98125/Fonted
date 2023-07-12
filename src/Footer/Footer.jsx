import React from "react";
import "./Footer.scss";
import { NavLink, useNavigate } from "react-router-dom";
import {
  BsTelephoneForwardFill,
  BsInstagram,
  BsFacebook,
  BsWhatsapp,
} from "react-icons/bs";
import { MdEmail } from "react-icons/md";

// import {
//   AiOutlineInstagram,
//   AiOutlineFacebook,
//   AiFillTwitterSquare,
// } from "react-icons/ai";

function Footer() {
  const navigate = useNavigate();
  return (
    <>
      <div className="warpper-footer">
        <section className="contact-shot">
          <div className="grid grid-two-column">
            <div>
              <h3 className="ContShotHeading">Ready to get started</h3>
            </div>

            <div>
              <button className="btn" onClick={() => navigate("/contact")}>
                Hire
              </button>
            </div>
          </div>
        </section>

        {/* footer  */}

        <footer className="footer-container grid grid-four-column">
          <div className="footer-about">
            <h3>Contact Details</h3>
            <div className="footer-menu">
              <p>
                <BsTelephoneForwardFill />
                <span>999154-44404</span>
              </p>
              <p>
                <MdEmail />
                innovationhouzz@gmail.com
              </p>
            </div>
          </div>

          <div className="footer-about">
            <h3>Follow Us</h3>

            <div className="footer-link">
              <a
                href="https://www.facebook.com/profile.php?id=100064004016559"
                target="blank"
              >
                <BsFacebook className="footer-link-icon" />
              </a>
              <a href=" https://wa.me/919915444404" target="blank">
                <BsWhatsapp className="footer-link-icon" />
              </a>
              <a
                href="https://www.instagram.com/innovative_architecture_and_in/"
                target="blank"
              >
                <BsInstagram className="footer-link-icon" />
              </a>
            </div>
          </div>
          <div className="footer-about">
            <h3>Location</h3>

            <p>Thana Road Near, Devi Lal Chowk Ellenabad,Sirsa, Haryana</p>
          </div>
        </footer>

        {/* Bottom footer  */}

        <div className="Footer-bottom">
          <hr />
          <div className="container grid-two-col">
            <p>@{new Date().getFullYear()}Innovation. All rights reserved</p>
            <div className="bottom-footer-div">
              <p>Privacy Police </p>
              <p>Terms & Conditions</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
