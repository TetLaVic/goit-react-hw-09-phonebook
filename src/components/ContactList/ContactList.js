import React, { useEffect } from 'react';
import ContactListItem from './ContactListItem/ContactListItem';
import styles from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import operations from '../../redux/ContactForm/ContactForm-operations';
import selectors from '../../redux/ContactForm/ContactForm-selectors';
import ListGroup from 'react-bootstrap/ListGroup';

export default function ContactList() {
  const contactsList = useSelector(selectors.getContacts);
  const dispatch = useDispatch();
  const onDeleteContact = contactId =>
    dispatch(operations.deleteContact(contactId));

  useEffect(() => {
    dispatch(operations.fetchContacts());
  }, [dispatch]);

  return (
    <ListGroup className={styles.ListGroup}>
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
    </ListGroup>
  );
}
