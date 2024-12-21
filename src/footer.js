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
        <h3>My Account</h3>
        <ul>
          <li>
            <a href="#">Wishlist</a>
          </li>
          <li>
            <a href="#">Order History</a>
          </li>
          <li>
            <a href="#">Register a Gift Card</a>
          </li>
          <li>
            <a href="#">Transfer a Gift Card</a>
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
      <div className="footer-copyright">
        <p>&copy; 2024 SheMart. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
