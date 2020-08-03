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
  Alert,
} from 'react-native';

StatusBar.setBarStyle('light-content');

export default class Length extends React.Component {

  state = {
    brUnit: "m",
    brIndex: "",
    usUnit: "inches",
    usDesc: "Polegadas",
    usValue: "",
    brValue: "",
  }

  changeUS = (unit, desc) => {
    const { brUnit, usUnit, usValue, brValue, usDesc, brIndex } = this.state;
    this.setState({ usUnit: unit, usDesc: desc })
    if (usUnit === 'inches' && brUnit === 'cm') { this.inchesToCm(usValue) };
    if (usUnit === 'feets' && brUnit === 'cm') { this.feetsToCm(usValue) };
    if (usUnit === 'yards' && brUnit === 'cm') { this.yardsToCm(usValue) };
    if (usUnit === 'miles' && brUnit === 'cm') { this.milesToCm(usValue) };
    if (usUnit === 'inches' && brUnit === 'm') { this.inchesToM(usValue) };
    if (usUnit === 'feets' && brUnit === 'm') { this.feetsToM(usValue) };
    if (usUnit === 'yards' && brUnit === 'm') { this.yardsToM(usValue) };
    if (usUnit === 'miles' && brUnit === 'm') { this.milesToM(usValue) };
    if (usUnit === 'inches' && brUnit === 'km') { this.inchesToKm(usValue) };
    if (usUnit === 'feets' && brUnit === 'km') { this.feetsToKm(usValue) };
    if (usUnit === 'yards' && brUnit === 'km') { this.yardsToKm(usValue) };
    if (usUnit === 'miles' && brUnit === 'km') { this.milesToKm(usValue) };
  }


  changeBR = (unit, index) => {
    const { brUnit, usUnit, usValue, brValue, usDesc, brIndex } = this.state;
    this.setState({ brUnit: unit, brIndex: index })
    if (usUnit === 'inches' && brUnit === 'cm') { this.cmToInches(brValue) };
    if (usUnit === 'feets' && brUnit === 'cm') { this.cmToFeets(brValue) };
    if (usUnit === 'yards' && brUnit === 'cm') { this.cmToYards(brValue) };
    if (usUnit === 'miles' && brUnit === 'cm') { this.cmToMiles(brValue) };
    if (usUnit === 'inches' && brUnit === 'm') { this.mToInches(brValue) };
    if (usUnit === 'feets' && brUnit === 'm') { this.mToFeets(brValue) };
    if (usUnit === 'yards' && brUnit === 'm') { this.mToYards(brValue) };
    if (usUnit === 'miles' && brUnit === 'm') { this.mToMiles(brValue) };
    if (usUnit === 'inches' && brUnit === 'km') { this.kmToInches(brValue) };
    if (usUnit === 'feets' && brUnit === 'km') { this.kmToFeets(brValue) };
    if (usUnit === 'yards' && brUnit === 'km') { this.kmToYards(brValue) };
    if (usUnit === 'miles' && brUnit === 'km') { this.kmToMiles(brValue) };
  }




  inchesToCm = (usValue) => {
    const us = String(usValue).replace(",", ".");
    const br = String((usValue * 2.54).toFixed(2)).replace(",", ".");
    this.setState({ usValue: us, brValue: br });
  }
  feetsToCm = usValue => {
    const us = String(usValue)
    const br = String((usValue * 30.48).toFixed(2));
    this.setState({ usValue: us, brValue: br });
  }
  yardsToCm = (usValue) => {
    const us = String(usValue)
    const br = String((usValue * 91.44).toFixed(2));
    this.setState({ usValue: us, brValue: br });
  }
  milesToCm = (usValue) => {
    const us = String(usValue)
    const br = String((usValue * 160934).toFixed(2));
    this.setState({ usValue: us, brValue: br });
  }
  inchesToM = (usValue) => {
    const us = String(usValue).replace(",", ".");
    const br = String((usValue / 39.37).toFixed(2)).replace(",", ".");
    this.setState({ usValue: us, brValue: br });
  }
  feetsToM = (usValue) => {
    const us = String(usValue)
    const br = String((usValue / 3.281).toFixed(2));
    this.setState({ usValue: us, brValue: br });
  }
  yardsToM = (usValue) => {
    const us = String(usValue)
    const br = String((usValue / 1.094).toFixed(2));
    this.setState({ usValue: us, brValue: br });
  }
  milesToM = (usValue) => {
    const us = String(usValue)
    const br = String((usValue * 1609).toFixed(2));
    this.setState({ usValue: us, brValue: br });
  }
  inchesToKm = (usValue) => {
    const us = String(usValue).replace(",", ".");
    const br = String((usValue / 39370).toFixed(2)).replace(",", ".");
    this.setState({ usValue: us, brValue: br })
  }
  feetsToKm = (usValue) => {
    const us = String(usValue)
    const br = String((usValue / 3281).toFixed(2));
    this.setState({ usValue: us, brValue: br })
  }
  yardsToKm = (usValue) => {
    const us = String(usValue)
    const br = String((usValue / 1094).toFixed(2));
    this.setState({ usValue: us, brValue: br })
  }
  milesToKm = (usValue) => {
    const us = String(usValue)
    const br = String((usValue * 1.609).toFixed(2));
    this.setState({ usValue: us, brValue: br })
  }
  cmToInches = (brValue) => {
    const br = String(brValue).replace(",", ".");
    const us = String((brValue / 2.54).toFixed(2)).replace(",", ".");
    this.setState({ usValue: us, brValue: br })
  }
  cmToFeets = (brValue) => {
    const br = String(brValue)
    const us = String((brValue / 30.48).toFixed(2));
    this.setState({ usValue: us, brValue: br })
  }
  cmToYards = (brValue) => {
    const br = String(brValue)
    const us = String((brValue / 91.44).toFixed(2));
    this.setState({ usValue: us, brValue: br })
  }
  cmToMiles = (brValue) => {
    const br = String(brValue)
    const us = String((brValue / 160934).toFixed(2));
    this.setState({ usValue: us, brValue: br })
  }

  mToInches = (brValue) => {
    const br = String(brValue).replace(",", ".");
    const us = String((brValue * 39.37).toFixed(2)).replace(",", ".");
    this.setState({ usValue: us, brValue: br })
  }
  mToFeets = (brValue) => {
    const br = String(brValue)
    const us = String((brValue * 3.281).toFixed(2));
    this.setState({ usValue: us, brValue: br })
  }
  mToYards = (brValue) => {
    const br = String(brValue)
    const us = String((brValue * 1.094).toFixed(2));
    this.setState({ usValue: us, brValue: br })
  }
  mToMiles = (brValue) => {
    const br = String(brValue)
    const us = String((brValue / 1609).toFixed(2));
    this.setState({ usValue: us, brValue: br })
  }

  kmToInches = (brValue) => {
    const br = String(brValue).replace(",", ".");
    const us = String((brValue * 39370).toFixed(2)).replace(",", ".");
    this.setState({ usValue: us, brValue: br })
  }
  kmToFeets = (brValue) => {
    const br = String(brValue)
    const us = String((brValue * 3281).toFixed(2));
    this.setState({ usValue: us, brValue: br })
  }
  kmToYards = (brValue) => {
    const br = String(brValue)
    const us = String((brValue * 1094).toFixed(2));
    this.setState({ usValue: us, brValue: br })
  }
  kmToMiles = (brValue) => {
    const br = String(brValue)
    const us = String((brValue / 1.609).toFixed(2));
    this.setState({ usValue: us, brValue: br })
  }


  render() {
    const brFlag = require('../assets/br.png');
    const euaFlag = require('../assets/eua.png');
    const { brUnit, usUnit, usValue, brValue, usDesc, brIndex } = this.state;

    return (
      <KeyboardAvoidingView enabled={Platform.OS == 'ios'} behavior="padding" style={styles.container}>
        <TouchableWithoutFeedback style={styles.screen} onPress={Keyboard.dismiss}>
          <View style={styles.topView}>
            <View style={styles.titleBar}>
              <TouchableOpacity style={styles.buttonLeft}>
                <Text style={styles.textButtonLeft} onPress={() => this.props.navigation.navigate("Home")}>Voltar</Text>
              </TouchableOpacity>
              <Text style={styles.title}>Comprimento</Text>
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
                  //CENTRIMETROS
                  if (usUnit === 'inches' && brUnit === 'cm') { this.inchesToCm(usValue) };
                  if (usUnit === 'feets' && brUnit === 'cm') { this.feetsToCm(usValue) };
                  if (usUnit === 'yards' && brUnit === 'cm') { this.yardsToCm(usValue) };
                  if (usUnit === 'miles' && brUnit === 'cm') { this.milesToCm(usValue) };
                  //METROS
                  if (usUnit === 'inches' && brUnit === 'm') { this.inchesToM(usValue) };
                  if (usUnit === 'feets' && brUnit === 'm') { this.feetsToM(usValue) };
                  if (usUnit === 'yards' && brUnit === 'm') { this.yardsToM(usValue) };
                  if (usUnit === 'miles' && brUnit === 'm') { this.milesToM(usValue) };
                  //QUILOMETROS
                  if (usUnit === 'inches' && brUnit === 'km') { this.inchesToKm(usValue) };
                  if (usUnit === 'feets' && brUnit === 'km') { this.feetsToKm(usValue) };
                  if (usUnit === 'yards' && brUnit === 'km') { this.yardsToKm(usValue) };
                  if (usUnit === 'miles' && brUnit === 'km') { this.milesToKm(usValue) };
                }}
              />
              <View style={styles.selectArea}>
                <TouchableOpacity
                  style={usUnit === 'inches' ? styles.selectedButton : styles.selectButton}
                  onPress={() => { this.changeUS('inches', 'Polegadas') }}
                >
                  <Text style={styles.selectButtonText}>Inches</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={usUnit === 'feets' ? styles.selectedButton : styles.selectButton}
                  onPress={() => this.changeUS('feets', 'Pés')}
                >
                  <Text style={styles.selectButtonText}>Feets</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={usUnit === 'yards' ? styles.selectedButton : styles.selectButton}
                  onPress={() => this.changeUS('yards', 'Jardas')}
                >
                  <Text style={styles.selectButtonText}>Yards</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={usUnit === 'miles' ? styles.selectedButton : styles.selectButton}
                  onPress={() => this.changeUS('miles', 'Milhas')}
                >
                  <Text style={styles.selectButtonText}>Miles</Text>
                </TouchableOpacity>
              </View>
              <Text style={styles.topObs}>({usDesc})</Text>
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
                //CENTIMETROS
                if (usUnit === 'inches' && brUnit === 'cm') { this.cmToInches(brValue) };
                if (usUnit === 'feets' && brUnit === 'cm') { this.cmToFeets(brValue) };
                if (usUnit === 'yards' && brUnit === 'cm') { this.cmToYards(brValue) };
                if (usUnit === 'miles' && brUnit === 'cm') { this.cmToMiles(brValue) };
                // METROS
                if (usUnit === 'inches' && brUnit === 'm') { this.mToInches(brValue) };
                if (usUnit === 'feets' && brUnit === 'm') { this.mToFeets(brValue) };
                if (usUnit === 'yards' && brUnit === 'm') { this.mToYards(brValue) };
                if (usUnit === 'miles' && brUnit === 'm') { this.mToMiles(brValue) };
                // QUILOMETROS
                if (usUnit === 'inches' && brUnit === 'km') { this.kmToInches(brValue) };
                if (usUnit === 'feets' && brUnit === 'km') { this.kmToFeets(brValue) };
                if (usUnit === 'yards' && brUnit === 'km') { this.kmToYards(brValue) };
                if (usUnit === 'miles' && brUnit === 'km') { this.kmToMiles(brValue) };
              }}

            />
            <View style={styles.selectArea}>
              <TouchableOpacity
                style={brUnit === 'cm' ? styles.selectedButtonBr : styles.selectButtonBr}
                onPress={() => { this.changeBR('cm', 100) }}
              >
                <Text style={styles.selectButtonTextBr}>Cm</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={brUnit === 'm' ? styles.selectedButtonBr : styles.selectButtonBr}
                onPress={() => this.changeBR('m', 1)}
              >
                <Text style={styles.selectButtonTextBr}>M</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={brUnit === 'km' ? styles.selectedButtonBr : styles.selectButtonBr}
                onPress={() => this.changeBR('km', 1000)}
              >
                <Text style={styles.selectButtonTextBr}>Km</Text>
              </TouchableOpacity>

            </View>
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
    backgroundColor: '#ED6337',
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
    width: 80,
    height: 40,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 3,
  },

  selectedButton: {
    width: 80,
    height: 40,
    backgroundColor: '#CE3C0D',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    margin: 3,
  },

  selectButtonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold'
  },

  selectButtonBr: {
    width: 80,
    height: 40,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 3,
  },

  selectedButtonBr: {
    width: 80,
    height: 40,
    backgroundColor: '#90f0dc',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    margin: 3,
  },

  selectButtonTextBr: {
    color: '#409182',
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
    color: '#ED6337',
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
    color: "#67B7A7",
    borderWidth: 1,
    borderColor: "#67B7A7",
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
    color: '#67B7A7',
    borderBottomWidth: 1,
    borderBottomColor: '#67B7A7',
    marginTop: 10,
  },

  topObs: {
    fontSize: 15,
    color: '#fff',
  },

  bottomObs: {
    fontSize: 15,
    color: '#67B7A7',
  },

  flag: {
    width: 30,
    height: 30,
  },

});