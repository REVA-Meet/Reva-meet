import React, { Component, useEffect } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { FlatList } from 'react-native-gesture-handler';
import { app } from './base';
import AddBookmark from './BookmarkIcon'

const db = app.firestore()


export default function Events() {

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

  

  return(
    <ScrollView>

      {events.map(events => {

        return (

          <View style={styles.smallDiv}>
            <Image style={styles.eventPoster} source={{uri: events.poster}} />
            
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
  );

}


const styles = StyleSheet.create({
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