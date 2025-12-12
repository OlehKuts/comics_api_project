import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css'
import "./style.css"
import { App } from './App';
import ComicsService from './services/ComicsService';

// const comicsService = new ComicsService();
// comicsService.getAllCharacters()
// .then((result) => console.log(result.data.results));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
