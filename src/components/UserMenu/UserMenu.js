import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';
import authOperations from '../../redux/auth/auth-operations';
import avatar from './avatar.png';

export default function UserMenu() {
  const name = useSelector(authSelectors.getUserName);
  const dispatch = useDispatch();
  const onLogout = useCallback(() => dispatch(authOperations.logout()), [
    dispatch,
  ]);

  return (
    <div>
      <img src={avatar} alt="" width="32" />
      <span>Welcome, {name}</span>
      <button type="button" onClick={onLogout}>
        Logout
      </button>
    </div>
  );
}
