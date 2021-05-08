import React, { useState } from 'react';
import { connect } from 'react-redux';
import authOperations from '../../redux/auth/auth-operations';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import styles from './LoginPage.module.css';

function LoginPage({ onLogin }) {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const handleChange = event => {
    event.preventDefault();
    const { name, value } = event.target;
    setUser(prev => ({ ...prev, [name]: value }));
  };

  const reset = () => {
    setUser({ email: '', password: '' });
  };

  const handleSubmit = event => {
    event.preventDefault();
    onLogin(user);
    reset();
  };

  return (
    <>
      <h2>Login page</h2>
      <Form onSubmit={handleSubmit} className={styles.Form}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={user.email}
            placeholder="Enter email"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            value={user.password}
            onChange={handleChange}
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
  onLogin: authOperations.login,
};

export default connect(null, mapDispatchToProps)(LoginPage);
