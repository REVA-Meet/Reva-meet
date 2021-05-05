import React from 'react';
import { StyleSheet, View , Text, ScrollView } from 'react-native';
import { 
    useFonts,
    RougeScript_400Regular 
  } from '@expo-google-fonts/rouge-script';
import AppLoading from 'expo-app-loading';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Events from './Events';

// Importing icons
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();


function Home({ navigation }) {

 const login = () => {
     navigation.navigate('Login');
 }
    
    return (
        <View style={styles.container}>
            
        <Text style={styles.login} onPress={login}>
            Sign in
        </Text>
        <Text style={styles.hello}>
            Hello!
        </Text>

        <View style={styles.categories}>
            <Text style={{margin: 20, fontSize: 20, color: '#EDA772', fontWeight: 'bold'}}>Popular</Text>
            <Text style={styles.categoryNames}>Hackathon</Text>
            <Text style={styles.categoryNames}>Talks</Text>
            <Text style={styles.categoryNames}>ML</Text>
        </View>

        <Events />

    </View>
    );
}

function Search() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Settings!</Text>
        </View>
      );
}

function Bookmarked() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Bookmarked</Text>
        </View>
      );
}

function Notifications() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Notifications!</Text>
        </View>
      );
}

export default function HomePage(){

    let [fontsLoaded] = useFonts ({
        RougeScript_400Regular
    });


    if (!fontsLoaded) { 
        return <AppLoading /> 
      }    
    else 
    {
    return(
        <Tab.Navigator
            initialRouteName="Home"
            tabBarOptions={{
                activeTintColor: '#ED8F47',
                style: {
                    backgroundColor: '#031c33',
                    height: 53,
                    padding: 10,
                    borderTopWidth: 0,
                }
            }}
        >
        <Tab.Screen 
            name="H" 
            component={Home}
            options={{
                tabBarLabel: '',
                tabBarIcon: ({ color, size }) => (
                    <Entypo name="home" size={34} color={color} />
                ),

            }}
            
        />

        <Tab.Screen 
            name="Settings" 
            component={Search} 
            options={{
                tabBarLabel: '',
                tabBarIcon: ({color, size}) => (
                    <FontAwesome name="search" size={30} color={color} />
                ),
            }}
        />

        <Tab.Screen 
            name="Bookmarked" 
            component={Bookmarked} 
            options={{
                tabBarLabel: '',
                tabBarIcon: ({color, size}) => (
                    <FontAwesome name="bookmark" size={30} color={color} />
                ),
            }}
        />

        <Tab.Screen 
            name="Notifications" 
            component={Notifications} 
            options={{
                tabBarLabel: '',
                tabBarIcon: ({color, size}) => (
                    <MaterialCommunityIcons name="bell" size={30} color={color} />
                ),
            }}
        />
      </Tab.Navigator>
    );
}
}

const styles = StyleSheet.create({
    container: {

        flex: 1,
        backgroundColor: '#031c33',
    },
    login: {
        position: 'absolute',
        top: 50,
        right: 20,
        padding: 10,
        width: 80,
        backgroundColor: '#EDA772',
        borderRadius: 80,
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    hello: {
        fontSize: 45,
        fontFamily: 'RougeScript_400Regular',
        left: 20,
        color: 'white',
        top: 50,
    },
    categories: {
        flexDirection: 'row',
        marginTop: 45,
    },
    categoryNames: {
        margin: 20,
        fontSize: 20,
        color: 'white',
    },
    bottomNavigation: {
        flexDirection: 'row',

    },
})