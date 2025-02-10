import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/logIn';
import SignUp from '../screens/signUp';
import RecoveryPassword from '../screens/RecoveryPassword';
import OTP from '../screens/otp';
import Modes from '../screens/Modes';
const Stack = createNativeStackNavigator();

const AuthStack = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="SignUp" component={SignUp} />
    <Stack.Screen name="Modes" component={Modes} />
    <Stack.Screen name="RecoveryPassword" component={RecoveryPassword} />
    <Stack.Screen name="OTP" component={OTP} />
  </Stack.Navigator>
);

export default AuthStack;
