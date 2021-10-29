import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Login, SignUp, ConfirmSignUp } from '../screens/auth';
import { APP_SCREEN } from '@/configs';
import { AuthStackNavigatorProps } from './types';

const { Screen, Navigator } = createStackNavigator();
const AuthStackNavigator: FC<AuthStackNavigatorProps> = ({ setShowSpinner, setUser }) => {
  return (
    <Navigator screenOptions={{ headerShown: false }} initialRouteName={APP_SCREEN.LOG_IN}>
      <Screen
        name={APP_SCREEN.LOG_IN}
        component={Login}
        initialParams={{ setShowSpinner, setUser }}
      ></Screen>
      <Screen
        name={APP_SCREEN.SIGN_UP}
        component={SignUp}
        initialParams={{ setShowSpinner, setUser }}
      ></Screen>
      <Screen
        name={APP_SCREEN.CONFIRM_SIGN_UP}
        component={ConfirmSignUp}
        initialParams={{ setShowSpinner, setUser }}
      ></Screen>
    </Navigator>
  );
};

export default AuthStackNavigator;
