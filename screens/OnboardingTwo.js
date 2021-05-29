import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';


export default function Onboarding({ navigation }) {

    const goHome = () => {
        navigation.navigate('Home');
    }
    const login = () => {
        navigation.navigate('Login');
    }

    return(
        <View>
            <View style={styles.container}>
            </View>
            <Text style={styles.skip} onPress={goHome}>
                    Skip
            </Text>
            <View style={styles.getStarted}>
                <Text style={styles.getStartedText} onPress={login}>
                    Get Started
                </Text>
            </View>

            <Image style={styles.onbImage} source={require('../assets/OnbTwo.png')} />

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
    onbImage: {
        width: 230,
        height: 180,
        position: 'absolute',
        top: 150,
        marginHorizontal: 80,
    },
    getStarted: {
    width: 126,
    height: 55,
    borderRadius: 50,
    backgroundColor: '#EDA772',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 140,
    marginRight: 140,
    bottom: 70,
    elevation: 20,
   },
   getStartedText: {
    fontWeight: '700',
    fontSize: 16,
    color: '#031C33',
   },
    skip: {
        color: 'white',
        position: 'absolute',
        fontSize: 19,
        right: 20,
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