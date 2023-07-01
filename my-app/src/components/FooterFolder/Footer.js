import React from 'react';
import './FooterStyle.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container text-center my-2">
        <p>Real Madrid © {new Date().getFullYear()} All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
