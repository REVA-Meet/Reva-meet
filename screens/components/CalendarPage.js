import React, { useState } from 'react';

// import all the components we are going to use
import { SafeAreaView, StyleSheet, View, Dimensions } from 'react-native';

//import EventCalendar component
import EventCalendar from 'react-native-events-calendar';

//get the size of device
let { width } = Dimensions.get('window');

const CalendarPage = () => {
  const [events, setEvents] = useState([
  
    {
      start: '2020-01-01 00:30:00',
      end: '2020-01-02 01:30:00',
      title: 'Reva Hackathon',
      summary: 'An intrauniversity hackathon',
    },
    {
      start: '2020-01-01 01:30:00',
      end: '2020-01-03 02:20:00',
      title: 'Communication Conference',
      summary: 'Register',
    },
    {
      start: '2020-02-01 04:10:00',
      end: '2020-02-04 04:40:00',
      title: 'Engg Expo 2020',
      summary: 'Expoo Vanue not confirm',
    },
  ]);

  const eventClicked = (event) => {
    //On Click oC a event showing alert from here
    alert(JSON.stringify(event));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <EventCalendar
          eventTapped={eventClicked}
          //Function on event press
          events={events}
          //passing the Array of event
          width={width}
          //Container width
          size={60}
          //number of date will render before and after initDate
          //(default is 30 will render 30 day before initDate and 29 day after initDate)
          initDate={'2020-01-01'}
          //show initial date (default is today)
          scrollToFirst
          //scroll to first event of the day (default true)
        />
      </View>
    </SafeAreaView>
  );
};
export default CalendarPage;

const styles = StyleSheet.create({
  container: {

    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
