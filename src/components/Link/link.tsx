import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { LinkPropsTpe } from './types';
import { styles } from './styles';

export default function Link({ text, onPress, customStyle }: LinkPropsTpe) {
  return (
    <TouchableOpacity style={customStyle} onPress={onPress}>
      <Text style={styles.textColor}>{text}</Text>
    </TouchableOpacity>
  );
}
