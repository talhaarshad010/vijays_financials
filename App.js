import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './src/navigation/authStack';
import {useSelector} from 'react-redux';
import MainStack from './src/navigation/mainStack';

const App = () => {
  const user = useSelector(state => state?.Auth);

  console.log('In app screen:', user);

  return (
    <NavigationContainer>
      {user.token && user.mode ? <MainStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default App;
