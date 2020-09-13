import React from 'react';
import ShopPage from './Pages/Components/ShopPage/ShopPage.component'
import { Route, Switch } from 'react-router-dom'
import './App.css';
import { Homepage } from './Pages/Components/Homepage/Homepage.component';
import { Header } from './Pages/Components/header/header-component';
import { SignInAndSignUp } from './Pages/Components/sign-in-and-signup/sign-in-and-signup.component'
import { auth } from './firebase/firebase.utils'





class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
    });

  };

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }


  render() {
    return (
      <div>

        <Header currentUser={this.state.currentUser} />
        <Switch >
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signIn' component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }

}

export default App;
