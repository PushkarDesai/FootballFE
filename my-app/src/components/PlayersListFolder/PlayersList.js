import React from 'react';
import './PlayersListStyle.css'; 

const PlayersList = () => {
  const players = [
    { name: '1 Thibaut Courtois', position: 'Goalkeeper' },
    { name: '2 Daniel Carvajal', position: 'Defender' },
    { name: '3 Éder Militão', position: 'Defender' },
    { name: '4 David Alaba', position: 'Defender' },
    { name: '12 Eduardo Camavinga', position: 'Defender' },
    { name: '15 Federico Valverde', position: 'Midfielder' },
    { name: '8 Toni Kroos', position: 'Midfielder' },
    { name: '10 Luka Modric', position: 'Midfielder' },
    { name: '11 Rodrygo Goes', position: 'Forward' },
    { name: '9 Karim Benzema', position: 'Forward' },
    { name: '7 Vinicius Jr', position: 'Forward' },
    // { name: '4 David Alaba', position: 'Defender' },
    // { name: '4 David Alaba', position: 'Defender' },
    // { name: '4 David Alaba', position: 'Defender' },
    // { name: '4 David Alaba', position: 'Defender' },
    // { name: '4 David Alaba', position: 'Defender' },
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
        <img src="https://www.roiblog.jp/wp-content/uploads/2022/09/realmadrid22-23formation_en.png" alt="Formation" />
      </div>
    </div>
  );
};

export default PlayersList;
