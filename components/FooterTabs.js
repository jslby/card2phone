import React from 'react';
import { Container, Footer, FooterTab, Button, Icon, Text, Badge } from 'native-base';

export default class FooterTabs extends React.Component {
  constructor(props){
    super(props);

  }
  render(){
    console.log(this.props.screen);
    return (
      <Footer>
        <FooterTab>
          <Button active={(this.props.screen == 'ShopScreen') ? true : false} vertical
            onPress={() => this.props.navigation.navigate("Shop")}>
            <Icon name="apps" />
          </Button>
          <Button active={(this.props.screen == 'CardsScreen') ? true : false} vertical
            onPress={() => this.props.navigation.navigate("Cards")}>>
            <Icon name="card" />
          </Button>
          <Button active={(this.props.screen == 'CameraScreen') ? true : false} vertical
            onPress={() => this.props.navigation.navigate("Camera")}>>
            <Icon active name="camera" />
          </Button>
          <Button active={(this.props.screen == 'MessagesScreen') ? true : false} vertical
            onPress={() => this.props.navigation.navigate("Messages")}>>
            <Icon name="text" />
          </Button>
          <Button active={(this.props.screen == 'ProfileScreen') ? true : false} vertical
            onPress={() => this.props.navigation.navigate("Profile")}>>
            <Icon name="person" />
          </Button>
        </FooterTab>
      </Footer>
    );

    // return (
    //   <Footer>
    //     <FooterTab>
    //       <Button {if (this.props.screen == 'ShopScreen') 'active'} vertical
    //         onPress={() => this.props.navigation.navigate("Shop")}>
    //         <Icon name="apps" />
    //       </Button>
    //       <Button {if (this.props.screen == 'CardsScreen') {'active'}} vertical
    //         onPress={() => this.props.navigation.navigate("Cards")}>>
    //         <Icon name="card" />
    //       </Button>
    //       <Button {if (this.props.screen == 'CameraScreen') {'active'}} vertical
    //         onPress={() => this.props.navigation.navigate("Camera")}>>
    //         <Icon active name="camera" />
    //       </Button>
    //       <Button {if (this.props.screen == 'MessagesScreen') {'active'}} vertical
    //         onPress={() => this.props.navigation.navigate("Messages")}>>
    //         <Icon name="text" />
    //       </Button>
    //       <Button {if (this.props.screen == 'ProfileScreen') {'active'}} vertical
    //         onPress={() => this.props.navigation.navigate("Profile")}>>
    //         <Icon name="person" />
    //       </Button>
    //     </FooterTab>
    //   </Footer>
    // );
  }
}
