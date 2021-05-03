import React from 'react';
import SiteNav from './SiteNav';
import AuthNav from './AuthNav';
import UserMenu from '../UserMenu';
import { useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';

export default function AppBar() {
  const isAuthenticated = useSelector(authSelectors.getIsAuthenticated);

  return (
    <header>
      <SiteNav />
      {isAuthenticated ? <UserMenu /> : <AuthNav />}
    </header>
  );
}
