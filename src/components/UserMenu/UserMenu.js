import React, { useCallback, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';
import authOperations from '../../redux/auth/auth-operations';
import avatar from './avatar.png';
import Button from 'react-bootstrap/Button';
import styles from './UserMenu.module.css';
// import cntx from '../context/authContext';

export default function UserMenu() {
  const name = useSelector(authSelectors.getUserName);
  const dispatch = useDispatch();
  const onLogout = useCallback(() => dispatch(authOperations.logout()), [
    dispatch,
  ]);

  // const { user, login, logout } = useContext(cntx);

  return (
    <div style={{ marginLeft: 'auto', width: 'auto' }}>
      <img src={avatar} className={styles.Avatar} alt="" width="32" />
      <span>Welcome, {name}</span>
      <Button
        type="button"
        onClick={onLogout}
        className={styles.Button}
        variant="warning"
      >
        Logout
      </Button>
    </div>
  );
}
