import React from 'react';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import {StatusBar} from 'react-native';
import '~/config/ReactotronConfig';

import {store, persistor} from './store';
import App from './App';

/**
 * bugfix
 * console.error: "redux-persist failed to create sync storage.
 * falling back to "noop" storage
 * https://stackoverflow.com/questions/57781527/how-to-solve-console-error-redux-persist-failed-to-create-sync-storage-falli
 */

const Index = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <StatusBar barStyle={'light-content'} backgroundColor={'#087480'} />
      <App />
    </PersistGate>
  </Provider>
);

export default Index;
