import React, {Component} from 'react'
import {
  StyleSheet,
  Text, 
  View,
  TextInput,
  Dimensions,
  TouchableOpacity
} from 'react-native'
import { Ionicons } from '@expo/vector-icons';

const { width: WIDTH } = Dimensions.get('window')

class Login extends React.Component {
  constructor() {
    super()
    this.state = {
      showPass: true,
      press: false
    }
  } 
  showPass = () => {
    if(this.state.press == false) {
      this.setState({showPass: false, press: true})
    }else
     this.setState({showPass: true, press: false})
  } 
  render() {
    return(
      <View  style={styles.containerLogin}>
        <View style={styles.inputContainer}>
            <Ionicons name='ios-person' size={28} color={'#383838'} style={styles.inputIcon}/>
              <TextInput
                style={styles.input}
                placeholder={'Usuario o Email'}
                placeholderTextColor={'#383838'}
                underlineColorAndroid='transparent'
              />
            </View>
    
            <View style={styles.inputContainer}>
            <Ionicons name='md-lock' size={28} color={'#383838'} style={styles.inputIcon}/>
              <TextInput
                style={styles.input}
                placeholder={'Contraseña'}
                secureTextEntry={this.state.showPass}
                placeholderTextColor={'#383838'}
                underlineColorAndroid='transparent'
              />
    
            <TouchableOpacity style={styles.btnEye} onPress={this.showPass.bind(this)}>
              <Ionicons name={this.state.showPass == false ? 'ios-eye' : 'ios-eye-off'} size={26} color={'#383838'}/>
            </TouchableOpacity>
            </View>

            <View style={styles.btnContainer}> 
              <TouchableOpacity style={styles.btnLogin}>
                <Text style={styles.text}>Enviar</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.btnFacebook}>
                <Text style={styles.text}>Iniciar Con Facebook</Text>
              </TouchableOpacity>
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  containerLogin: {
    marginTop: 40,
  },
  inputContainer: {
    marginTop: 10
  },
  
  input: {
    width: WIDTH -55,
    height: 45,
    borderRadius: 6,
    paddingLeft: 45,
    backgroundColor: 'rgba(224, 224, 224, 0.6)',
    color: '#383838',
    marginHorizontal: 25
  },

  inputIcon: {
    position: 'absolute',
    top: 8,
    left: 37
  },
  
  btnEye: {
    position: 'absolute',
    top: 8,
    right: 37 
  },


  btnContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  btnLogin: {
    width: WIDTH -55,
    height: 45,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(137, 228, 173, 0.8)',
    marginTop: 20
  },

  btnFacebook: {
    width: WIDTH -55,
    height: 45,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(59, 89, 152, 0.8)',
    marginTop: 20
  },

  text: {
    color: 'rgba(255, 255, 255, 0.7)',
    textAlign: 'center',
    fontSize: 17
  }

})

export default Login