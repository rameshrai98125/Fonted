import React from "react";
import "./Footer.scss";
import { NavLink, useNavigate } from "react-router-dom";
import { motion } from "framer-motion"; // Import motion from framer-motion
import {
  BsTelephoneForwardFill,
  BsInstagram,
  BsFacebook,
  BsWhatsapp,
} from "react-icons/bs";
import { MdEmail } from "react-icons/md";

function Footer() {
  const navigate = useNavigate();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

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

        <motion.footer
          className="footer-container grid grid-four-column"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="footer-about" variants={itemVariants}>
            <h3>Contact Details</h3>
            <div className="footer-menu">
              <p>
                <BsTelephoneForwardFill />
                <span> 99154-44404</span>
              </p>
              <p>
                <MdEmail />
                innovationhouzz@gmail.com
              </p>
            </div>
          </motion.div>

          <motion.div className="footer-about" variants={itemVariants}>
            <h3>Follow Us</h3>

            <div className="footer-link">
              <a
                href="https://www.facebook.com/profile.php?id=100064004016559"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsFacebook className="footer-link-icon" />
              </a>
              <a
                href="https://wa.me/919915444404"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsWhatsapp className="footer-link-icon" />
              </a>
              <a
                href="https://www.instagram.com/innovative_architecture_and_in/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsInstagram className="footer-link-icon" />
              </a>
            </div>
          </motion.div>
          <motion.div className="footer-about" variants={itemVariants}>
            <h3>Location</h3>

            <p>Opp. Ramlila Ground. Thana Road Ellenabad (Sirsa) 125102</p>
          </motion.div>
        </motion.footer>

        {/* Bottom footer  */}

        <div className="Footer-bottom">
          <hr />
          <div className="container grid-two-col">
            <p>@{new Date().getFullYear()} Innovation. All rights reserved</p>
            <div className="bottom-footer-div">
              <p>Privacy Policy</p>
              <p>Terms & Conditions</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
