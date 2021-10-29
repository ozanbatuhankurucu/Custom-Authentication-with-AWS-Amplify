import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home, Dashboard } from '../screens/app';
import { APP_SCREEN } from '@/configs';
import type { AppStackNavigatorProps } from './types';

const { Screen, Navigator } = createStackNavigator();

const AppStackNavigator: React.FC<AppStackNavigatorProps> = ({
  setShowSpinner,
  user,
  setUser
}): React.ReactElement => {
  return (
    <Navigator>
      <Screen
        name={APP_SCREEN.HOME}
        component={Home}
        initialParams={{ user, setUser, setShowSpinner }}
      ></Screen>
      <Screen name={APP_SCREEN.DASHBOARD} component={Dashboard}></Screen>
    </Navigator>
  );
};

export default AppStackNavigator;
