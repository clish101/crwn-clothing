import React from 'react';

import { Route, Switch } from 'react-router-dom'
import './App.css';
import { Homepage } from './Pages/Components/Homepage/Homepage.component';



export const Hats = () => {
  return (
    <div>
      <h1>This is the homepage</h1>
    </div>
  )
}


function App() {
  return (
    <div>
      <Switch >
        <Route exact path='/' component={Homepage} />
        <Route path='/shop/hats' component={Hats} />
      </Switch>
    </div>
  );
}

export default App;
