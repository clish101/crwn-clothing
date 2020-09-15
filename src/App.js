import React from 'react';
import ShopPage from './Pages/Components/ShopPage/ShopPage.component'
import { Route, Switch, Redirect } from 'react-router-dom'
import './App.css';
import { Homepage } from './Pages/Components/Homepage/Homepage.component';
import Header from './Pages/Components/header/header-component';
import { SignInAndSignUp } from './Pages/Components/sign-in-and-signup/sign-in-and-signup.component'
import { auth, CreateUserProfileDocument } from './firebase/firebase.utils'
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.action';






class App extends React.Component {


  unsubscribeFromAuth = null



  componentDidMount() {
    const { setCurrentUser } = this.props
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

      if (userAuth) {
        const userRef = await CreateUserProfileDocument(userAuth)

        userRef.onSnapshot(snapshot => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          })

        })

      }
      setCurrentUser(userAuth)
    });

  };

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }


  render() {
    return (
      <div>

        <Header />
        <Switch >
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/signIn' render={()=>this.props.currentUser?(<Redirect to='/'/>):(<SignInAndSignUp/>)} />
        </Switch>
      </div>
    );
  }

}

const mapStateToProps=({user})=>({
  currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
