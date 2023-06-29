import React from 'react';
import Header from './components/Header';
import ClubInfo from './components/ClubInfo';
import PlayersList from './components/PlayersList';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import './App.css';

// App component
const App = () => {
  return (
    <div>
      <Navbar />

      <Header />
      <ClubInfo />
      <PlayersList />

      <Footer />
    </div>
  );
};

export default App;
