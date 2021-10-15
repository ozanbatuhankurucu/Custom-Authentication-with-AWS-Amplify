import React, {useState, useEffect} from 'react';
import {Linking, Platform, View, ActivityIndicator, Button} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AppStackNavigator from './appStackNavigator';
import AuthStackNavigator from './authStackNavigator';
import {navigationRef, isReadyRef} from './utils/rootNavigation';

const PERSISTENCE_KEY = 'NAVIGATION_STATE';
const {Screen, Navigator} = createStackNavigator();

const MainNavigator: React.FC = () => {
  const [isReady, setIsReady] = useState(false);
  const [initialState, setInitialState] = useState();
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  useEffect(() => {
    const restoreState = async () => {
      try {
        const initialUrl = await Linking.getInitialURL();

        if (Platform.OS !== 'web' && initialUrl == null) {
          // Only restore state if there's no deep link and we're not on web
          const savedStateString = await AsyncStorage.getItem(PERSISTENCE_KEY);
          const state = savedStateString
            ? JSON.parse(savedStateString)
            : undefined;

          if (state !== undefined) {
            setInitialState(state);
          }
        }
      } finally {
        setIsReady(true);
      }
    };

    if (!isReady) {
      restoreState();
    }
  }, [isReady]);

  React.useEffect(() => {
    return () => {
      isReadyRef.current = false;
    };
  }, []);

  if (!isReady) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <View style={{flex: 1}}>
      <NavigationContainer
        initialState={initialState}
        onStateChange={state =>
          AsyncStorage.setItem(PERSISTENCE_KEY, JSON.stringify(state))
        }
        ref={navigationRef}
        onReady={() => {
          isReadyRef.current = true;
        }}>
        <Navigator>
          {isUserLoggedIn ? (
            <Screen
              name="AppStackNavigator"
              component={AppStackNavigator}
              options={{headerShown: false}}></Screen>
          ) : (
            <Screen
              name="AuthStackNavigator"
              component={AuthStackNavigator}
              options={{headerShown: false}}></Screen>
          )}
        </Navigator>
      </NavigationContainer>
      <Button
        onPress={() => setIsUserLoggedIn(prev => !prev)}
        title="Change auth"></Button>
    </View>
  );
};

export default MainNavigator;
