import React from 'react';
import { AsyncStorage, StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import Swiper from 'react-native-swiper';
import Display from 'react-native-display';

export default class SwiperScreen extends React.Component {
  static navigationOptions = {
    header: null
  };
  constructor(props){
    super(props);
    this.state = {
      showSwiper: true
    }
  }
  _onMomentumScrollEnd = (e, state, context) => {
    if(state.index == 2){
      this.setState({
        showSwiper: false
      });
      AsyncStorage.setItem('showStart', '1').then((value) => {
         this.props.navigation.navigate("SignIn", {showStart: '1'});
      });
    }


  }
  render() {
    return (
      <Display style={{flex:1}} enable={this.state.showSwiper}>
        <Swiper
          loop={false}
          style={styles.wrapper}
          showsButtons={false}
          dotColor='#888888'
          bounces={true}
          activeDotColor='#ffffff'
          dotStyle={{width: 15, height: 15, borderRadius: 11}}
          activeDotStyle={{width: 15, height: 15, borderRadius: 11}}
          onTouchEnd ={this._onMomentumScrollEnd}
          onIndexChanged={(index) => {
            //if(!index)
            //if(index == 0) ;
          }}>
          <View style={styles.slide}>
            <Image resizeMode="cover" style={styles.image} source={require('../assets/swipe1.jpg')} />
          </View>
          <View style={styles.slide}>
            <Image resizeMode="cover" style={styles.image} source={require('../assets/swipe2.jpg')} />
          </View>
          <View style={styles.slide}>
            <Image resizeMode="cover" style={styles.image} source={require('../assets/swipe3.jpg')} />
          </View>
        </Swiper>
      </Display>
    );
  }
}

var fullWidth = Dimensions.get('window').width;
var fullHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  wrapper: {

  },
  image: {
    width: fullWidth,
    height: fullHeight
  },
  slide: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
})
