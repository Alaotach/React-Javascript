import React from 'react';
import propTypes from 'prop-types';
import {useState, useRef} from 'react';
import logo from './logo.png';
import styles from './Navbar.module.css';
import sunIcon from './icons8-sun-48.png';
import moonIcon from './icons8-moon-48.png';

export default function Navbar(props) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const btnSwitchRef = useRef(null);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.setAttribute('data-bs-theme', isDarkMode? 'light' : 'dark');
    document.documentElement.setAttribute('data-theme', isDarkMode? 'light' : 'dark');
  }


  const btnThemeClass = isDarkMode? "theme-btn-dark" : "theme-btn-light";

  const btnRoundClass =
    isDarkMode? "theme-btn-round-dark" : "theme-btn-round-light";

  const buttonIcon = isDarkMode? moonIcon : sunIcon;
  
  return(
  <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img src={logo} className='mb-1 me-1' style={{height: '1.5rem'}} alt="icon"></img>
          <b>Text<font color='#B80F0A'>Aloo</font></b></a>
    <div
      onClick={toggleDarkMode}
      className={`${styles["theme-btn"]} ${styles[btnThemeClass]}`} id='btnSwitch' ref={btnSwitchRef} onChange={toggleDarkMode} 
    >
      <div className={`${styles["theme-btn-round"]} ${styles[btnRoundClass]}`}>
        <img src={buttonIcon} alt="icon"></img>
      </div>
    </div>
        </div>
      </nav>
  </>
    );
}

Navbar.propTypes = {
  title: propTypes.string.isRequired
}