import React from 'react';
import { Provider } from 'react-redux';

import { PersistGate } from 'redux-persist/lib/integration/react';
import { Navigator } from 'navigation';
import Notification from 'components/Notification';

import 'config/ReactotronConfig';
import configureStore from 'store';

const { store, persistor } = configureStore();

const App = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Navigator />
      <Notification />
    </PersistGate>
  </Provider>
);

export default App;
