import React from 'react';
import './App.css';

// Header component
const Header = () => {
  return (
    <header className="header">
      <div className="container text-center">
        <h1>Real Madrid</h1>
      </div>
    </header>
  );
};

// ClubInfo component
const ClubInfo = () => {
  return (
    <div className="club-info">
      <div className="container">
        <h2>Club Information</h2>
        <p>Real Madrid F.C.</p>
        <p>Founded in 19XX</p>
        <p>Stadium: Sant Bernabeu</p>
      </div>
    </div>
  );
};

// PlayersList component
const PlayersList = () => {
  const players = [
    { name: 'Player 1', position: 'Forward' },
    { name: 'Player 2', position: 'Midfielder' },
    { name: 'Player 3', position: 'Defender' },
  ];

  return (
    <div className="players-list">
      <div className="container">
        <h2>Players List</h2>
        <ul className="list-unstyled">
          {players.map((player, index) => (
            <li key={index}>
              {player.name} - {player.position}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// Footer component
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container text-center">
        <p>© 2023 Football Club. All rights reserved.</p>
      </div>
    </footer>
  );
};

// App component
const App = () => {
  return (
    <div>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Football Club</a>
        </div>
      </nav>

      <Header />
      <ClubInfo />
      <PlayersList />
      
      <Footer />
    </div>
  );
};

export default App;
