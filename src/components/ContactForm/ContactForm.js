import React, { useState, useCallback } from 'react';
import { v4 as genId } from 'uuid';
import PropTypes from 'prop-types';
import styles from './ContactForm.module.css';
import { useDispatch } from 'react-redux';
import operations from '../../redux/ContactForm/ContactForm-operations';

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

  const nameInputId = genId();
  const telInputId = genId();

  return (
    <form onSubmit={handleSubmit} className={styles.contactForm}>
      <label htmlFor={nameInputId} className={styles.labelForm}>
        Name
        <input
          type="text"
          name="name"
          id={nameInputId}
          value={name}
          onChange={handleChange}
          className={styles.inputForm}
        />
      </label>

      <label htmlFor={telInputId} className={styles.labelForm}>
        Number
        <input
          type="tel"
          name="number"
          id={telInputId}
          value={number}
          onChange={handleChange}
          className={styles.inputForm}
        />
      </label>
      <button type="submit" className={styles.buttonForm}>
        Add contact
      </button>
    </form>
  );
}

ContactForm.propTypes = {
  name: PropTypes.string,
  number: PropTypes.number,
};
