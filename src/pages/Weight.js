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

StatusBar.setBarStyle('light-content');

export default class Weight extends React.Component {

  state = {
    kg: "",
    lb: "",
  }

  render() {
    const brFlag = require('../assets/br.png');
    const euaFlag = require('../assets/eua.png');
    const { kg, lb } = this.state;

    return (
      <KeyboardAvoidingView enabled={Platform.OS == 'ios'} behavior="padding" style={styles.container}>
        <TouchableWithoutFeedback style={styles.screen} onPress={Keyboard.dismiss}>
          <View style={styles.topView}>
            <View style={styles.titleBar}>
              <TouchableOpacity style={styles.buttonLeft}>
                <Text style={styles.textButtonLeft} onPress={() => this.props.navigation.navigate("Home")}>Voltar</Text>
              </TouchableOpacity>
              <Text style={styles.title}>Peso</Text>
              <Text style={styles.textButtonRight}>#####</Text>
            </View>
            <View style={styles.line}>
              <Image source={euaFlag} style={styles.flag} />
              <TextInput
                keyboardType="numeric"
                keyboardAppearance="dark"
                style={styles.topInput}
                value={lb}
                onChangeText={lb => {
                  const l = String(lb).replace(",", ".");
                  const k = String((l / 2.205).toFixed(2)).replace(",", ".");
                  this.setState({ lb: l, kg: k })
                }}
              />
              <Text style={styles.brFuel}>Lb</Text>
              <Text style={styles.topObs}>(Libras)</Text>
            </View>
          </View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.bottomView}>
            <Image source={brFlag} style={styles.flag} />
            <TextInput
              keyboardType="numeric"
              keyboardAppearance="dark"
              style={styles.bottomInput}
              value={kg}
              onChangeText={kg => {
                const k = String(kg).replace(",", ".");
                const l = String((k * 2.205).toFixed(2)).replace(",", ".");
                this.setState({ lb: l, kg: k })
              }}

            />
            <Text style={styles.usFuel} >Kg</Text>
            <Text style={styles.bottomObs}>(Quilogramas)</Text>
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
    backgroundColor: '#4F68FE',
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
    color: '#4F68FE',
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

  bottomInput: {
    color: "#ed9407",
    borderWidth: 1,
    borderColor: "#ed9407",
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

  usFuel: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#ed9407',
    borderBottomWidth: 1,
    borderBottomColor: '#ed9407',
    marginTop: 10,
  },

  topObs: {
    fontSize: 15,
    color: '#fff',
  },

  bottomObs: {
    fontSize: 15,
    color: '#ed9407',
  },

  flag: {
    width: 30,
    height: 30,
  },

});