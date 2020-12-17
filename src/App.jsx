import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Main } from './components/pages';
import './style/App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
