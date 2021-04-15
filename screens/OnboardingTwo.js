import React from 'react';
import { StyleSheet, View, Text, Linking } from 'react-native';


export default function Onboarding({ navigation }) {

    const goHome = () => {
        navigation.navigate('Home');
    }

    return(
        <View>
            <View style={styles.container}>
            </View>
            <Text style={styles.skip} onPress={goHome}>
                    Skip
            </Text>
            <View style={styles.getStarted}>
                <Text style={styles.getStartedText} onPress={goHome}>
                    Get Started
                </Text>
            </View>
            <View style={styles.firstCard}>
                <Text style={styles.textOne}>
                    Welcome to REVA Meet
                </Text>
                <Text style={styles.textTwo}>
                Organize and register for events in one go
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 510,
        height: 510,
        left: -54,
        top: -44,
        backgroundColor: '#031c33',
        borderBottomLeftRadius: 270,
        borderBottomRightRadius: 300,
    },
    getStarted: {
    width: 120,
    height: 50,
    borderRadius: 50,
    backgroundColor: '#FFA159',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 140,
    marginRight: 140,
    bottom: 70,
   },
   getStartedText: {
    fontWeight: 'bold',
   },
    skip: {
        color: 'white',
        position: 'absolute',
        fontSize: 16,
        right: 30,
        top: 45,
    },
    firstCard: {

    },
    textOne: {
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold'
    },
    textTwo: {
        textAlign: 'center',
        fontSize: 16,
    }
})