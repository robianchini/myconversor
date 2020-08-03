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
  Image,
  Keyboard,
  TextInput
} from 'react-native';
import moment from 'moment-timezone';
import 'moment/locale/pt-br';
import api from '../services/api';

StatusBar.setBarStyle('light-content');

export default class Currency extends React.Component {

  state = {
    dollarValue: "",
    dollarCotation: "",
    lastUpdate: ""
  }

  componentDidMount() {
    this.loadCurrency();
  }

  loadCurrency = async () => {
    const response = await api.get('json/USD-BRL');
    const dollarCotation = response.data[0].bid;
    const lastUpdate = response.data[0].create_date;
    this.setState({ dollarCotation, lastUpdate })
  }

  render() {

    const { dollarCotation, dollarValue, realValue, lastUpdate } = this.state;
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
              <Text style={styles.title}>Dólar para Real</Text>
              <Text style={styles.textButtonRight}>#####</Text>
            </View>
            <View style={styles.line}>
              <Image source={euaFlag} style={styles.flag} />
              <Text style={styles.dollarCurrency} >US$</Text>
              <TextInput
                keyboardType="numeric"
                keyboardAppearance="dark"
                style={styles.topInput}
                value={dollarValue}
                onChangeText={dollarValue => {
                  const vl = String(dollarValue).replace(',', '.')
                  const real = (dollarCotation * dollarValue).toFixed(2);
                  console.log(vl, real)
                  const realValue = real.replace('.', ',')
                  this.setState({ dollarValue: vl, realValue })
                }}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.bottomView}>
            <Image source={brFlag} style={styles.flag} />
            <Text style={styles.realCurrency}>R$</Text>
            <TextInput
              keyboardType="numeric"
              keyboardAppearance="dark"
              style={styles.bottomInput}
              value={realValue}
              onChangeText={rvalue => {
                const real = String(rvalue).replace(',', '.');
                const dollar = String((rvalue / dollarCotation).toFixed(2));
                const dollarValue = dollar.replace('.', ',');
                this.setState({ realValue: real, dollarValue })
              }}
            />
            <Text style={styles.lastUpdate}>Câbio atualizado em: {moment(lastUpdate).format('LLL')}</Text>
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
    backgroundColor: '#2B81FF',
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
    color: '#2B81FF',
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

  topInput: {
    color: "#fff",
    borderWidth: 1,
    borderColor: "#fff",
    borderBottomWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    width: 250,
    fontSize: 35,
    textAlign: 'center',
  },

  dollarCurrency: {
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

  bottomInput: {
    color: "#00CD6C",
    borderWidth: 1,
    borderColor: "#00CD6C",
    borderBottomWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    width: 250,
    fontSize: 35,
    textAlign: 'center',
    fontSize: 40,
    fontWeight: 'bold',
  },

  realCurrency: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#00CD6C',
    borderBottomWidth: 1,
    borderBottomColor: '#00CD6C',
  },

  flag: {
    width: 30,
    height: 30,
  },

  lastUpdate: {
    marginTop: 20,
    fontSize: 11,
    width: 200,
    textAlign: 'center',
    color: '#00CD6C'
  }

});