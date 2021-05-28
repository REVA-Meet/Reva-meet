import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import OnboardingOne from './OnboardingOne';
import OnboardingTwo from './OnboardingTwo';
import Home from './components/HomePage';
import Login from './components/Login';
import EventDetails from './components/EventDetails'
import CalendarPage from './components/CalendarPage'

const screens = {
    OnboardingOne: {
        screen: OnboardingOne,
        navigationOptions: {
            headerShown: false,
          }
    },
    OnboardingTwo: {
        screen: OnboardingTwo,
        navigationOptions: {
            headerShown: false,
          }
    },
    Home: {
        screen: Home,
        navigationOptions: {
            headerShown: false,
          }
    },
    Login: {
        screen: Login,
        navigationOptions: {
            headerShown: false,
          }
    },
    EventDetails: {
        screen: EventDetails,
        navigationOptions: {
            headerShown: true,
            title: 'Global Communication Conference'
          }
    },
    CalendarPage: {
        screen: CalendarPage,
        navigationOptions: {
            headerShown: true,
            title: 'Calendar'
          }
    },
  
}

const OnboardingStack = createStackNavigator(screens);

export default createAppContainer(OnboardingStack);