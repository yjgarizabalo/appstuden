import React from 'react';
import { 
  StyleSheet,  
  View,
  Text,
  ImageBackground,
  Image 
  } from 'react-native';

import Login from './src/components/login'
import bgLogin from './assets/img/bglogin.jpg'
import Logo from './assets/img/logo.png'

export default class App extends React.Component {
  render() {
    return (
      <ImageBackground source={bgLogin} style={styles.bgContainer}>
        <View style={styles.logoContainer}>
          <Image source={Logo}/>
        </View>
        <View style={styles.textLogoContainer}>
         <Text style={styles.logoText}>El mejor monitor de calificaciones</Text>
        </View>
      
       <Login/>
      </ImageBackground>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  bgContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center', 
  },
  
  logoText: {
    color: '#383838',
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center'
  },

})


