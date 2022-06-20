import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {CustomTextInput, CustomButton} from '../../../customComponents';

export default function SignUp() {
  return (
    <View style={styles.container}>
      <Text>Register</Text>
      <CustomTextInput placeholder="Name" />
      <CustomTextInput placeholder="Email" />
      <CustomTextInput placeholder="Password" />
      <CustomButton
        buttonStyle={styles.RegisterButtonStyle}
        buttonText={styles.RegisterButtonText}
        title="SIGN UP"
        screen="Login"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  RegisterButtonStyle: {
    height: 52,
    width: '90%',
    backgroundColor: 'black',
    left: 16,
    top: '30%',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  RegisterButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
