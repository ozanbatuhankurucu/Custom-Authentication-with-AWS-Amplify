/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useState, useEffect } from 'react';
import { Linking, Platform, View, ActivityIndicator } from 'react-native';
import { Auth } from 'aws-amplify';
import Spinner from 'react-native-loading-spinner-overlay';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer, NavigationState } from '@react-navigation/native';
import AppStackNavigator from './appStackNavigator';
import AuthStackNavigator from './authStackNavigator';
import { navigationRef, isReadyRef } from './utils/rootNavigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import type { User } from './types';
const PERSISTENCE_KEY = 'NAVIGATION_STATE';

const MainNavigator: React.FC = () => {
  const [isReady, setIsReady] = useState(false);
  const [initialState, setInitialState] = useState<NavigationState | undefined>();
  const [user, setUser] = useState<User | null>(null);
  const [showSpinner, setShowSpinner] = useState<boolean>(true);
  const [isReadyUser, setIsReadyUser] = useState(false);

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

  useEffect(() => {
    void getCurrentUser();
  }, []);

  const onChangeState = (state: NavigationState | undefined): void => {
    AsyncStorage.setItem(PERSISTENCE_KEY, JSON.stringify(state)).catch((err) => console.log(err));
  };

  const getCurrentUser = async () => {
    try {
      const currentUser = await Auth.currentAuthenticatedUser();
      if (currentUser) {
        setUser({
          attributes: currentUser.attributes,
          username: currentUser.username
        });
      } else {
        setUser(null);
      }
    } catch (error) {
      setUser(null);
      console.log(error);
    } finally {
      setShowSpinner(false);
      setIsReadyUser(true);
    }
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
        <Spinner visible={showSpinner} />
        {isReadyUser ? (
          user ? (
            <AppStackNavigator setShowSpinner={setShowSpinner} user={user} setUser={setUser} />
          ) : (
            <AuthStackNavigator setShowSpinner={setShowSpinner} setUser={setUser} />
          )
        ) : null}
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default MainNavigator;
