import React, { Component, useEffect } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, Share, ScrollView } from "react-native";
import { FontAwesome } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons';
import { app } from './base';

const db = app.firestore()

export default function BookmarkedEvents() {

  const [events, setEvents] = React.useState([])

  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'Share this event with your friends.',
      });

    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    const fetchEvents = async () =>{
      const eventsCollection = await db.collection("events").get()
      setEvents(eventsCollection.docs.map(doc => {
        return doc.data()
      }))
    }
    fetchEvents();
  }, [])

  return( 
    <ScrollView style={styles.bookmarksView} >
      {events.map(events => {
        return(

          <View style={styles.bookmarksContainer}>
              <Image style={styles.eventPoster} source={{uri: events.poster}} />
        
              <View style={styles.bookmarkDetails}>
              <Text style={styles.eventTitle}>
                {events.title}
              </Text>

                <TouchableOpacity style={styles.bookmarkIcon}>
                  <FontAwesome name='bookmark' size={20} style={{color: '#E57622'}} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.shareIcon} onPress={onShare} title="Share">
                  <Entypo name="share" size={20} color="black" />
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
          </View>

        );
      })}
    </ScrollView>
  );

  
  
};

const styles = StyleSheet.create({
    bookmarksView:{
        marginTop: 80,
    },
    bookmarksContainer: {
        padding: 8,
        height: 105,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        margin: 15,
        position:'relative',
        elevation: 10,
    },
    bookmarkDetails: {
      position:'absolute',
      marginLeft: 90,
      padding: 15,
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
    bookmarkedHeading: {
        fontSize: 45,
        fontFamily: 'RougeScript_400Regular',
        left: 20,
        color: 'white',
        top: 50,
        color: '#031C34'
    },
    eventHosted: {
      fontSize: 11,
    },
    eventPoster: {
        height: 80,
        margin: 3,
        width: 95,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        position: 'relative'
      },
      eventTitle: {
        left: 12,
        fontWeight: 'bold',
        fontSize: 13,
        marginTop: 5,
        marginBottom: 4,
      },
      eventDate: {
        fontSize: 11,
        left: 12,
        marginRight: 14,
      },
      eventLocation: {
        fontSize: 11,
        marginLeft: 5,
      },
      eventTimings: {
        left: 12,
        fontSize: 11,
        marginRight: 17,
      },
      eventCost: {
        fontWeight: 'bold',
        fontSize: 11,
        color: '#237937',
        marginLeft: 5,
      },
      seperator: {
        backgroundColor: '#031C33',
        width: 4,
        height: 4,
        textAlign: 'center',
        marginTop: 5,
        marginBottom: 9,
        marginHorizontal: 5,
      },
      bookmarkIcon: {
        left: 239,
        position: 'absolute',
        bottom: 0,
      },
      shareIcon: {
        right: 15,
        position: 'absolute',
        bottom: 0,
      }
})
