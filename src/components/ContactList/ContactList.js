import React, { useEffect } from 'react';
import ContactListItem from './ContactListItem/ContactListItem';
import PropTypes from 'prop-types';
import styles from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import operations from '../../redux/ContactForm/ContactForm-operations';
import selectors from '../../redux/ContactForm/ContactForm-selectors';

export default function ContactList() {
  const contactsList = useSelector(selectors.getContacts);
  const dispatch = useDispatch();
  const onDeleteContact = contactId =>
    dispatch(operations.deleteContact(contactId));

  useEffect(() => {
    dispatch(operations.fetchContacts());
  }, [dispatch]);

  return (
    <ul>
      {contactsList.map(({ name, number, id }) => {
        return (
          <ContactListItem
            name={name}
            number={number}
            key={id}
            id={id}
            onDeleteContact={onDeleteContact}
            className={styles.contactList}
          />
        );
      })}
    </ul>
  );
}

ContactList.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
};
