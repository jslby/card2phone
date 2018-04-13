import React from 'react';
import { AsyncStorage, StyleSheet, Text, View, TextInput } from 'react-native';
import FooterTabs from '../components/FooterTabs';
import { Container, Content } from 'native-base';
import { TextInputMask } from 'react-native-masked-text';

export default class SignInScreen extends React.Component {

  static navigationOptions = ({navigation}) => {
    return {
      title: 'Вход',
      headerTitleStyle: {
        fontSize: 16,
        color: '#000'
      },
      headerStyle: {
        backgroundColor: '#ffffff',
        borderBottomWidth: 1,
        borderColor: '#000000'
      }
    }
  }

  constructor(props){
    super(props);
    this.state = {
      phone: '',
      code: '',
    }
  }

  componentDidMount = () => {
    // AsyncStorage.getItem('showStart').then((value) => {
    //   if(value == null){
    //     this.props.navigation.navigate("Start");
    //   }
    // });
  }

  render() {
    return (
      <Container style={{marginTop: 10}}>
        <Content>
          <TextInputMask
            type={'custom'}
            options={{
              mask: '+7 (999) 999 99 99'
            }}
            placeholder="Телефон"
            style={styles.input}
            onChangeText={(phone) => this.setState({phone})}
            value={this.state.phone}/>
          <TextInput
            placeholder="Код подтверждения"
            style={styles.input}
            onChangeText={(code) => this.setState({code})}
            value={this.state.code}/>
          <Text style={styles.paragraph}>
            На указаный вами номер телефона придёт смс-сообщение с кодом подтверждения
          </Text>
          </Content>
        <FooterTabs navigation={this.props.navigation}/>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  paragraph: {
    fontSize: 15,
    color: '#5c5c5c',
    textAlign: 'center',
    paddingTop: 10,
    paddingBottom: 10,
  },
  input: {
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#fff',
    height: 50,
    fontSize: 16,
    borderColor: '#a0a0a0',
    borderBottomWidth: 1
  }
})
