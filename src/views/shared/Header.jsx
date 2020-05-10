import React from 'react';
import logo from '../../assets/images/logo.png';
import '../../assets/styles/shared/header.scss';

export default function Header({ activeItem }) {
  let myNav;
  const openNav = () => {
    myNav.style.height = '100%';
  };

  const closeNav = () => {
    myNav.style.height = '0%';
  };
  const renderHeader = () => {
    const largeDesktop = window.matchMedia('(min-width:1200px)');

    if (largeDesktop.matches)
      return (
        <nav>
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
              <a href="#about">About Medaf</a>
            </li>
            <li
              className={
                activeItem === 'approach'
                  ? 'header-wrapper__navLinks--active'
                  : ''
              }
            >
              <a href="#">Our Approach</a>
            </li>
            <li
              className={
                activeItem === 'team' ? 'header-wrapper__navLinks--active' : ''
              }
            >
              <a href="#">Team</a>
            </li>
            <li
              className={
                activeItem === 'business'
                  ? 'header-wrapper__navLinks--active'
                  : ''
              }
            >
              <a href="#">Our Business</a>
            </li>
            <li
              className={
                activeItem === 'news' ? 'header-wrapper__navLinks--active' : ''
              }
            >
              <a href="#">News & Events</a>
            </li>
            <li
              className={
                activeItem === 'contact'
                  ? 'header-wrapper__navLinks--active'
                  : ''
              }
            >
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </nav>
      );
    else
      return (
        <div>
          <div ref={(node) => (myNav = node)} className="overlay">
            <a className="closebtn" onClick={closeNav}>
              &times;
            </a>

            <div className="overlay-content">
              <a href="#home" onClick={closeNav}>
                Home
              </a>
              <a href="#about" onClick={closeNav}>
                About Medaf
              </a>
              <a href="#">Our Approach</a>
              <a href="#">Team</a>
              <a href="#">Our Business</a>
              <a href="#">News & Events</a>
              <a href="#">Contact Us</a>
            </div>
          </div>

          <span className="hamburger-menu" onClick={openNav}>
            &#9776;
          </span>
        </div>
      );
  };
  return (
    <header className="header-wrapper">
      <div className="header-wrapper__logo">
        <img src={logo} alt="medaf" />
        <p>MEDAF</p>
      </div>
      {renderHeader()}
    </header>
  );
}
