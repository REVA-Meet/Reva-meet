import React from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 



export default function Onboarding({ navigation }) {

    const pressHandler = () => {
        navigation.navigate('OnboardingTwo');
    }
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

            <Pressable onPress={pressHandler} style={styles.arrowIcon}>
                <AntDesign style={styles.arrowIconBox} name="arrowright" size={30} color="black" />
            </Pressable>

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
    arrowIcon: {
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: '#FFA159',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 160,
    marginRight: 160,
    bottom: 70,
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