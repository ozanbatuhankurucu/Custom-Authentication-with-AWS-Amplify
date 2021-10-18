import React, {FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Login: FC = (): React.ReactElement => {
    return (
        <View style={styles.container}>
            <Text>Login Screen</Text>
        </View>
    );
};

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
