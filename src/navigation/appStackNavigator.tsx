import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home, Dashboard } from '../screens/app';
import { APP_SCREEN } from '@/configs';

const { Screen, Navigator } = createStackNavigator();

const AppStackNavigator: React.FC = () => {
  return (
    <Navigator>
      <Screen name={APP_SCREEN.HOME} component={Home}></Screen>
      <Screen name={APP_SCREEN.DASHBOARD} component={Dashboard}></Screen>
    </Navigator>
  );
};

export default AppStackNavigator;
