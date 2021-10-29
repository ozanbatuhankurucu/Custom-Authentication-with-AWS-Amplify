import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Auth } from 'aws-amplify';
import { Button } from '@/components';
import { RootStackParamList, APP_SCREEN } from '@/configs';
import { StackScreenProps } from '@react-navigation/stack';

const Home = (props: StackScreenProps<RootStackParamList, APP_SCREEN.HOME>) => {
  const { route } = props;
  const {
    user: { username },
    setShowSpinner,
    setUser
  } = route.params;

  function signOut() {
    setShowSpinner(true);
    Auth.signOut()
      .then(() => {
        setUser(null);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setShowSpinner(false);
      });
  }

  return (
    <View style={styles.container}>
      <Text>Welcome {username}</Text>
      <Button title="Sign out" onPress={signOut}></Button>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
