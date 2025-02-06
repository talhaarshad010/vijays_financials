import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './src/navigation/authStack';
import {useSelector} from 'react-redux';
import MainStack from './src/navigation/mainStack';

const App = () => {
  const token = useSelector(state => state?.Auth?.data?.token);
  console.log('In app screen:', token);
  return (
    <NavigationContainer>
      {token ? <MainStack /> : <AuthStack />}
      {/* <AuthStack /> */}
    </NavigationContainer>
  );
};

export default App;
