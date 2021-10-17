import React from 'react';
import {View, TextInput, Dimensions, StyleSheet} from 'react-native';

const {width} = Dimensions.get('window');

interface InputProps {
  placeHolder: string;
  onChange: (name: string, value: string) => void;
  secureTextEntry?: boolean;
  name: string;
}

const Input: React.FC<InputProps> = ({
  placeHolder,
  onChange,
  secureTextEntry,
  name,
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeHolder}
        onChangeText={text => onChange(name, text)}
        secureTextEntry={secureTextEntry}></TextInput>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    width: width * (9 / 10),
    borderRadius: 5,
    backgroundColor: '#e3e3e3',
    marginVertical: 10,
  },
  input: {
    padding: 15,
  },
});
