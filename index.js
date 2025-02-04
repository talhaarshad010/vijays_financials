/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import App from './App';
import Toast from 'react-native-toast-message';
import {Provider} from 'react-redux';
import {store} from './src/store/store';
import Modes from './src/screens/Modes';

const Appss = () => {
  return (
    <Provider store={store}>
      <Modes />
      <Toast position="top" />
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => Appss);
