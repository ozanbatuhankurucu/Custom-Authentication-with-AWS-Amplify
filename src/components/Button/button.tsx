import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { CustomButtonProps } from './types';
import { styles } from './styles';

export default function CustomButton({ title, onPress }: CustomButtonProps) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}
