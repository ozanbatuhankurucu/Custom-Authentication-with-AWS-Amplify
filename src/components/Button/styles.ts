import { StyleSheet } from 'react-native';

const commonStyles = StyleSheet.create({
  commonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8
  }
});

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    ...commonStyles.commonContainer
  },
  disabledContainer: {
    backgroundColor: '#cccccc',
    ...commonStyles.commonContainer
  },
  text: {
    color: '#fff',
    fontWeight: 'bold'
  },
  disabledText: {
    color: '#666666'
  }
});
