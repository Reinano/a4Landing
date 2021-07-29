import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './styles/App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path='/' />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
