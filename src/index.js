import React from 'react';
import ReactDOM from 'react-dom';
import { HeroesApp } from './HeroesApp';
import 'bootstrap/dist/css/bootstrap.css';
import 'animate.css/animate.min.css'


ReactDOM.render(
  <React.StrictMode>
    <HeroesApp />
  </React.StrictMode>,
  document.getElementById('root')
);

