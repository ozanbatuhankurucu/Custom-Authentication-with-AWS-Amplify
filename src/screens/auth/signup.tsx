import React, { FC, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Input } from '@/components';
// TODOOzan type ayri bir ts dosyasina tasinacak.
type userInformationType = {
  username: string;
  email: string;
  password: string;
};

const SignUp: FC = () => {
  const [userInformation, setuserInformation] = useState<userInformationType>({
    username: '',
    email: '',
    password: ''
  });
  const handleOnChange = (name: string, text: string): void => {
    setuserInformation((prev) => {
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
      </View>
    </SafeAreaView>
  );
};

export default SignUp;
// TODOOzan style ayri bir ts dosyasina tasinacak.
const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
