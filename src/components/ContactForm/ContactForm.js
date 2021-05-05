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

  const handleChange = event => {
    event.preventDefault();
    const { name, value } = event.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        console.warn(`Field with a type ${name} cannot be processed.`);
    }
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
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="formBasicNumber">
        <Form.Label>Number</Form.Label>
        <Form.Control
          type="tel"
          name="number"
          placeholder="Enter phone number"
          value={number}
          onChange={handleChange}
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
  number: PropTypes.number,
};
