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
  Image
} from 'react-native';

StatusBar.setBarStyle('light-content');

export default class Area extends React.Component {

  state = {
    sqFt: "",
    m2: "",
  }

  render() {
    const brFlag = require('../assets/br.png');
    const euaFlag = require('../assets/eua.png');
    const { sqFt, m2 } = this.state;

    return (
      <KeyboardAvoidingView enabled={Platform.OS == 'ios'} behavior="padding" style={styles.container}>
        <TouchableWithoutFeedback style={styles.screen} onPress={Keyboard.dismiss}>
          <View style={styles.topView}>
            <View style={styles.titleBar}>
              <TouchableOpacity style={styles.buttonLeft}>
                <Text style={styles.textButtonLeft} onPress={() => this.props.navigation.navigate("Home")}>Voltar</Text>
              </TouchableOpacity>
              <Text style={styles.title}>Área</Text>
              <Text style={styles.textButtonRight}>#####</Text>
            </View>
            <View style={styles.line}>
              <Image source={euaFlag} style={styles.flag} />
              <TextInput
                keyboardType="number-pad"
                keyboardAppearance="dark"
                style={styles.topInput}
                value={sqFt}
                onChangeText={sqFt => {
                  const s = String(sqFt);
                  const m = String((s / 10.764).toFixed(2));
                  this.setState({ sqFt: s, m2: m })
                }}
              />
              <Text style={styles.brFuel}>ft²</Text>
              <Text style={styles.topObs}>(square feet)</Text>
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
              value={m2}
              onChangeText={m2 => {
                const m = String(m2)
                const s = String((m * 10.764).toFixed(1));
                this.setState({ sqFt: s, m2: m })
              }}

            />
            <Text style={styles.usFuel} >m²</Text>
            <Text style={styles.bottomObs} >(metros quadrados)</Text>
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
    backgroundColor: '#579ED6',
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
    color: '#579ED6',
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
    color: "#544D54",
    borderWidth: 1,
    borderColor: "#544D54",
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
    color: '#544D54',
    borderBottomWidth: 1,
    borderBottomColor: '#544D54',
    marginTop: 10,
  },

  topObs: {
    fontSize: 15,
    color: '#fff',
  },

  bottomObs: {
    fontSize: 15,
    color: '#544D54',
  },

  flag: {
    width: 30,
    height: 30,
  },


});