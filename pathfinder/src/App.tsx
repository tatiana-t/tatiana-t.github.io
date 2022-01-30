import React from 'react';
import './app.scss';
import Characteristics from './components/characteristics/Characteristics';
import Menu from './components/menu/Menu';
import Skills from './components/skills/Skills';
import Cantrips from './components/cantrips/Cantrips';

function App() {
  return (
    <div className="app">
      <div className="app__menu">
        <Menu />
      </div>
      <div className="app__container">
        Char name: Veruma Esse
        <Characteristics className="app__section" />
        <Skills className="app__section" />
        <Cantrips className="app__section" />
      </div>
    </div>
  );
}

export default App;
