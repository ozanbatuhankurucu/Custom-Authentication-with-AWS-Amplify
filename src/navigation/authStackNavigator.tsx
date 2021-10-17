import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Login, SignUp} from '../screens/auth';

const {Screen, Navigator} = createStackNavigator();
// TODOOzan constant textler nasil tanimlanmis open source projeye bakarak implement edilecek.
const AuthStackNavigator: React.FC = () => {
  return (
    <Navigator screenOptions={{headerShown: false}} initialRouteName="SignUp">
      <Screen name="Login" component={Login}></Screen>
      <Screen name="SignUp" component={SignUp}></Screen>
    </Navigator>
  );
};

export default AuthStackNavigator;
