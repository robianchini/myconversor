import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  ImageBackground,
  Image,
  View,
  ScrollView
} from 'react-native';

StatusBar.setBarStyle('light-content');

export default class Home extends React.Component {

  render() {

    const background = require('../assets/bg.png');
    const bt1 = require('../assets/bt1.png');
    const bt2 = require('../assets/bt2.png');
    const bt3 = require('../assets/bt3.png');
    const bt4 = require('../assets/bt4.png');
    const bt5 = require('../assets/bt5.png');
    const bt6 = require('../assets/bt6.png');
    const bt7 = require('../assets/bt7.png');
    const bt8 = require('../assets/bt8.png');
    const bt9 = require('../assets/bt9.png');
    const bt10 = require('../assets/bt10.png');

    return (
      <KeyboardAvoidingView enabled={Platform.OS == 'ios'} behavior="padding" style={styles.container}>
        <ImageBackground source={background} style={styles.background}>
          <View style={styles.main}>

            <View style={styles.titleArea}>
              <Text style={styles.title1}>Welcome to</Text>
              <Text style={styles.title}>myConversor</Text>
            </View>
            <ScrollView>
              <View style={styles.buttonsArea}>
                <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate("Currency")}>
                  <Image source={bt1} style={styles.buttonIcon} />
                  <Text style={styles.buttonText}>Dólar para Real</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate("Temperature")}>
                  <Image source={bt2} style={styles.buttonIcon} />
                  <Text style={styles.buttonText}>Temperatura</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate("Fuel")}>
                  <Image source={bt3} style={styles.buttonIcon} />
                  <Text style={styles.buttonText}>Combustível</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate("Area")}>
                  <Image source={bt4} style={styles.buttonIcon} />
                  <Text style={styles.buttonText}>Área</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate("Speed")}>
                  <Image source={bt5} style={styles.buttonIcon} />
                  <Text style={styles.buttonText}>Velocidade</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate("Weight")}>
                  <Image source={bt6} style={styles.buttonIcon} />
                  <Text style={styles.buttonText}>Peso</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate("Purchase")}>
                  <Image source={bt7} style={styles.buttonIcon} />
                  <Text style={styles.buttonText}>Poder de compra</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate("Timezone")}>
                  <Image source={bt8} style={styles.buttonIcon} />
                  <Text style={styles.buttonText}>Fuso horário</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate("Length")}>
                  <Image source={bt9} style={styles.buttonIcon} />
                  <Text style={styles.buttonText}>Comprimento</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate("Volume")}>
                  <Image source={bt10} style={styles.buttonIcon} />
                  <Text style={styles.buttonText}>Volume</Text>
                  {/* FL OZ */}
                </TouchableOpacity>

              </View>
            </ScrollView>
          </View>
        </ImageBackground>
      </KeyboardAvoidingView >
    )
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  main: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },

  titleArea: {
    justifyContent: 'center',
    alignSelf: 'flex-start',
    height: "20%",
    width: '100%',
    paddingTop: 30,
  },

  title1: {
    color: '#fff',
    fontSize: 23,

  },

  title: {
    color: '#fff',
    fontSize: 25,
    fontWeight: "bold",
  },

  buttonsArea: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignSelf: 'center',
    height: "80%",
    width: '100%',
  },

  button: {
    height: 130,
    width: 130,
    borderRadius: 15,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    marginHorizontal: 15,
    marginVertical: 10,

    shadowColor: "#333",
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.09,
    shadowRadius: 2.22,

    elevation: 3,
  },

  buttonIcon: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },

  buttonText: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center'
  },

  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%"
  },

});