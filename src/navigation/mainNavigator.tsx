/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useState, useEffect } from 'react';
import { Linking, Platform, View, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer, NavigationState } from '@react-navigation/native';
import AppStackNavigator from './appStackNavigator';
import AuthStackNavigator from './authStackNavigator';
import { navigationRef, isReadyRef } from './utils/rootNavigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const PERSISTENCE_KEY = 'NAVIGATION_STATE';

const MainNavigator: React.FC = () => {
  const [isReady, setIsReady] = useState(false);
  const [initialState, setInitialState] = useState<NavigationState | undefined>();
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  useEffect(() => {
    const restoreState = async (): Promise<void> => {
      try {
        const initialUrl = await Linking.getInitialURL();
        if (Platform.OS !== 'web' && initialUrl == null) {
          AsyncStorage.getItem(PERSISTENCE_KEY)
            .then((stateString: string | null): void => {
              if (stateString) {
                const state = JSON.parse(stateString);
                setInitialState(state);
              }
            })
            .catch((err) => console.log(err));
        }
      } catch (err) {
        console.log(err);
      } finally {
        setIsReady(true);
      }
    };

    if (!isReady) {
      void restoreState();
    }
  }, [isReady]);

  useEffect(() => {
    return () => {
      // @ts-ignore
      isReadyRef.current = false;
    };
  }, []);

  const onChangeState = (state: NavigationState | undefined): void => {
    AsyncStorage.setItem(PERSISTENCE_KEY, JSON.stringify(state)).catch((err) => console.log(err));
  };

  if (!isReady) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer
        initialState={initialState}
        onStateChange={onChangeState}
        ref={navigationRef}
        onReady={() => {
          // @ts-ignore
          isReadyRef.current = true;
        }}
      >
        {isUserLoggedIn ? <AppStackNavigator /> : <AuthStackNavigator />}
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default MainNavigator;
