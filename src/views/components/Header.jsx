import React from 'react';
import '../../assets/styles/components/header.scss';

export default function Header() {
  return (
    <header className="header-wrapper">
      <div className="header-wrapper__logo">
        <p>Logo</p>
        <p>Header</p>
      </div>
      <nav>
        <ul className="header-wrapper__nav-links">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
