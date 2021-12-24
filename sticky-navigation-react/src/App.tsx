import React from 'react';
import logo from './logo.svg';
import './App.css';
import './Nav.css';
import LandingPage from './components/LandingPage';
import NavigationMenu from './components/NavigationMenu';

function App() {
  return (
    <div className="App">
      <NavigationMenu />
      <LandingPage />
    </div>
  );
}

export default App;
