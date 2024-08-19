import React from 'react';
import ReactDOM from 'react-dom/client';
import { PersistGate } from 'redux-persist/integration/react';
import { App } from 'components/App';
import { Provider } from 'react-redux';
import { persistor, store } from 'redux/store';
import { Global } from '@emotion/react';
import { GlobalStyle } from 'components/GlobalStyle';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div style={{ position: 'relative' }}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter basename="/goit-react-hw-08-phonebook">
            <Global styles={GlobalStyle} />
            <App />
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </div>
  </React.StrictMode>
);
