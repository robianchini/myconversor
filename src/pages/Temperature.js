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
  Keyboard
} from 'react-native';

StatusBar.setBarStyle('light-content');

export default class Temperature extends React.Component {

  state = {
    cValue: "",
    fValue: "",
  }

  render() {

    const { cValue, fValue } = this.state;

    return (
      <KeyboardAvoidingView enabled={Platform.OS == 'ios'} behavior="padding" style={styles.container}>
        <TouchableWithoutFeedback style={styles.screen} onPress={Keyboard.dismiss}>
          <View style={styles.topView}>
            <View style={styles.titleBar}>
              <TouchableOpacity style={styles.buttonLeft}>
                <Text style={styles.textButtonLeft} onPress={() => this.props.navigation.navigate("Home")}>Voltar</Text>
              </TouchableOpacity>
              <Text style={styles.title}>Temperatura</Text>
              <Text style={styles.textButtonRight}>#####</Text>
            </View>
            <View style={styles.line}>
              <TextInput
                style={styles.topInput}
                keyboardType="numeric"
                keyboardAppearance="dark"
                value={fValue}
                onChangeText={fValue => {
                  const celsius = String(parseFloat((fValue - 32) * (5 / 9)).toFixed(2)).replace(',', '.');
                  const fahrenheit = String(fValue).replace(",", '.');
                  this.setState({ cValue: celsius, fValue: fahrenheit })
                }}

              />
              <Text style={styles.celsius} >ºF</Text>
            </View>
          </View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.bottomView}>

            <View style={styles.line}>
              <TextInput
                style={styles.bottomInput}
                keyboardType="numeric"
                keyboardAppearance="dark"
                value={cValue}
                onChangeText={cValue => {
                  const celsius = String(cValue).replace(",", '.');
                  const fahrenheit = String(parseFloat((cValue * 1.8) + 32).toFixed(2)).replace(",", '.');
                  this.setState({ cValue: celsius, fValue: fahrenheit })
                }}
              />
              <Text style={styles.fahrenheit} >ºC</Text>
            </View>
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
    backgroundColor: '#E85F36',
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
    color: '#E85F36',
  },

  textButtonLeft: {
    color: "#fff",
    fontSize: 14,
  },

  line: {
    flexDirection: 'row',
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
    width: 120,
    fontSize: 45,
    textAlign: 'center',
  },

  celsius: {
    fontSize: 45,
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

  realCurrency: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#E5212F',
  },

  bottomInput: {
    color: "#E5212F",
    borderWidth: 1,
    borderColor: "#E5212F",
    borderBottomWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    width: 120,
    fontSize: 45,
    textAlign: 'center',
  },

  fahrenheit: {
    fontSize: 45,
    fontWeight: 'bold',
    color: '#E5212F',
  },

});