import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableHighlight } from "react-native";
import { FlatList } from 'react-native-gesture-handler';
import events from '../EventList.json'

export default class Events extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderEvents = ({ item }) => {
    return(
      <View style={styles.smallDiv}>
        <Image style={styles.eventPoster} source={{uri: item.poster}} />
        <Text style={styles.eventTitle}>
          {item.title}
        </Text>

        <View style={{flexDirection:'row', flexWrap:'wrap'}}>
          <Text style={styles.eventDate}>
              {item.date} 
          </Text>
          <Text style={styles.seperator}></Text>
          <Text style={styles.eventHosted}>
              {item.hosted}
          </Text>
          <Text style={styles.seperator}></Text>
          <Text style={styles.eventLocation}>
              {item.location}
          </Text>
        </View>

        <View style={{flexDirection:'row', flexWrap:'wrap'}}>
          <Text style={styles.eventTimings}>
              {item.timings}
          </Text>
          <Text style={styles.seperator}></Text>
          <Text style={styles.eventCost}>
              {item.cost}
          </Text>
        </View>
      </View>
    )
  }

  render(){
    return(
      <View>
            <FlatList
              data={events}
              renderItem={this.renderEvents}
              keyExtractor={item => item.id}
              contentContainerStyle={{paddingBottom: 200}}
            />
      </View>
          )
    }
};

const styles = StyleSheet.create({
  smallDiv : {
    height: 308,
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
    marginTop: 5,
    marginBottom: 9,
    marginHorizontal: 5,
  },
})