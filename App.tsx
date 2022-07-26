import React from 'react';
import {Provider} from 'react-redux';
import Rootnavigation from './src/navigator/Rootnavigation';
import store from './src/redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <Rootnavigation />
    </Provider>
  );
}
