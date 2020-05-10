import React from 'react';
import '../../assets/styles/shared/footer.scss';

export default function Footer() {
  return (
    <div className="footer-wrapper">
      Copyright © {new Date().getFullYear()} medaf. All rights reserved
    </div>
  );
}
