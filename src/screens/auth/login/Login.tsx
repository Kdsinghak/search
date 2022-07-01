import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {Images} from '../../../utils';
import {CustomTextInput, CustomButton} from '../../../customComponents';
import {passwordTest, emailTest} from '../../../utils/regex';
import Icon from 'react-native-vector-icons/FontAwesome';
import {handleSignin, googleSignIn} from './LoginUtils';
import styles from '../login/style';
import {useNavigation} from '@react-navigation/native';
export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isDisable, setDisable] = useState(true);
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.imageView}>
        <Image source={Images.Logo} style={styles.logoStyle} />
      </View>
      <View style={styles.TextinputView}>
        <CustomTextInput
          placeholder="Email ID"
          textInput={styles.textInputStyle}
          setText={setEmail}
        />
        {email.length > 0 ? (
          emailTest(email) ? (
            <Text>{''}</Text>
          ) : (
            <Text style={styles.errorText}>Enter Valid Email</Text>
          )
        ) : null}
        <CustomTextInput
          placeholder="Password"
          textInput={[styles.textInputStyle, {marginTop: '8%'}]}
          setText={setPassword}
          secureTextEntry={true}
        />
        {password.length > 0 ? (
          passwordTest(password) ? (
            <Text>{''}</Text>
          ) : (
            <Text style={styles.errorText}>Enter Valid Password</Text>
          )
        ) : null}
      </View>
      <Text style={styles.forgotPasswordStyle}>Forgot Password?</Text>

      <CustomButton
        buttonStyle={styles.loginButton}
        title="Login"
        buttonText={styles.buttonText}
        isDisable={isDisable}
        onPress={() =>
          handleSignin(
            email,
            password,
            (sucess: any) => {
              console.log(sucess);
            },
            (error: any) => {
              console.log(error);
            },
          )
        }
      />
      <View style={styles.socialButtonView}>
        <TouchableOpacity
          onPress={() =>
            googleSignIn(
              (sucess: any) => {
                console.log(sucess);
              },
              (error: any) => {
                console.log(error);
              },
            )
          }>
          <Icon name="google" size={30} color={'#fc1655'} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="facebook" size={30} color={'#fc1655'} />
        </TouchableOpacity>
      </View>
      <Text style={styles.RegisterTextStyle}>
        Don't have an account?
        <Text
          style={styles.registerButtonStyle}
          onPress={() => navigation.navigate('SignUp')}>
          {' '}
          Register Now
        </Text>
      </Text>
    </View>
  );
}
