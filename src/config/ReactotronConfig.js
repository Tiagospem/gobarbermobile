import Reactotron from 'reactotron-react-native';
import {reactotronRedux} from 'reactotron-redux';
import reactotronSaga from 'reactotron-redux-saga';

/**
 * is not connect adb reverse tcp:9090 tcp:9090 in order for it to connect.
 */

if (__DEV__) {
  const tron = Reactotron.configure()
    .useReactNative()
    .use(reactotronRedux())
    .use(reactotronSaga())
    .connect({
      host: '198.168.100.34',
    });

  tron.clear();

  console.tron = tron;
}
