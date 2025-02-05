import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Modes from '../screens/Modes';
import FinanceData from '../screens/financeData';
const Stack = createNativeStackNavigator();

const MainStack = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="Modes" component={Modes} />
    <Stack.Screen name="FinanceData" component={FinanceData} />
  </Stack.Navigator>
);

export default MainStack;
