import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Login, SignUp} from '../screens';

const {Screen, Navigator} = createStackNavigator();

const AuthStackNavigator: React.FC = () => {
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name="Login" component={Login}></Screen>
      <Screen name="SignUp" component={SignUp}></Screen>
    </Navigator>
  );
};

export default AuthStackNavigator;
