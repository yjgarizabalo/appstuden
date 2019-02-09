import React from 'reacta'
import {StyleSheet, Text, View} from 'react-native'

class Login extends Compounent {
  render() {
    return(
      <View style={styles.Container}>
        <Text>login</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default Login