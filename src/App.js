import React, { useEffect, Suspense, lazy } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import AppBar from './components/AppBar';
// import ContactsPage from './pages/Contacts';
// import LoginPage from './pages/Login';
// import RegisterPage from './pages/Register';
// import HomePage from './pages/Home';
import authOperations from './redux/auth/auth-operations';
import { useDispatch } from 'react-redux';
import PrivateRoute from './components/AppBar/PrivateRoute';
import PublicRoute from './components/AppBar/PublicRoute';

const HomePage = lazy(() =>
  import('./pages/Home' /*WebpackChunkName: HomePage */),
);
const LoginPage = lazy(() =>
  import('./pages/Login' /*WebpackChunkName: LoginPage */),
);
const RegisterPage = lazy(() =>
  import('./pages/Register' /*WebpackChunkName: RegisterPage */),
);
const ContactsPage = lazy(() =>
  import('./pages/Contacts' /*WebpackChunkName: ContactsPage */),
);

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  return (
    <>
      <AppBar />
      <Suspense fallback={<p>Loading...</p>}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <PublicRoute
            exact
            path="/register"
            restricted
            component={RegisterPage}
          />
          <PublicRoute exact path="/login" restricted component={LoginPage} />
          <PrivateRoute exact path="/contacts" component={ContactsPage} />
          <Route component={HomePage} />
        </Switch>
      </Suspense>
    </>
  );
}
