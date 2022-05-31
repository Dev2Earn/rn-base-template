import React from 'react';
import AppNavigation from '@src/navigations';
import { Provider } from 'react-redux';
import { persistor, store } from '@src/store';
import { PersistGate } from 'redux-persist/integration/react';
import '@src/configs';
import BaseModal from '@src/modal/modal';
import { appModal } from '@src/modal';



const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <AppNavigation />
        <BaseModal ref={appModal} />
      </PersistGate>
    </Provider>
  );
};

export default App;
