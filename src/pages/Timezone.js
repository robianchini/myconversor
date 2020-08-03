import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  TextInput,
  Keyboard,
  Image,
} from 'react-native';

import moment from 'moment-timezone';
import 'moment/locale/pt-br';

StatusBar.setBarStyle('light-content');

export default class Timezone extends React.Component {

  state = {
    currentDate: "",
  }

  componentDidMount() {
    setInterval(() => { this.loadTimezone() }, 1000);
  }

  loadTimezone = async () => {
    const currentDate = new Date;
    this.setState(currentDate)
  }

  render() {

    const { currentDate } = this.state;
    const brFlag = require('../assets/br.png');
    const euaFlag = require('../assets/eua.png');

    return (
      <KeyboardAvoidingView enabled={Platform.OS == 'ios'} behavior="padding" style={styles.container}>
        <TouchableWithoutFeedback style={styles.screen} onPress={Keyboard.dismiss}>
          <View style={styles.topView}>
            <View style={styles.titleBar}>
              <TouchableOpacity style={styles.buttonLeft}>
                <Text style={styles.textButtonLeft} onPress={() => this.props.navigation.navigate("Home")}>Voltar</Text>
              </TouchableOpacity>
              <Text style={styles.title}>Fuso Horário</Text>
              <Text style={styles.textButtonRight}>#####</Text>
            </View>
            <View style={styles.line}>
              {/* <Text>Horário nos Estados Unidos</Text> */}
              <Image source={euaFlag} style={styles.flag} />
              <Text style={styles.topTime}>{moment().tz('America/Detroit').format('LTS')}</Text>
              < Text style={styles.topObs} > {moment().tz('America/Detroit').format('ll')}</Text>
            </View>
          </View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.bottomView}>
            {/* <Text>Horário nos Estados Unidos</Text> */}
            <Image source={brFlag} style={styles.flag} />
            <Text style={styles.bottomTime}>{moment().tz('America/Sao_Paulo').format('LTS')}</Text>
            <Text style={styles.bottomObs}>{moment().tz('America/Sao_Paulo').format('ll')}</Text>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView >
    )
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#DA4A54',
  },

  topView: {
    width: '100%',
    height: '50%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 30
  },

  titleBar: {
    width: '100%',
    flexDirection: 'row',
    height: 30,
    marginBottom: 70,
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  title: {
    color: "#fff",
    fontSize: 16,
    fontWeight: 'bold',
  },

  buttonLeft: {
    paddingLeft: 10,
    height: 15,
    width: 60,
  },

  textButtonRight: {
    color: '#DA4A54',
  },

  textButtonLeft: {
    color: "#fff",
    fontSize: 14,
  },

  line: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: 300
  },

  topTime: {
    color: "#fff",
    borderColor: "#fff",
    width: 250,
    fontSize: 45,
    textAlign: 'center',
    fontWeight: 'bold',
  },

  brFuel: {
    marginTop: 10,
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
  },

  bottomView: {
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    height: '50%',
    paddingTop: 60,
  },

  bottomTime: {
    color: "#3FA77D",
    width: 250,
    fontSize: 45,
    textAlign: 'center',
    fontWeight: 'bold',
  },

  usFuel: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#3FA77D',
    borderBottomWidth: 1,
    borderBottomColor: '#3FA77D',
    marginTop: 10,
  },

  topObs: {
    fontSize: 15,
    color: '#fff',
  },

  bottomObs: {
    fontSize: 15,
    color: '#3FA77D',
  },

  flag: {
    width: 30,
    height: 30,
  },

});