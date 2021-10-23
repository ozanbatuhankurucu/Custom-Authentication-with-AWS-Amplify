import React, { FC } from 'react';
import { View, TextInput } from 'react-native';
import { InputProps } from './types';
import { styles } from './styles';

const Input: FC<InputProps> = ({ placeHolder, onChange, secureTextEntry, name }) => {
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
};

export default Input;
