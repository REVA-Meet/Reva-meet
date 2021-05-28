import React, { Component, useEffect } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView } from "react-native";

import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';


export default function EventDetails({navigation}) {


  return(

        <View style={styles.smallDiv}>
            
            <Image style={styles.posterDetails} source={{uri: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'}} />
            
            
            <Text style={styles.titleDetails}>Global Communication Conference</Text>

            <View style={styles.iconContainer}>
                <View style={styles.iconCalendar}>
                    <FontAwesome5 name="calendar" style={styles.calendar} size={20} color="#3E5163" />
                    <Text style={{fontSize: 12}}>
                        Sat, Apr 24
                    </Text>
                </View>
                <View style={styles.iconLocation}>
                <Ionicons name="location-sharp" style={styles.location} size={22} color="#3E5163" />
                    <Text style={{fontSize: 12}}>
                        CV Raman Block
                    </Text>
                </View>
                <View style={styles.iconTimelapse}>
                    <MaterialIcons name="timelapse" style={styles.timelapse} size={23} color="#3E5163" />
                    <Text style={{fontSize: 12}}>
                        5:30 PM - 6:00 PM
                    </Text>
                </View>
            </View>

            <View style={styles.textContainer}>
                <Text style={styles.aboutText}>
                    About
                </Text>
                <Text style={{fontSize: 12, textAlign: 'justify'}}>
                    International conference is the best place to present your research paper and get it published. 
                    Get the complete details for the upcoming international conferences on Science, Engineering, Technology,
                    Healthcare, Social Science, humanities, and business management here on this page. Every international 
                    conference 2021, in every field, discipline imaginable, that is organized anywhere in the globe, is devised 
                    and planned solely to help dispense the contemporary knowledge, modern practices, and advanced methodologies 
                    that are being generated in each
                </Text>
                <Text style={{color: "#063866", fontSize: 14, marginTop: 2,}}>
                    See more
                </Text>
            </View>

        </View>


  );
}

const styles = StyleSheet.create({
    smallDiv : {
      marginTop: 25,
    },
    posterDetails: {
      height: 230,
      width: 'auto',
    },
    titleDetails: {
        marginTop: 20,
        marginLeft: 20,
        letterSpacing: 0.3,
        fontSize: 18,
        fontWeight: 'bold'
    },
    iconContainer:{
        marginTop: 20,
        padding: 10,
        fontSize: 8,
    },
    iconCalendar:{
        padding: 9,
        flexDirection:'row', 
        flexWrap:'wrap'
    },
    iconLocation:{
        padding: 6,
        flexDirection:'row', 
        flexWrap:'wrap'
    },
    iconTimelapse:{
        padding: 6,
        flexDirection:'row', 
        flexWrap:'wrap',
    },
    calendar: {
        marginRight: 18,
        
    },
    location: {
        marginRight: 15,
    },
    timelapse: {
        marginRight: 15,
    },
    textContainer:{
        marginTop: 20,
        padding: 10,
    }, 
    aboutText: {
        fontSize: 16,
        marginBottom: 8,
    },
    goBack: {
        position: 'absolute',
        top: 5,
        left: 12,
    }
  })