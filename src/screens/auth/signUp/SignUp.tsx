import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {CustomTextInput, CustomButton} from '../../../customComponents';
import regex from '../../../utils/regex';
import {handleSignUp} from './action';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
export default function SignUp() {
  const navigation = useNavigation();
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
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Icon name="reply" size={20} style={{marginTop: '20%', left: '5%'}} />
      </TouchableOpacity>
      <Text style={styles.RegisterHeading}>Register</Text>
      <View style={styles.textInputView}>
        <CustomTextInput
          placeholder="Name"
          setText={setName}
          textInput={styles.textInput}
        />
        <CustomTextInput
          placeholder="Email"
          setText={onEnterEmail}
          textInput={styles.textInput}
        />
        <Text style={styles.validEmailText}>
          {email.length > 0
            ? validation(email)
              ? ''
              : ' Enter valid email'
            : null}
        </Text>
        <CustomTextInput
          placeholder="Password"
          setText={onEnterPassword}
          textInput={styles.textInput}
        />
      </View>
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
    width: 148,
    height: 40,
    color: 'black',
    position: 'absolute',
    marginVertical: '30%',
  },
  validEmailText: {
    left: '3.5%',
    color: 'red',
  },
  validPasswordText: {
    left: '4%',
    color: 'red',
  },

  textInput: {
    width: '90%',
    height: 52,
    left: 16,
    borderWidth: 2,
    borderColor: 'black',
    // marginBottom: 20,
    marginVertical: 12,
    padding: 10,
    // backgroundColor: 'red',
  },
  textInputView: {
    marginTop: '20%',
    // backgroundColor: 'red',
  },
});
