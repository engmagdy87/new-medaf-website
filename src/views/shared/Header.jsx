import React from 'react';
import logoTypeface from '../../assets/images/medaf-typeface-red.png';
import LinkedinIcon from '../../assets/images/Linkedin.jpg';
import '../../assets/styles/shared/header.scss';

export default function Header({ activeItem }) {
  let myNav;
  const openNav = () => {
    myNav.style.height = '100%';
  };

  const closeNav = () => {
    myNav.style.height = '0%';
  };
  const renderDesktopHeader = () => (
    <nav className="header-wrapper--desktop">
      <ul className="header-wrapper__navLinks">
        <li
          className={
            activeItem === 'home' ? 'header-wrapper__navLinks--active' : ''
          }
        >
          <a href="#home">Home</a>
        </li>
        <li
          className={
            activeItem === 'about' ? 'header-wrapper__navLinks--active' : ''
          }
        >
          <a href="#about">Who We Are</a>
        </li>
        <li
          className={
            activeItem === 'approach' ? 'header-wrapper__navLinks--active' : ''
          }
        >
          <a href="#approach">Our Approach</a>
        </li>
        <li
          className={
            activeItem === 'team' ? 'header-wrapper__navLinks--active' : ''
          }
        >
          <a href="#team">Our People</a>
        </li>
        <li
          className={
            activeItem === 'business' ? 'header-wrapper__navLinks--active' : ''
          }
        >
          <a href="#business">Our Business</a>
        </li>
        <li
          className={
            activeItem === 'media' ? 'header-wrapper__navLinks--active' : ''
          }
        >
          <a href="#media">Media</a>
        </li>
        <li
          className={
            activeItem === 'contact' ? 'header-wrapper__navLinks--active' : ''
          }
        >
          <a href="#contact">Contact Us</a>
        </li>
        <li>
          <a href="https://www.linkedin.com" target="__blank">
            <img src={LinkedinIcon} alt="Linkedin" />
          </a>
        </li>
      </ul>
    </nav>
  );
  const renderMobileHeader = () => (
    <div className="header-wrapper--mobile">
      <div ref={(node) => (myNav = node)} className="overlay">
        <a className="closebtn" onClick={closeNav}>
          &times;
        </a>

        <div className="overlay-content">
          <li
            className={
              activeItem === 'home' ? 'header-wrapper__navLinks--active' : ''
            }
          >
            <a href="#home" onClick={closeNav}>
              Home
            </a>
          </li>
          <li
            className={
              activeItem === 'about' ? 'header-wrapper__navLinks--active' : ''
            }
          >
            <a href="#about" onClick={closeNav}>
              Who We Are
            </a>
          </li>
          <li
            className={
              activeItem === 'approach'
                ? 'header-wrapper__navLinks--active'
                : ''
            }
          >
            <a href="#approach" onClick={closeNav}>
              Our Approach
            </a>
          </li>
          <li
            className={
              activeItem === 'team' ? 'header-wrapper__navLinks--active' : ''
            }
          >
            <a href="#team" onClick={closeNav}>
              Our People
            </a>
          </li>
          <li
            className={
              activeItem === 'business'
                ? 'header-wrapper__navLinks--active'
                : ''
            }
          >
            <a href="#business" onClick={closeNav}>
              Our Business
            </a>
          </li>
          <li
            className={
              activeItem === 'news' ? 'header-wrapper__navLinks--active' : ''
            }
          >
            <a href="#media" onClick={closeNav}>
              Media
            </a>
          </li>
          <li
            className={
              activeItem === 'contact' ? 'header-wrapper__navLinks--active' : ''
            }
          >
            <a href="#contact" onClick={closeNav}>
              Contact Us
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com" target="__blank">
              <img src={LinkedinIcon} alt="Linkedin" />
            </a>
          </li>
        </div>
      </div>

      <span className="hamburger-menu" onClick={openNav}>
        &#9776;
      </span>
    </div>
  );

  return (
    <header className="header-wrapper">
      <div className="header-wrapper__logo">
        <img src={logoTypeface} alt="medaf typeface" />
      </div>
      {renderDesktopHeader()}
      {renderMobileHeader()}
    </header>
  );
}
