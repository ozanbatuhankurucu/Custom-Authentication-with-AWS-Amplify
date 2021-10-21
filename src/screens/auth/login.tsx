import React, { FC } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { NavigationProp, ParamListBase } from '@react-navigation/native';
interface LoginPropsType {
  navigation: NavigationProp<ParamListBase>;
}

const Login: FC<LoginPropsType> = ({ navigation }): React.ReactElement => {
  return (
    <View style={styles.container}>
      <Text>Login Screen</Text>
      <Button title="Go to Sign Up" onPress={(): void => navigation.navigate('SignUp')}></Button>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
