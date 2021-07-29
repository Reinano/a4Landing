import React from 'react';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import './App.scss';

import Landing from "./components/Landing/Landing";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
            <Route exact path='/' component={Landing}/>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
