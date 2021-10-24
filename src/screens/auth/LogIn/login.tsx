import React, { FC, useState } from 'react';
import { View, Text } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Input, Button, Link } from '@/components';
import { APP_SCREEN } from '@/configs';
import { styles } from './styles';
import type { LoginPropsType, userInformationType } from './types';

const Login: FC<LoginPropsType> = ({ navigation, route }): React.ReactElement => {
  const setShowSpinner = route.params.setShowSpinner;
  const [logInInformation, setLogInInformation] = useState<userInformationType>({
    username: '',
    password: ''
  });

  const handleOnChange = (name: string, text: string): void => {
    setLogInInformation((prev) => {
      return {
        ...prev,
        [name]: text
      };
    });
  };

  const handleSignUp = () => {
    setShowSpinner(true);
    console.log('handleSignUp');
  };

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <KeyboardAwareScrollView contentContainerStyle={styles.container}>
        <Text>Log in Screen</Text>
        <Input name="username" placeHolder="Username" onChange={handleOnChange} />
        <Input name="password" placeHolder="Password" onChange={handleOnChange} secureTextEntry />
        <Button title="Log in" onPress={handleSignUp}></Button>
        <View style={styles.linkContainer}>
          <Text style={styles.linkText}>Don&apos;t have an account?</Text>
          <Link text="Sign up" onPress={(): void => navigation.navigate(APP_SCREEN.SIGN_UP)} />
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default Login;
