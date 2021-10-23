import React, { FC, useState } from 'react';
import { View, Text, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Input } from '@/components';
import { SignUpPropsType, userInformationType } from './types';
import { styles } from './styles';

const SignUp: FC<SignUpPropsType> = ({ navigation }) => {
  const [userSignUpInformation, setUserSignUpInformation] = useState<userInformationType>({
    username: '',
    email: '',
    password: ''
  });
  const handleOnChange = (name: string, text: string): void => {
    setUserSignUpInformation((prev) => {
      return {
        ...prev,
        [name]: text
      };
    });
  };
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.container}>
        <Text>Sign Up Screen</Text>
        <Input name="username" placeHolder="Username" onChange={handleOnChange} />
        <Input name="email" placeHolder="Email" onChange={handleOnChange} />
        <Input name="password" placeHolder="Password" onChange={handleOnChange} secureTextEntry />
        <Button title="Login" onPress={(): void => navigation.navigate('Login')}></Button>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;
