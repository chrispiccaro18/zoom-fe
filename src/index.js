import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import createStore from './store';

const { store, persistor } = createStore();

render(
  <Provider store={store}>
    <PersistGate 
      loading={
        <h1>Persist Loading</h1>
      }
      persistor={persistor}
    >
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
