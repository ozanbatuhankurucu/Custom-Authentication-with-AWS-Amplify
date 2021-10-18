import React, {createRef, useRef} from 'react';
import {CommonActions, NavigationContainerRef} from '@react-navigation/native';

export const isReadyRef = createRef();

export const navigationRef = createRef<NavigationContainerRef>();

export function navigate(name: string, params: Object) {
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
