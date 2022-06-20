import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {CustomText, CustomButton} from '../../../customComponents';

export default function Login() {
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>Log in</Text>
      <CustomText placeholder="jane@example.com" />
      <CustomText placeholder="password" />
      <CustomButton
        buttonStyle={styles.LoginButon}
        buttonText={styles.buttonText}
        title="LOG IN"
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
    top: '50%',
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
