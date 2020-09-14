import React from 'react';
import {
  auth,
  CreateUserProfileDocument,
  SignInWithGoogle,
} from '../../../firebase/firebase.utils';
import { FormInput } from '../form-input/form-input.component';
import './sign-up.styles.scss';
import { Button } from '../custom-button/custom-button';
import { useParams } from 'react-router-dom';

class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await CreateUserProfileDocument(user, { displayName });

      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
    } catch (error) {
      console.error(error);
    }

    this.setState({
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
    });
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <span>Sign up with your email and password</span>
        <form onSubmit={this.handleSubmit} className="sign-up-form">
          <FormInput
            type="text"
            name="displayName"
            onChange={this.handleChange}
            value={displayName}
            label="Name"
            required
          />

          <FormInput
            type="email"
            name="email"
            onChange={this.handleChange}
            value={email}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            onChange={this.handleChange}
            value={password}
            label="Password"
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            onChange={this.handleChange}
            value={confirmPassword}
            label="confirmPassword"
            required
          />
          <div className="button-group">
            <Button type="submit">SIGN UP</Button>
            <Button type="submit" onClick={SignInWithGoogle} IsGoogleSignIn>
              SIGN UP WITH GOOGLE
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUp;
