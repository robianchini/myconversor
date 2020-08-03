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

export default class Volume extends React.Component {

  state = {
    brUnit: "",
    usUnit: "floz",
    usValue: "",
    brValue: "",
  }

  changeUS = (unit) => {
    const { brUnit, usUnit, usValue, brValue, lb, kg } = this.state;
    this.setState({ usUnit: unit })
    if (unit === 'floz') {
      const us = String(usValue)
      const br = String((usValue / 33.814).toFixed(2));
      this.setState({ usValue: us, brValue: br })
    }

    if (unit === 'gal') {
      const us = String(usValue)
      const br = String((usValue * 3.785).toFixed(2));
      this.setState({ usValue: us, brValue: br })
    }
  }

  render() {
    const brFlag = require('../assets/br.png');
    const euaFlag = require('../assets/eua.png');
    const { usUnit, usValue, brValue, } = this.state;

    return (
      <KeyboardAvoidingView enabled={Platform.OS == 'ios'} behavior="padding" style={styles.container}>
        <TouchableWithoutFeedback style={styles.screen} onPress={Keyboard.dismiss}>
          <View style={styles.topView}>
            <View style={styles.titleBar}>
              <TouchableOpacity style={styles.buttonLeft}>
                <Text style={styles.textButtonLeft} onPress={() => this.props.navigation.navigate("Home")}>Voltar</Text>
              </TouchableOpacity>
              <Text style={styles.title}>Volume</Text>
              <Text style={styles.textButtonRight}>#######</Text>
            </View>
            <View style={styles.line}>
              <Image source={euaFlag} style={styles.flag} />
              <TextInput
                keyboardType="number-pad"
                keyboardAppearance="dark"
                style={styles.topInput}
                value={usValue}
                onChangeText={usValue => {
                  if (usUnit === 'floz') {
                    const us = String(usValue)
                    const br = String((usValue / 33.814).toFixed(2));
                    this.setState({ usValue: us, brValue: br })
                  }

                  if (usUnit === 'gal') {
                    const us = String(usValue)
                    const br = String((usValue / 3.785).toFixed(2));
                    this.setState({ usValue: us, brValue: br })
                  }
                }}
              />
              <View style={styles.selectArea}>
                <TouchableOpacity
                  style={usUnit === 'floz' ? styles.selectedButton : styles.selectButton}
                  onPress={() => { this.changeUS('floz') }}
                >
                  <Text style={styles.selectButtonText}>Fl. Oz</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={usUnit === 'gal' ? styles.selectedButton : styles.selectButton}
                  onPress={() => this.changeUS('gal')}
                >
                  <Text style={styles.selectButtonText}>Gal</Text>
                </TouchableOpacity>
              </View>
              <Text style={styles.topObs}>{usUnit === 'floz' ? "(Onça líquida)" : "(Galões)"}</Text>
            </View>
          </View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.bottomView}>
            <Image source={brFlag} style={styles.flag} />
            <TextInput
              keyboardType="number-pad"
              keyboardAppearance="dark"
              style={styles.bottomInput}
              value={brValue}
              onChangeText={brValue => {
                if (usUnit === 'floz') {
                  const br = String(brValue)
                  const us = String((brValue * 33.814).toFixed(2));
                  this.setState({ usValue: us, brValue: br })
                }
                if (usUnit === 'gal') {
                  const br = String(brValue)
                  const us = String((brValue / 3.785).toFixed(2));
                  this.setState({ usValue: us, brValue: br })
                }
              }}

            />
            <Text style={styles.usFuel}>Litros</Text>
            <Text style={styles.bottomObs}></Text>
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
    backgroundColor: '#2980b9',
  },

  topView: {
    width: '100%',
    height: '50%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 30
  },

  selectArea: {
    flexDirection: "row",
    margin: 15,
  },

  selectButton: {
    width: 100,
    height: 40,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5
  },

  selectedButton: {
    width: 100,
    height: 40,
    backgroundColor: '#3498db',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    margin: 5,
  },

  selectButtonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold'
  },

  titleBar: {
    width: '100%',
    flexDirection: 'row',
    height: 30,
    marginBottom: 30,
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
    color: '#2980b9',
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
    color: "#2980b9",
    borderWidth: 1,
    borderColor: "#2980b9",
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
    color: '#2980b9',
    borderBottomWidth: 1,
    borderBottomColor: '#2980b9',
    marginTop: 10,
  },

  topObs: {
    fontSize: 15,
    color: '#fff',
  },

  bottomObs: {
    fontSize: 15,
    color: '#2980b9',
  },

  flag: {
    width: 30,
    height: 30,
  },

});