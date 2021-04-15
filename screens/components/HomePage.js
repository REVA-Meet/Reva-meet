import React from 'react';
import { StyleSheet, View , Text } from 'react-native';


export default function HomePage({ navigation }){

    const handleLogin = () => {
        navigation.navigate('Login');
    }

    return(
        <View style={styles.container}>
            <Text>
                Hello, this is the home page.
            </Text>
            <Text onPress={handleLogin}>
                Login
                </Text>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    }
})