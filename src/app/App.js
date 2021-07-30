import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import './App.scss';

import Landing from "./components/Landing/Landing";
import {LanguageProvider} from "./components/common/LanguageContext";

function App() {
  return (
    <>
        <LanguageProvider>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Landing}/>
                </Switch>
            </BrowserRouter>
        </LanguageProvider>
    </>
  );
}

export default App;
