import React from 'react';
import './style/App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Main, EnterData, Success } from './components/pages';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/:planName" component={EnterData} />
        <Route exact path="/:planName/success" component={Success} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
