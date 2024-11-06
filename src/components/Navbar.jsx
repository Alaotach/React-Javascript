import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import logo from './logo.png';
import styles from './Navbar.module.css';
import sunIcon from './icons8-sun-48.png';
import moonIcon from './icons8-moon-48.png';
import { Link } from 'react-router-dom';

export default function Navbar({ title }) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const btnSwitchRef = useRef(null);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.setAttribute('data-bs-theme', isDarkMode ? 'light' : 'dark');
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'light' : 'dark');
  };

  const btnThemeClass = isDarkMode ? "theme-btn-dark" : "theme-btn-light";
  const btnRoundClass = isDarkMode ? "theme-btn-round-dark" : "theme-btn-round-light";
  const buttonIcon = isDarkMode ? moonIcon : sunIcon;

  return (
    <nav className={`navbar navbar-expand-lg ${styles.navbarCustom}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img src={logo} className={`${styles.logo} mb-1 me-1`} alt="icon" />
          <b>{title}</b>
        </a>
        <ul className={`${styles.navLinks}`}>
          <li><Link to="/" className={styles.link}>Home</Link></li>
          <li><Link to="/about" className={styles.link}>About</Link></li>
          <li><Link to="/contact-us" className={styles.link}>Contact Us</Link></li>
          <li><Link to="/privacy-policy" className={styles.link}>Privacy Policy</Link></li>
        </ul>
        <div
          onClick={toggleDarkMode}
          className={`${styles["theme-btn"]} ${styles[btnThemeClass]} m-3`}
          id="btnSwitch"
          ref={btnSwitchRef}
        >
          <div className={`${styles["theme-btn-round"]} ${styles[btnRoundClass]}`}>
            <img src={buttonIcon} alt="Toggle theme icon" />
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "TextAloo",
};
