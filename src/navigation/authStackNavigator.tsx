import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Login, SignUp } from '../screens/auth';
import { APP_SCREEN } from '@/configs';
import { AuthStackNavigatorProps } from './types';

const { Screen, Navigator } = createStackNavigator();
const AuthStackNavigator: FC<AuthStackNavigatorProps> = ({ setShowSpinner }) => {
  return (
    <Navigator screenOptions={{ headerShown: false }} initialRouteName={APP_SCREEN.LOG_IN}>
      <Screen
        name={APP_SCREEN.LOG_IN}
        component={Login}
        initialParams={{ setShowSpinner }}></Screen>
      <Screen
        name={APP_SCREEN.SIGN_UP}
        component={SignUp}
        initialParams={{ setShowSpinner }}></Screen>
    </Navigator>
  );
};

export default AuthStackNavigator;
