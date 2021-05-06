import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import styles from './ContactForm.module.css';
import { useDispatch } from 'react-redux';
import operations from '../../redux/ContactForm/ContactForm-operations';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();

  const onSubmit = useCallback(
    contact => dispatch(operations.addContact(contact)),
    [dispatch],
  );

  const reset = () => {
    setName('');
    setNumber('');
  };

  const handleNameChange = event => {
    event.preventDefault();
    // const { name, value } = event.currentTarget;
    setName(event.target.value);
  };

  const handleNumberChange = event => {
    event.preventDefault();
    // const { name, value } = event.currentTarget;
    setNumber(event.target.value);
  };

  const handleSubmit = useCallback(
    event => {
      event.preventDefault();
      onSubmit({ name, number });
      reset();
    },
    [onSubmit, name, number],
  );

  return (
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

      <Form.Group controlId="formBasicNumber">
        <Form.Label>Number</Form.Label>
        <Form.Control
          type="tel"
          name="number"
          placeholder="Enter phone number"
          value={number}
          onChange={handleNumberChange}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Add contact
      </Button>
    </Form>
  );
}

ContactForm.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
};
