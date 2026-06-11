import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiSearch, FiMenu, FiX } from "react-icons/fi";
import "./Navbar.css";
import logo from "../assets/pslogo2.svg";

function Navbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const goToContact = () => {
    closeMenu();
    setTimeout(() => {
      document.getElementById("contact")?.scrollIntoView({
        behavior: "smooth",
      });
    }, 100);
  };

  return (
    <header className="navbar">
      <Link to="/" className="navbar-logo" onClick={closeMenu}>
        <img src={logo} alt="PS Group" />
      </Link>

      <div className={`navbar-right ${menuOpen ? "active" : ""}`}>
        <nav className="navbar-links">
          <Link to="/" onClick={closeMenu}>
            Home
          </Link>
          <Link to="/about" onClick={closeMenu}>
            About
          </Link>
          <Link to="/businesses" onClick={closeMenu}>
            Businesses
          </Link>
          <Link to="/careers" onClick={closeMenu}>
            Careers
          </Link>

          <Link to="/" onClick={goToContact}>
            Contact
          </Link>

          <Link to="/businesses" className="find-more" onClick={closeMenu}>
            Find Out More
          </Link>
        </nav>

        <button
          className="search-icon-btn"
          onClick={() => {
            closeMenu();
            navigate("/search");
          }}
        >
          <FiSearch />
        </button>
      </div>

      <button
        className="mobile-menu-btn"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FiX /> : <FiMenu />}
      </button>
    </header>
  );
}

export default Navbar;
