import React from 'react';
import './HeaderStyle.css';

const Header = () => {
  return (
    <header className="header" style={{ backgroundImage: `url(${'https://www.realmadrid.com/img/cc_1920px/fichajes_2_20230625075033.jpg'})` }}>
      <div className="container text-center">
        {/* <h1>{props.title}</h1> */}
      </div>
    </header>
  );
};

export default Header;
