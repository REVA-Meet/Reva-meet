import React from 'react';
import { StyleSheet, View , Text, ScrollView } from 'react-native';
import { 
    useFonts,
    RougeScript_400Regular 
  } from '@expo-google-fonts/rouge-script';

import AppLoading from 'expo-app-loading';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SearchPage from './SearchPage';
import Events from './Events';
import BookmarkedEvents from './BookmarkedEvents'
import AccountPage from './AccountPage'

// Importing icons
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();


function Home() {

    
    return (
        <View style={styles.container}>
            

        <Text style={styles.hello}>
            Hello!
        </Text>

        <View style={styles.categories}>
            <Text style={{margin: 20, fontSize: 20, color: '#E57622', fontWeight: 'bold'}}>Popular</Text>
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
        <View style={styles.searchContainer}>

            <Text style={styles.categoriesHeading}>
                Categories
            </Text>

            <SearchPage />
        </View>
      );
}

function Bookmarked() {
    return (
        <View style={styles.bookmarkContainerMain}>


        <Text style={styles.bookmarkHeading}>
            Bookmarks
        </Text>

        <BookmarkedEvents />

    </View>
      );
}

function Account() {
    return (
        <View style={styles.accountContainerMain}>

        <Text style={styles.bookmarkHeading}>
            Profile
        </Text>
          
          <AccountPage />
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
                inactiveTintColor: 'rgba(3, 28, 52, 0.75)',
                style: {
                    backgroundColor: '#F0F0F0',
                    height: 53,
                    padding: 10,
                    borderTopWidth: 0,
                }
            }}
        >
        <Tab.Screen 
            name="Home" 
            component={Home}
            options={{
                tabBarLabel: '',
                tabBarIcon: ({ color, size }) => (
                    <Entypo name="home" size={33} color={color} />
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
            name="Account" 
            component={Account} 
            options={{
                tabBarLabel: '',
                tabBarIcon: ({color, size}) => (
                    <MaterialCommunityIcons name="account" size={38} color={color} />
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
        backgroundColor: '#FFFFFF',
    },
    bookmarkContainerMain: {
        backgroundColor: '#E8E8E8',
        height: 2000,
    },
    login: {
        position: 'absolute',
        top: 55,
        right: 20,
        padding: 8,
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
        color: '#031C33',
        top: 50,
    },
    bookmarkHeading: {
        fontSize: 45,
        fontFamily: 'RougeScript_400Regular',
        left: 20,
        color: '#031C34',
        top: 50,
    },
    categoriesHeading: {
        fontSize: 45,
        fontFamily: 'RougeScript_400Regular',
        left: 20,
        color: '#031C34',
        top: 50,
    },
    categories: {
        flexDirection: 'row',
        marginTop: 45,
    },
    categoryNames: {
        margin: 20,
        fontSize: 20,
        color: '#031C34',
        fontWeight: 'bold'
    },
    bottomNavigation: {
        flexDirection: 'row',

    },
})