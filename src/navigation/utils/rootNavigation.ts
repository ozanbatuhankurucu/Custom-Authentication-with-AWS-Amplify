import { createRef } from 'react';
import { CommonActions, NavigationContainerRef } from '@react-navigation/native';
import { RootStackParamList } from '@/configs';

export const isReadyRef = createRef();

export const navigationRef = createRef<NavigationContainerRef>();

export function navigate<RouteName extends keyof RootStackParamList>(
  name: RouteName,
  params?: RootStackParamList[RouteName]
): void {
  if (isReadyRef.current && navigationRef.current) {
    // Perform navigation if the app has mounted
    navigationRef.current.navigate(name, params);
  }
}

export const goBack = (): void => {
  if (isReadyRef.current && navigationRef.current) {
    navigationRef.current.dispatch(CommonActions.goBack());
  }
};
