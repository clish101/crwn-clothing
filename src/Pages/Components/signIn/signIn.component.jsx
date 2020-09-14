import React, { Component } from 'react';
import { FormInput } from '../form-input/form-input.component';
import './signIn.styles.scss';
import { Button } from '../custom-button/custom-button';
import { auth, SignInWithGoogle } from '../../../firebase/firebase.utils';

export class SignIn extends Component {
  constructor(props) {
    super();
    this.state = {
      email: '',
      password: '',
    };
  }
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({
        email: '',
        password: '',
      });
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    return (
      <div className="sign-in">
        <h1>I already have an account</h1>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            label="Email"
            value={this.state.email}
            ChangeHandler={this.handleChange}
            required
          />

          <FormInput
            type="password"
            name="password"
            label="Password"
            value={this.state.password}
            ChangeHandler={this.handleChange}
            required
          />
          <div className="buttons-group">
            <Button type="submit" value="Submit Form">
              Sign In
            </Button>
            <Button type="submit" onClick={SignInWithGoogle} IsGoogleSignIn>
              Sign In With Google
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
