import React from 'react';
import { Text } from 'react-native';
import { styles } from './styles';
import { ErrorTextPropsType } from './types';

export default function ErrorText({ children }: ErrorTextPropsType) {
  return <Text style={styles.errorText}>{children}</Text>;
}
