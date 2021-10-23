import React, { FC } from 'react';
import { View, Text, Button } from 'react-native';
import { styles } from './styles';
import { APP_SCREEN } from '@/configs';
import type { LoginPropsType } from './types';

const Login: FC<LoginPropsType> = ({ navigation }): React.ReactElement => {
  return (
    <View style={styles.container}>
      <Text>Login Screen</Text>
      <Button
        title="Go to Sign Up"
        onPress={(): void => navigation.navigate(APP_SCREEN.SIGN_UP)}
      ></Button>
    </View>
  );
};

export default Login;
