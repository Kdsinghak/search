import styles from '../login/style';
import React, {useState} from 'react';
import {Images} from '../../../utils';
import {useNavigation} from '@react-navigation/native';
import {emailSignin, googleSignIn} from './LoginUtils';
import Icon from 'react-native-vector-icons/FontAwesome';
import {passwordTest, emailTest} from '../../../utils/regex';
import {View, Text, Image, TouchableOpacity, Alert} from 'react-native';
import {CustomTextInput, CustomButton} from '../../../customComponents';

export default function Login() {
  var isDisable = true;
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleNavigation = () => {
    navigation.navigate('SignUp');
  };

  const handleSignIn = (type: string) => {
    switch (type) {
      case 'google':
        return googleSignIn(
          (sucess: any) => {
            Alert.alert('sign In Sucessfull');
          },
          (error: any) => {
            console.log(error);
          },
        );
      case 'Email SignIn':
        return emailSignin(
          email,
          password,
          (sucess: any) => {
            Alert.alert('Login Sucess Full');
          },
          (error: any) => {
            Alert.alert(error);
          },
        );
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageView}>
        <Image source={Images.Logo} style={styles.logoStyle} />
      </View>
      <View style={styles.TextinputView}>
        <CustomTextInput
          setText={setEmail}
          placeholder="Email ID"
          textInput={styles.textInputStyle}
        />
        {email.length > 0 ? (
          emailTest(email) ? (
            <Text>{''}</Text>
          ) : (
            <Text style={styles.errorText}>Enter Valid Email</Text>
          )
        ) : null}
        <CustomTextInput
          maxLength={20}
          placeholder="Password"
          setText={setPassword}
          secureTextEntry={true}
          textInput={[styles.textInputStyle, {marginTop: '8%'}]}
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
        title="Login"
        isDisable={isDisable}
        buttonText={styles.buttonText}
        buttonStyle={styles.loginButton}
        onPress={() => handleSignIn('Email SignIn')}
      />
      <View style={styles.socialButtonView}>
        <TouchableOpacity onPress={() => handleSignIn('google')}>
          <Icon name="google" size={30} color={'#fc1655'} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="facebook" size={30} color={'#fc1655'} />
        </TouchableOpacity>
      </View>
      <Text style={styles.RegisterTextStyle}>
        Don't have an account?
        <Text style={styles.registerButtonStyle} onPress={handleNavigation}>
          Register Now
        </Text>
      </Text>
    </View>
  );
}
