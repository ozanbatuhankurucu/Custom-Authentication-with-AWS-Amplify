import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Login, SignUp } from '../screens/auth';
import { APP_SCREEN } from '@/configs';

const { Screen, Navigator } = createStackNavigator();
const AuthStackNavigator: React.FC = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }} initialRouteName={APP_SCREEN.LOG_IN}>
      <Screen name={APP_SCREEN.LOG_IN} component={Login}></Screen>
      <Screen name={APP_SCREEN.SIGN_UP} component={SignUp}></Screen>
    </Navigator>
  );
};

export default AuthStackNavigator;
