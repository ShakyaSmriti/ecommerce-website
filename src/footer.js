import React from "react";
import {
  FaInstagram,
  FaTiktok,
  FaFacebook,
  FaPinterest,
  FaSnapchat,
} from "react-icons/fa";
import "./styles.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-column">
        <h3>Let's Hang</h3>
        <ul>
          <li>
            <a
              href="https://www.instagram.com/kyashasmituu/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={25} /> Instagram
            </a>
          </li>
          <li>
            <a
              href="https://www.tiktok.com/@smitushakya"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTiktok size={25} /> TikTok
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/smriti.shakya.547"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook size={25} /> Facebook
            </a>
          </li>
          <li>
            <a
              href="https://www.pinterest.com/shakyasmriti368/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaPinterest size={25} /> Pinterest
            </a>
          </li>
          <li>
            <a
              href="https://web.snapchat.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaSnapchat size={25} /> Snapchat
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>Need Help?</h3>
        <ul>
          <li>
            <a href="#">Buy a Gift Card</a>
          </li>
          <li>
            <a href="#">Help Centre</a>
          </li>
          <li>
            <a href="#">Delivery & Returns</a>
          </li>
          <li>
            <a href="#">Size Guide</a>
          </li>
          <li>
            <a href="#">FAQs</a>
          </li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>About SheMart</h3>
        <ul>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Stores</a>
          </li>
          <li>
            <a href="#">Careers</a>
          </li>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">Terms & Conditions</a>
          </li>
          <li>
            <a href="#">Sustainability</a>
          </li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>Find Us</h3>
        <div className="map-container">
          <iframe
            title="Our Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14131.338767309544!2d85.28172409659608!3d27.691503669158042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1868199f2d47%3A0xf48b0ab8d867e77a!2sKuleshwor%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1736232932953!5m2!1sen!2snp"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className="footer-copyright">
        <p>&copy; 2024 SheMart. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
