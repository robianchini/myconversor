import React from 'react';
import { TextInputMask } from 'react-native-masked-text'
import { Entypo } from '@expo/vector-icons';

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
  Alert
} from 'react-native';

import api from '../services/api';

StatusBar.setBarStyle('light-content');

export default class Purchase extends React.Component {

  state = {
    dollarValue: "",
    dollarSM: 7.25,
    dollarHT: "",
    realValue: "",
    realSM: 4.75, //220h semanais
    realHT: "",
  }

  render() {
    const brFlag = require('../assets/br.png');
    const euaFlag = require('../assets/eua.png');
    const { dollarValue, dollarSM, dollarHT, realValue, realSM, realHT } = this.state;

    return (
      <KeyboardAvoidingView enabled={Platform.OS == 'ios'} behavior="padding" style={styles.container}>
        <TouchableWithoutFeedback style={styles.screen} onPress={Keyboard.dismiss}>
          <View style={styles.topView}>
            <View style={styles.titleBar}>
              <TouchableOpacity style={styles.buttonLeft}>
                <Text style={styles.textButtonLeft} onPress={() => this.props.navigation.navigate("Home")}>Voltar</Text>
              </TouchableOpacity>
              <Text style={styles.title}>Poder de compra</Text>
              <Text
                style={styles.textButtonRight}
                onPress={() => { Alert.alert("O Poder de Compra representa quantas horas o cidadão deve trabalhar para comprar o produto do valor indicado. O salário mínimo por hora nos EUA é de US$" + dollarSM + ", no Brasil, o valor da hora trabalhada é de R$ " + realSM + " considerando o salário mínimo de R$" + (realSM * 220) + " e a jornada de 220 horas mensais.") }}
              >
                <Entypo name="help-with-circle" size={20} color="white" />
              </Text>
            </View>
            <View style={styles.line}>
              {/* <Text style={styles.dollarCurrency} >US$</Text> */}
              <Image source={euaFlag} style={styles.flag} />
              <Text style={styles.dollarTitle} >Valor do produto em dólares</Text>
              <TextInput
                keyboardType="numeric"
                keyboardAppearance="dark"
                style={styles.topInput}
                value={dollarValue}
                onChangeText={dollarValue => {
                  const dollar = dollarValue.replace(',', '.')
                  const ht = (dollarValue / dollarSM).toFixed(2);
                  const dollarHT = ht.replace('.', ',')
                  this.setState({ dollarValue: dollar, dollarHT })
                }}
              />
              <Text style={styles.dollarResp} >{dollarHT} horas de trabalho</Text>
            </View>
          </View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.bottomView}>
            <Image source={brFlag} style={styles.flag} />
            <Text style={styles.realTitle} >Valor do produto em reais</Text>
            {/* <Text style={styles.realCurrency}>R$</Text> */}
            <TextInput
              keyboardType="numeric"
              keyboardAppearance="dark"
              style={styles.bottomInput}
              value={realValue}
              onChangeText={realValue => {
                const real = realValue.replace(',', '.')
                const ht = (realValue / realSM).toFixed(2);
                const realHT = ht.replace('.', ',')
                this.setState({ realValue: real, realHT })
              }}
            />
            <Text style={styles.realResp}>{realHT} horas de trabalho</Text>
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
    color: '#fff',
    paddingRight: 10,
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
    fontSize: 45,
    textAlign: 'center',
  },

  dollarCurrency: {
    marginLeft: 20,
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
    fontSize: 45,
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

  dollarTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },

  realTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#00CD6C',
  },

  dollarResp: {
    fontSize: 16,
    color: '#fff',
    marginTop: 15
  },

  realResp: {
    fontSize: 16,
    color: '#00CD6C',
    marginTop: 15
  },

  flag: {
    width: 30,
    height: 30,
  },

});