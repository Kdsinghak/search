import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {CustomButton, CustomTextInput} from '../../../customComponents';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>{'Log in'}</Text>
      <CustomTextInput placeholder="jane@example.com" setText={setEmail} />
      <CustomTextInput placeholder="password" setText={setPassword} />
      <CustomButton
        buttonStyle={styles.LoginButon}
        buttonText={styles.buttonText}
        title="LOG IN"
        screen="Home"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  txt: {
    color: 'black',
    position: 'absolute',
    width: 148,
    height: 40,
    left: 16,
    top: 104,
  },
  LoginButon: {
    height: 52,
    width: '90%',
    left: 16,
    top: '45%',
    position: 'absolute',
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
