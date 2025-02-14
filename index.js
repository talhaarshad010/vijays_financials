import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import Toast from 'react-native-toast-message';
import {Provider} from 'react-redux';
import {store} from './src/store/store';
import App from './App';

const Apps = () => {
  return (
    <Provider store={store}>
      <App />
      <Toast position="top" />
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => Apps);
