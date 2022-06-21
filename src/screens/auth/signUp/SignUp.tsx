import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {CustomTextInput, CustomButton} from '../../../customComponents';
import regex from '../../../utils/regex';
import {handleSignUp} from './action';

export default function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [Password, setPassword] = useState('');

  const onEnterPassword = (password: string) => {
    setPassword(password);
  };

  const onEnterEmail = (email: string) => {
    setEmail(email);
  };

  const validation = (text: string) => {
    switch (text) {
      case email:
        return regex.emailRegex.test(text);
      case Password:
        return regex.passwordRegex.test(text);

      default:
        break;
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.RegisterHeading}>Register</Text>
      <CustomTextInput placeholder="Name" setText={setName} />
      <CustomTextInput placeholder="Email" setText={onEnterEmail} />
      <Text style={styles.validEmailText}>
        {email.length > 0
          ? validation(email)
            ? ''
            : ' Enter valid email'
          : null}
      </Text>
      <CustomTextInput placeholder="Password" setText={onEnterPassword} />
      <Text style={styles.validPasswordText}>
        {Password.length > 0
          ? validation(Password)
            ? ''
            : 'Enter valid Passowrd'
          : null}
      </Text>
      <CustomButton
        buttonStyle={styles.RegisterButtonStyle}
        buttonText={styles.RegisterButtonText}
        title="SIGN UP"
        onPress={() => {
          handleSignUp(
            email,
            Password,
            (sucessCallBack: any) => {
              console.log(sucessCallBack);
            },
            (failureCallBack: any) => {
              console.log(failureCallBack);
            },
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  RegisterButtonStyle: {
    left: 16,
    top: '30%',
    height: 52,
    width: '90%',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  RegisterButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  RegisterHeading: {
    left: 16,
    top: 104,
    width: 148,
    height: 40,
    color: 'black',
    position: 'absolute',
  },
  validEmailText: {
    top: '18%',
    left: '3.5%',
    color: 'red',
  },
  validPasswordText: {
    top: '18%',
    left: '4%',
    color: 'red',
  },
});
function sucessCallBack(
  email: string,
  Password: string,
  sucessCallBack: any,
  failureCallBack: any,
) {
  throw new Error('Function not implemented.');
}

function failureCallBack(
  email: string,
  Password: string,
  sucessCallBack: (
    email: string,
    Password: string,
    sucessCallBack: any,
    failureCallBack: any,
  ) => void,
  failureCallBack: any,
) {
  throw new Error('Function not implemented.');
}
