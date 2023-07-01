import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import Header from './components/HeaderFolder/Header';
import ClubInfo from './components/ClubInfoFolder/ClubInfo';
import PlayersList from './components/PlayersListFolder/PlayersList';
import Fixtures from './components/FixturesFolder/Fixtures';
import Footer from './components/FooterFolder/Footer';
import Navbar from './components/NavbarFolder/Navbar';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
          <Switch>
          <Route exact path="/" component={Header} />
            <Route path="/club-info" component={ClubInfo} />
            <Route path="/players-list" component={PlayersList} />
            <Route path="/fixtures" component={Fixtures} />
          </Switch>
        <Header />
        <ClubInfo />
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
