import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Accueil from './components/pages/Accueil';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Espaces from './components/pages/Espaces';
import Contact from './components/pages/Contact';
import SeConnecter from './components/pages/SeConnecter';
import Footer from './components/Footer';
import Anniv from './components/pages/Anniv'
import Baptem from './components/pages/Baptem'
import Conference from './components/pages/Conference'
import Outils from './components/pages/Outils'
import Mariage from './components/pages/Mariage'
import Espace from './components/pages/Espace'
import DetailMariage from './components/pages/DetailMariage';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Accueil} />
          <Route path='/espaces' component={Espaces} />
          <Route path='/contact' component={Contact} />
          <Route path='/se connecter' component={SeConnecter} />
          <Route path='/mariage' component={Mariage} />
          <Route path='/anniv' component={Anniv} />
          <Route path='/baptem' component={Baptem} />
          <Route path='/conference' component={Conference} />
          <Route path='/outils' component={Outils} />
          <Route path='/espace' component={Espace} />
          <Route path='/detailmariage' component={DetailMariage} />
          <Footer/> 
        </Switch>
         <Footer/> 
      </Router>
      
    </>
  );
}

export default App;
