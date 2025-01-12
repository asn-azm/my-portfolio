// Navbar.js
import PropTypes from "prop-types";
// import { useState } from 'react';
// import CVModal from './CVModal'; // Import the CVModal component
import "../App.css";
// import { useEffect } from "react";

const Header = (props) => {

  return (

    <header className="header">
      <nav>
        <div className="logo">
          <a href="index.html" className="navbar-name">
            {props.firstName} {props.lastName}
            {/* {props.firstName}
              <span>{props.lastName}</span> */}
          </a>
        </div>
        {/* <input type="checkbox" id="menu-toggle" />
          <label htmlFor="menu-toggle" className="menu-icon">
            &#9776;
          </label> */}
        <ul className="menu">
          <li>
            <a href="#">About</a>
          </li>

          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#blog">Blog</a>
          </li>
          <li>
            <a href="public/AhsanAzamCV.pdf" target="_blank" rel="noopener noreferrer">
              View My CV
            </a>
          </li>
          <li>
            <a href="#contact" className="navbar-btn">
              Contact Me
            </a>
          </li>
        </ul>
      </nav>
      {/* <CVModal isOpen={isCVModalOpen} closeModal={closeCVModal} /> */}
    </header>

  );
};

Header.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
};

export default Header;
