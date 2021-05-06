import React, { useState } from 'react';
import { useDispatch, connect } from 'react-redux';
import authOperations from '../../redux/auth/auth-operations';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import styles from './RegisterPage.module.css';

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
  const handleNameChange = event => {
    event.preventDefault();
    setName(event.target.value);
  };

  const handleEmailChange = event => {
    event.preventDefault();
    setEmail(event.target.value);
  };

  const handlePasswordChange = event => {
    event.preventDefault();
    setPassword(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    onRegister({ name, email, password });
    reset();
  };

  return (
    <>
      <h2>Registration page</h2>
      <Form onSubmit={handleSubmit} className={styles.Form}>
        <Form.Group controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="name"
            name="name"
            value={name}
            placeholder="Enter name"
            onChange={handleNameChange}
          />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={email}
            placeholder="Enter email"
            onChange={handleEmailChange}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Enter password"
            value={password}
            onChange={handlePasswordChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}

const mapDispatchToProps = {
  onRegister: authOperations.register,
};

export default connect(null, mapDispatchToProps)(RegisterPage);
