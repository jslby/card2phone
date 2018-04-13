import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FooterTabs from '../components/FooterTabs';
import { Container, Content } from 'native-base';

export default class CameraScreen extends React.Component {
  static navigationOptions = {
    header: {
      left: null
    }

  };
  render() {
    return (
      <Container>
        <Content>
          <Text>CameraScreen</Text>
        </Content>
        <FooterTabs navigation={this.props.navigation}/>
      </Container>
    );
  }
}
