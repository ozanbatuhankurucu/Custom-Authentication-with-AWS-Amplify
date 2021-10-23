import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    width: width * (9 / 10),
    borderRadius: 5,
    backgroundColor: '#e3e3e3',
    marginVertical: 10
  },
  input: {
    padding: 15
  }
});
