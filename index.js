/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import Toast from 'react-native-toast-message';
import {Provider} from 'react-redux';
import {store} from './src/store/store';
import Modes from './src/screens/Modes';
import AuthStack from './src/navigation/authStack';
import App from './App';
import financeData from './src/screens/financeData';

const Apps = () => {
  return (
    <Provider store={store}>
      <App />
      <Toast position="top" />
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => financeData);
