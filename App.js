import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './src/navigation/authStack';
import {useSelector} from 'react-redux';
import MainStack from './src/navigation/mainStack';
import SplashScreen from 'react-native-splash-screen';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
const App = () => {
  const user = useSelector(state => state?.Auth);
  console.log('In app screen:', user);

  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1);
  });

  return (
    <GestureHandlerRootView>
      <NavigationContainer>
        {user.token && user.mode ? <MainStack /> : <AuthStack />}
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default App;
