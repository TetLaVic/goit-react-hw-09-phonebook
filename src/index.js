import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import './index.css';
import App from './App';
// import AuthProvider from './components/context/AuthProvider';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store.store}>
        <PersistGate loading={null} persistor={store.persistor}>
          {/* <AuthProvider> */}
          <App />
          {/* </AuthProvider> */}
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
