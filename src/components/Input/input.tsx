import React from 'react';
import { View, TextInput } from 'react-native';
import { InputProps } from './types';
import { styles } from './styles';

export default function Input({ placeHolder, onChange, secureTextEntry, name }: InputProps) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeHolder}
        onChangeText={(text) => onChange(name, text)}
        secureTextEntry={secureTextEntry}
      ></TextInput>
    </View>
  );
}
