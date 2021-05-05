import React, { useState } from 'react';
import { useDispatch, connect } from 'react-redux';
import { v4 as genId } from 'uuid';
import authOperations from '../../redux/auth/auth-operations';

function RegisterPage({ onRegister }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const reset = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  // const dispatch = useDispatch();

  // const onRegister = () => dispatch(authOperations.register);
  const handleChange = event => {
    event.preventDefault();
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;

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
    onRegister({ name, email, password });
    reset();
  };

  const nameInputId = genId();
  const emailInputId = genId();
  const passwordInputId = genId();
  return (
    <>
      <h2>Registration page</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor={nameInputId}>
          Name
          <input
            type="text"
            name="name"
            id={nameInputId}
            value={name}
            onChange={handleChange}
          />
        </label>
        <label htmlFor={emailInputId}>
          Email
          <input
            type="email"
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
        <button type="submit">Register</button>
      </form>
    </>
  );
}

const mapDispatchToProps = {
  onRegister: authOperations.register,
};

export default connect(null, mapDispatchToProps)(RegisterPage);
