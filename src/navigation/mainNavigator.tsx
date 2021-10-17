import React, {useState, useEffect, createRef, useRef} from 'react';
import {Linking, Platform, View, ActivityIndicator, Button} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {NavigationContainer} from '@react-navigation/native';
import AppStackNavigator from './appStackNavigator';
import AuthStackNavigator from './authStackNavigator';
import {navigationRef, isReadyRef} from './utils/rootNavigation';

const PERSISTENCE_KEY = 'NAVIGATION_STATE';

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

  useEffect(() => {
    return () => {
      // @ts-ignore
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
    <NavigationContainer
      initialState={initialState}
      onStateChange={state => {
        AsyncStorage.setItem(PERSISTENCE_KEY, JSON.stringify(state));
      }}
      ref={navigationRef}
      onReady={() => {
        // @ts-ignore
        isReadyRef.current = true;
      }}>
      {isUserLoggedIn ? <AppStackNavigator /> : <AuthStackNavigator />}
    </NavigationContainer>
  );
};

export default MainNavigator;
