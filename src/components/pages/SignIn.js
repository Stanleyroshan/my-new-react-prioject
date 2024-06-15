// src/pages/SignIn.js
import React from 'react';
import { useHistory } from 'react-router-dom';
import AuthForm from '../components/AuthForm';
import useAuthStore from '../store/auth';

const SignIn = () => {
  const history = useHistory();
  const signIn = useAuthStore((state) => state.signIn);

  const handleSignIn = (values) => {
    // Mock API call
    setTimeout(() => {
      signIn(values);
      history.push('/');
    }, 1000);
  };

  return (
    <div>
      <h1>Sign In</h1>
      <AuthForm type="signIn" onSubmit={handleSignIn} />
    </div>
  );
};

export default SignIn;
