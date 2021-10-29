import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { CustomButtonPropsType } from './types';
import { styles } from './styles';

export default function CustomButton({ title, onPress, disabled }: CustomButtonPropsType) {
  const touchableDisabledStyle = disabled ? styles.disabledContainer : styles.container;
  const textDisabledTextStyle = disabled ? styles.disabledText : styles.text;
  return (
    <TouchableOpacity style={touchableDisabledStyle} onPress={onPress} disabled={disabled}>
      <Text style={textDisabledTextStyle}>{title}</Text>
    </TouchableOpacity>
  );
}
