import React from 'react';
import {Provider} from 'react-redux';
import Rootnavigation from './src/navigator/Rootnavigation';
import store from './src/redux/store';
import * as Sentry from '@sentry/react-native';
Sentry.init({
  dsn: 'https://aebb30b8d40243798c6b92323199b9b8@o1253838.ingest.sentry.io/4504178952503296',
  // Set tracesSampleRate to 1.0 to capture 100% of transactions for performance monitoring.
  // We recommend adjusting this value in production.
  tracesSampleRate: 2.0,
  integrations: [
    new Sentry.ReactNativeTracing({
      tracingOrigins: ['localhost', 'my-site-url.com', /^\//],
    }),
  ],
});

function App() {
  return (
    <Provider store={store}>
      <Rootnavigation />
    </Provider>
  );
}
export default Sentry.wrap(App);
