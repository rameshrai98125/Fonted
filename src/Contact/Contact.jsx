import React, { useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { BsFillTelephonePlusFill } from "react-icons/bs";
import { AiTwotoneMail } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";
import "./Contact.scss";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
    toast.success("Message Sent");
  };

  return (
    <motion.div
      className="contact-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="contact-head">
        <div className="contact-overlay">
          <h1 className="contactHead">Contact</h1>
        </div>
      </div>
      <div className="contact-menu">
        <div className="left-contact">
          <h2 className="left-main-contact">Contact Us</h2>
          <div className="phn-contact">
            <div>
              <p>
                <BsFillTelephonePlusFill />
                <span>Phone</span>
              </p>
              <a href="tel:(+91)9915444404">
                <p className="mailTo">+91-9915444404</p>
              </a>
            </div>
            <div>
              <p>
                <AiTwotoneMail />
                <span>Email</span>
              </p>

              <a href="mailto:innovationhouzz@gmail.com">
                <p className="mailTo">innovationhouzz@gmail.com</p>
              </a>
            </div>
            <div>
              <p>
                <MdLocationOn />
                <span>Address</span>
              </p>
              <p className="mailTo">
                Opp. Ramlila Ground, Thana Road Ellenabad (Sirsa), 125102
              </p>
            </div>
          </div>
        </div>
        <div className="right-contact">
          <form
            action="https://formspree.io/f/mdoroojy"
            method="POST"
            className="contact-form"
            onSubmit={handleSubmit}
          >
            <motion.h2
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Contact Us
            </motion.h2>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>
            <motion.input
              className="button"
              type="submit"
              value="Send"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
            />
          </form>
        </div>
      </div>

      <div className="map-location">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d868.5384644713814!2d74.6608597059433!3d29.45351725722684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3916bcc9eb240d27%3A0x130681e966dfde04!2sTau%20Devilal%20Chowk!5e0!3m2!1sen!2sin!4v1681058588061!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </motion.div>
  );
};

export default Contact;
