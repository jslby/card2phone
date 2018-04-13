import React from 'react';
import { StyleSheet, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Container, Footer, FooterTab, Button, Icon, Text, Badge } from 'native-base';

import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';
import ShopScreen from './screens/ShopScreen';
import CardsScreen from './screens/CardsScreen';
import CameraScreen from './screens/CameraScreen';
import MessagesScreen from './screens/MessagesScreen';
import ProfileScreen from './screens/ProfileScreen';
import SwiperScreen from './screens/SwiperScreen';

import FooterTabs from './components/FooterTabs';

const fade = (props) => {
  const {position, scene} = props
  const index = scene.index
  const translateX = 0
  const translateY = 0

  const opacity = position.interpolate({
    inputRange: [index - 0.7, index, index + 0.7],
    outputRange: [0.3, 1, 0.3]
  })

  return {
    opacity,
    transform: [{translateX}, {translateY}]
  }
}

const AppNavigator = StackNavigator({
  SignIn: {screen: SignInScreen},
  SignUp: {screen: SignUpScreen},
  Shop: {screen: ShopScreen},
  Cards: {screen: CardsScreen},
  Camera: {screen: CameraScreen},
  Messages: {screen: MessagesScreen},
  Profile: {screen: ProfileScreen},
  Start: {screen: SwiperScreen},
}, {
  initialRouteName: 'SignIn',
  transitionConfig: () => ({
    screenInterpolator: (props) => {
      return fade(props)
    }
  })
});

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isFirst: 1,
    };
  }

  render() {
    return <AppNavigator/>;
  }
}
