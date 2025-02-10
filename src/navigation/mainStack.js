import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Modes from '../screens/Modes';
import FinanceData from '../screens/financeData';
import Home from '../screens/home';
const Stack = createNativeStackNavigator();

const MainStack = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="FinanceData" component={FinanceData} />
  </Stack.Navigator>
);

export default MainStack;
