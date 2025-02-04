import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/logIn';
import SignUp from '../screens/signUp.trsx';
const Stack = createNativeStackNavigator();

const MainStack = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="signUp" component={SignUp} />
  </Stack.Navigator>
);

export default MainStack;
