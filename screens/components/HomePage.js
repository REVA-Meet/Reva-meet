import React, { Component, useEffect } from 'react';
import { StyleSheet, View , Text, Image, TouchableOpacity, ScrollView, Pressable } from 'react-native';
import { 
    useFonts,
    RougeScript_400Regular 
  } from '@expo-google-fonts/rouge-script';

import AppLoading from 'expo-app-loading';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SearchPage from './SearchPage';
import BookmarkedEvents from './BookmarkedEvents'
import AccountPage from './AccountPage'

import { app } from './base';
import AddBookmark from './BookmarkIcon'

// Importing icons
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
const db = app.firestore()

export default function HomePage({ navigation }){

function Home() {

    const eventDetPage =  () => {
        navigation.navigate('EventDetails');
    }
    const calendarPage =  () => {
        navigation.navigate('CalendarPage');
    }

    const [events, setEvents] = React.useState([])

    useEffect(() => {
      const fetchEvents = async () =>{
        const eventsCollection = await db.collection("events").get()
        setEvents(eventsCollection.docs.map(doc => {
          return doc.data()
        }))
      }
      fetchEvents();
    }, [])
    
    return (
        <View style={styles.container}>
            

        <Text style={styles.hello}>
            Hello!
        </Text>

        <Pressable onPress={calendarPage} style={styles.login}>
            <FontAwesome5 name="calendar" size={30} color="#3E5163" />
        </Pressable>

        <View style={styles.categories}>
            <Text style={{margin: 20, fontSize: 20, color: '#E57622', fontWeight: 'bold'}}>Popular</Text>
            <Text style={styles.categoryNames}>Hackathon</Text>
            <Text style={styles.categoryNames}>Talks</Text>
            <Text style={styles.categoryNames}>ML</Text>
        </View>

        {/* Event page  */}

        <ScrollView>

      {events.map(events => {

        return (

          <View style={styles.smallDiv} >

            <Pressable onPress={eventDetPage}>
                <Image style={styles.eventPoster} source={{uri: events.poster}} />
            </Pressable>

            <Text style={styles.eventTitle}>
            {events.title}
            </Text>

            <TouchableOpacity style={styles.bookmarkIcon}>
                <AddBookmark />
            </TouchableOpacity>

            <View style={{flexDirection:'row', flexWrap:'wrap'}}>
              <Text style={styles.eventDate}>
                  {events.date} 
              </Text>
              <Text style={styles.seperator}></Text>
              <Text style={styles.eventHosted}>
                  {events.hosted}
              </Text>
              <Text style={styles.seperator}></Text>
              <Text style={styles.eventLocation}>
                  {events.location}
              </Text>
            </View>

            <View style={{flexDirection:'row', flexWrap:'wrap'}}>
              <Text style={styles.eventTimings}>
                  {events.timings}
              </Text>
              <Text style={styles.seperator}></Text>
              <Text style={styles.eventCost}>
                  {events.cost}
              </Text>
            </View>

          </View>
        );
          
      })}


    </ScrollView>

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
        top: 50,
        right: 20,
    },
    hello: {
        fontSize: 45,
        fontFamily: 'RougeScript_400Regular',
        left: 20,
        color: '#031C33',
        top: 50,
    },
    buttonwhat: {
        top: 50,
        fontSize: 70,

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

    // event page designs

    smallDiv : {
        elevation: 10,
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        margin: 15, 
        color: '#031C33',
      },
      eventPoster: {
        height: 230,
        width: 'auto',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
      },
      eventTitle: {
        position: 'relative',
        left: 12,
        top: 3,
        fontWeight: 'bold',
        fontSize: 16,
        marginTop: 5,
        marginBottom: 4,
      },
      eventDate: {
        left: 12,
        marginRight: 14,
      },
      eventLocation: {
        marginLeft: 5,
      },
      eventTimings: {
        left: 12,
        marginRight: 17,
      },
      eventCost: {
        fontWeight: 'bold',
        color: '#237937',
        marginLeft: 5,
      },
      seperator: {
        backgroundColor: '#031C33',
        width: 4,
        height: 4,
        textAlign: 'center',
        marginTop: 9,
        marginBottom: 9,
        marginHorizontal: 5,
      },
      bookmarkIcon: {
        right: 10,
        position: 'absolute',
        bottom: 10,
    
      }
})