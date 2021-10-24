import React, { FC, useState } from 'react';
import { View, Text } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Input, Button, Link } from '@/components';
import { APP_SCREEN } from '@/configs';
import { SignUpPropsType, userInformationType } from './types';
import { styles } from './styles';

const SignUp: FC<SignUpPropsType> = ({ navigation }) => {
  const [signUpInformation, setSignUpInformation] = useState<userInformationType>({
    username: '',
    email: '',
    password: ''
  });
  const handleOnChange = (name: string, text: string): void => {
    setSignUpInformation((prev) => {
      return {
        ...prev,
        [name]: text
      };
    });
  };
  const handleSignUp = () => {
    console.log('handleSignUp');
  };
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <KeyboardAwareScrollView contentContainerStyle={styles.container}>
        <Text>Sign Up Screen</Text>
        <Input name="username" placeHolder="Username" onChange={handleOnChange} />
        <Input name="email" placeHolder="Email" onChange={handleOnChange} />
        <Input name="password" placeHolder="Password" onChange={handleOnChange} secureTextEntry />
        <Button title="Sign Up" onPress={handleSignUp}></Button>
        <View style={styles.linkContainer}>
          <Text style={styles.linkText}>Already have an account?</Text>
          <Link text="Log in" onPress={() => navigation.navigate(APP_SCREEN.LOG_IN)} />
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
