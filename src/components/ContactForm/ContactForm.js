import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import styles from './ContactForm.module.css';
import { useDispatch } from 'react-redux';
import operations from '../../redux/ContactForm/ContactForm-operations';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function ContactForm() {
  const [contact, setContact] = useState({ name: '', number: '' });

  const dispatch = useDispatch();

  const onSubmit = useCallback(
    contact => dispatch(operations.addContact(contact)),
    [dispatch],
  );

  const reset = () => {
    setContact({ name: '', number: '' });
  };

  const handleChange = event => {
    event.preventDefault();
    const { name, value } = event.target;
    setContact(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = useCallback(
    event => {
      event.preventDefault();
      onSubmit(contact);
      reset();
    },
    [onSubmit, contact],
  );

  return (
    <Form onSubmit={handleSubmit} className={styles.Form}>
      <Form.Group controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="name"
          name="name"
          value={contact.name}
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
          value={contact.number}
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
  number: PropTypes.string,
};
