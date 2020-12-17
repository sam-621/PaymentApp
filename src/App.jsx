import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Main, EnterData } from './components/pages';
import './style/App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/data" component={EnterData} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
