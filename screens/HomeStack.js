import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import OnboardingOne from './OnboardingOne';
import OnboardingTwo from './OnboardingTwo';
import Home from './components/HomePage';
import Login from './components/Login';

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
  
}

const OnboardingStack = createStackNavigator(screens);

export default createAppContainer(OnboardingStack);