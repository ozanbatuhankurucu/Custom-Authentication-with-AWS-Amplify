/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
import { LogBox } from 'react-native';
import MainNavigator from './src/navigation/mainNavigator';
LogBox.ignoreLogs(['Remote debugger']);
// TODOOzan dil secenegi eklenecek.
const App = () => {
  return <MainNavigator></MainNavigator>;
};

export default App;
