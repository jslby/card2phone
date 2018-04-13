import React from 'react';
import { Container, Footer, FooterTab, Button, Icon, Text, Badge } from 'native-base';

export default class FooterTabs extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <Footer>
        <FooterTab>
          <Button vertical
            onPress={() => this.props.navigation.navigate("Shop")}>
            <Icon name="apps" />
          </Button>
          <Button vertical
            onPress={() => this.props.navigation.navigate("Cards")}>>
            <Icon name="card" />
          </Button>
          <Button active vertical
            onPress={() => this.props.navigation.navigate("Camera")}>>
            <Icon active name="camera" />
          </Button>
          <Button vertical
            onPress={() => this.props.navigation.navigate("Messages")}>>
            <Icon name="text" />
          </Button>
          <Button vertical
            onPress={() => this.props.navigation.navigate("Profile")}>>
            <Icon name="person" />
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}
