import React from 'react';
import { Link } from 'react-router-dom';
import './NavbarStyle.css';

const Navbar = () => {
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container mx-2">
        <a className="navbar-brand" href="/logo">
        <img src='https://www.realmadrid.com/StaticFiles/RealMadridResponsive/images/header_logo.svg' alt="Logo" width="200" height="60" className="d-inline-block align-text-top" /></a>
        
        <Link to="/" className="navbar-brand"></Link>
        <ul className="navbar-nav mx-7 my">
          <li className="nav-item">
            <div className="nav-link">
              <Link to="/fixtures" className="nav-link-item mx-3"><button type="button" className="btn btn-warning fixtures-btn">Fixtures</button></Link>
              <Link to="/players-list" className="nav-link-item mx-4"><button type="button" className="btn btn-warning squad-btn">Squad</button></Link>
            </div>
          </li>
        </ul>
      </div>

      {/* <div className='container bg-body-tertiary mx-'>
        <a className='navbar-news' href='/'>
          News
        </a>
      </div> */}
    </nav>
  );
};

export default Navbar;
