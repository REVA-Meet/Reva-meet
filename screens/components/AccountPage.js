import React, { Component, useEffect } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, Share, ScrollView } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

export default function AccountPage() {

  
  return( 
    <View style={styles.accountContainer} >

      <View style={styles.userDiv}>
        <Text style={styles.userName}>
          Suhana
        </Text>
        <MaterialCommunityIcons name="pencil" size={21} style={styles.editUserName} />
      </View>

      <View style={styles.profileContainer}>
        
        <TouchableOpacity style={styles.profileSettings}>
          <Text>
            Notifications
          </Text>
          <Text style={styles.notificationCount}>
            1
          </Text>
          <MaterialIcons name="arrow-forward-ios" size={15} style={styles.forwardArrow} />
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.profileSettings}>
          <Text>
            Tickets
          </Text>
          <MaterialIcons name="arrow-forward-ios" size={15} style={styles.forwardArrow} />
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.profileSettings}>
          <Text>
            Manage Events 
          </Text>
          <MaterialIcons name="arrow-forward-ios" size={15} style={styles.forwardArrow} />
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.profileSettings}>
          <Text>
            Settings
          </Text>
          <MaterialIcons name="arrow-forward-ios" size={15} style={styles.forwardArrow} />
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.profileSettings}>
          <Text>
            Help
          </Text>
          <MaterialIcons name="arrow-forward-ios" size={15} style={styles.forwardArrow} />
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.profileSettings}>
          <Text>
            Feedback
          </Text>
          <MaterialIcons name="arrow-forward-ios" size={15} style={styles.forwardArrow} />
        </TouchableOpacity>
        

      </View>

    </View>
  );

  
  
};

const styles = StyleSheet.create({
    accountContainer:{
        marginTop: 80,
    },
    userName: {
      color: 'rgba(62, 81, 99, 0.7)',
      fontSize: 24,
      fontWeight: '700',
      letterSpacing: 0.7,
    },
    userDiv:{
      marginLeft: 20,
      flexDirection:'row', 

    },
    editUserName: {
      color: '#000000',
      margin: 5,
    },
    profileContainer: {
      marginTop: 25,
      marginHorizontal: 20,
    },
    profileSettings: {
      margin: 10,
      color: '#323232',
      backgroundColor: '#E8E8E8',
      padding: 15,
      borderRadius: 10,
      flexDirection: 'row'
    },
    forwardArrow:{
      marginTop: 15,
      color: '#323232',
      marginLeft: 300,
      position: 'absolute'
    },
    notificationCount: {
      width: 18,
      height: 18,
      position: 'absolute',
      marginLeft: 275,
      marginTop: 13,
      backgroundColor: '#E72B2B',
      color: '#FFFFFF',
      borderRadius: 100,
      fontSize: 12,
      fontWeight: 'bold',
      textAlign: 'center'
    }
})
