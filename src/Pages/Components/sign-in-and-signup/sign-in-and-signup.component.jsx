import React from 'react';
import SignUp from '../sign-up/sign-up.component';
import SignIn from '../signIn/signIn.component';
import './sign-in-and-signup.styles.scss';

export const SignInAndSignUp = () => {
  return (
    <div className="sign-in-and-signup">
      <SignIn />
      <SignUp />
    </div>
  );
};
