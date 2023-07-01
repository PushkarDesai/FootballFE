import React from 'react';
import './FixturesStyle.css' ;

const Fixtures = () => {
  const fixtures = [
    { date: '2023-07-01', opponent: 'Opponent 1', result: 'Win' },
    { date: '2023-07-05', opponent: 'Opponent 2', result: 'Draw' },
    { date: '2023-07-10', opponent: 'Opponent 3', result: 'Loss' },
  ];

  return (
    <div className="fixtures">
      <div className="container">
        <h2>Fixtures</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Opponent</th>
              <th>Result</th>
            </tr>
          </thead>
          <tbody>
            {fixtures.map((fixture, index) => (
              <tr key={index}>
                <td>{fixture.date}</td>
                <td>{fixture.opponent}</td>
                <td>{fixture.result}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Fixtures;
