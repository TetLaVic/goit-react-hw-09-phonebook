import React from 'react';
import SiteNav from './SiteNav';
import AuthNav from './AuthNav';
import UserMenu from '../UserMenu';
import { useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';
import Navbar from 'react-bootstrap/Navbar';
import styles from './AppBar.module.css';

export default function AppBar() {
  const isAuthenticated = useSelector(authSelectors.getIsAuthenticated);

  return (
    <Navbar bg="primary" variant="dark" className={styles.AppBar}>
      <SiteNav />
      {isAuthenticated ? <UserMenu /> : <AuthNav />}
    </Navbar>
  );
}
