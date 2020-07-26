import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import NavBar from './NavBar'
import { SubNavAdvantages } from './Advantages'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter strict>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <h1>Landingpage</h1>
        </Route>
        <Route exact path="/calculator">
          <App />
        </Route>
        <Route exact path="/about">
          <h1>About</h1>
        </Route>
        <Route path="/advantages" component={SubNavAdvantages} />
        <Route path="*">
          <h1>404 not found</h1>
        </Route>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
