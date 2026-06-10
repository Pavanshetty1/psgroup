import "./Footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";
import { FiSend } from "react-icons/fi";
import { SiOpenai } from "react-icons/si";
import { SiGooglegemini } from "react-icons/si";
import perplexity from "../assets/perplexity.png";
import logo from "../assets/pslogo2.svg";

function Footer() {
  return (
    <footer className="ps-footer">
      <div className="ps-footer-grid">
        <div className="footer-brand">
          {/* <h2>PS GROUP</h2> */}
          <img src={logo} alt="logo"></img>
          <p>
            Delivering excellence across Pest Management, IT Solutions,
            Healthcare, Interior and Film Production.
          </p>
          <div className="footer-socials">
            <a
              href="https://www.facebook.com/profile.php?id=100081275380050"
              target="blank"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/ps_group_company/"
              target="blank"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/company/ps-group123/posts/?feedView=all"
              target="blank"
            >
              <FaLinkedinIn />
            </a>
            <a href="https://www.youtube.com/" target="blank">
              <FaYoutube />
            </a>
          </div>
        </div>

        <div className="footer-col">
          <h4>COMPANY</h4>
          <a href="#home">Home</a>
          <a href="/about">About Us</a>
          <a href="/businesses">Businesses</a>
          <a href="#glance">Glance</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-col">
          <h4>BUSINESSES</h4>
          <a href="/businesses">Pest Management</a>
          <a href="/businesses">IT Solutions</a>
          <a href="/businesses">Healthcare</a>
          <a href="/businesses">Interior</a>
          <a href="/businesses">Film Production</a>
        </div>

        <div className="footer-col">
          <h4>CAREERS & INFO</h4>
          <a href="/careers">Careers</a>
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms & Conditions</a>
            <a href="/refund">Refund Policy</a>
            <a href="/shipping-policy">Shipping Policy</a>
        </div>

        <div className="footer-newsletter">
          {/* <div className="footer-top-socials">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaXTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaYoutube /></a>
            <a href="#"><FaLinkedinIn /></a>
          </div> */}

          <p className="ai-text">Ask AI about PS Group</p>

          <div className="ai-icons">
            <a
              href="https://chatgpt.com/?q=Tell%20me%20about%20PS%20Group%20Bangalore"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiOpenai />
            </a>
            <a
              href="https://www.perplexity.ai/search/new?q=Tell%20me%20about%20PS%20Group%20Bangalore"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={perplexity} alt="Perplexity" />
            </a>
            <a
              href="https://gemini.google.com/app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiGooglegemini />
            </a>
          </div>
          <p className="newsletter-text">
            Subscribe to our newsletter for the latest news straight to your
            inbox.
          </p>

          <form className="newsletter-form">
            <input
              type="email"
              placeholder="Enter your email ID to subscribe"
            />
            <button type="submit">
              Submit <FiSend />
            </button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} PS Group. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
