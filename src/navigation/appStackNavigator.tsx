import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home, Dashboard } from '../screens/app';

const { Screen, Navigator } = createStackNavigator();

const AppStackNavigator: React.FC = () => {
  return (
    <Navigator>
      <Screen name="Home" component={Home}></Screen>
      <Screen name="Dashboard" component={Dashboard}></Screen>
    </Navigator>
  );
};

export default AppStackNavigator;
