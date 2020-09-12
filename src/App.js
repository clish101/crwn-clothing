import React from 'react';
import ShopPage from './Pages/Components/ShopPage/ShopPage.component'
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
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
