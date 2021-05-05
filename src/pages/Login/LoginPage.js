import React, { useState } from 'react';
import { connect } from 'react-redux';
import { v4 as genId } from 'uuid';
import authOperations from '../../redux/auth/auth-operations';

function LoginPage({ onLogin }) {
  // state = { email: '', password: '' };
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const reset = () => {
    // this.setState({ email: '', password: '' });
    setEmail('');
    setPassword('');
  };

  const handleChange = event => {
    event.preventDefault();
    const { name, value } = event.currentTarget;

    switch (name) {
      case 'email':
        setEmail(value);
        break;

      case 'password':
        setPassword(value);
        break;

      default:
        console.warn(`Field with a type ${name} cannot be processed.`);
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    onLogin({ email, password });
    reset();
  };

  const emailInputId = genId();
  const passwordInputId = genId();
  return (
    <>
      <h2>Login page</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor={emailInputId}>
          Email
          <input
            type="emal"
            name="email"
            id={emailInputId}
            value={email}
            onChange={handleChange}
          />
        </label>

        <label htmlFor={passwordInputId}>
          Password
          <input
            type="password"
            name="password"
            id={passwordInputId}
            value={password}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Sign in</button>
      </form>
    </>
  );
}

const mapDispatchToProps = {
  onLogin: authOperations.login,
};

export default connect(null, mapDispatchToProps)(LoginPage);
