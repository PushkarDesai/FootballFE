import React from 'react';

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

export default PlayersList;
