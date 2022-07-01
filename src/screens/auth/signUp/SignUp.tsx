import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import {CustomTextInput, CustomButton} from '../../../customComponents';
import {normalize} from '../../../utils/dimensions';
import {passwordTest, emailTest} from '../../../utils/regex';
import {useNavigation} from '@react-navigation/native';
import styles from './style';
export default function SignUp() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [confirmPassword, setConfirmPassowrd] = useState('');
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}>
        <Icon name="arrow-left" size={20} color={'white'} />
      </TouchableOpacity>

      <Text style={styles.heading}>Register</Text>
      <View style={styles.TextinputView}>
        <CustomTextInput
          placeholder="Full Name"
          textInput={styles.textInputStyle}
          setText={setName}
        />
        <CustomTextInput
          placeholder="Email"
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
          textInput={styles.textInputStyle}
          setText={setPassword}
          secureTextEntry={true}
        />
        {password.length > 0 ? (
          passwordTest(password) ? (
            <Text>{''}</Text>
          ) : (
            <Text style={styles.errorText}>Enter Valid Passowrd</Text>
          )
        ) : null}
        <CustomTextInput
          placeholder="Confirm Password"
          textInput={styles.textInputStyle}
          setText={setConfirmPassowrd}
        />
        {password === confirmPassword ? (
          <Text>{''}</Text>
        ) : (
          <Text style={styles.errorText}>Password not match</Text>
        )}
        <CustomButton
          buttonStyle={styles.registerButtonStyle}
          title={'Register'}
          buttonText={styles.textButtonName}
        />

        <Text style={styles.descriptionSignUpText}>
          {'By Registering you agree to '}
          <Text style={styles.redDescriptionText}>
            {'Terms & Conditions \n'}
          </Text>
          <Text style={styles.descriptionSignUpText}>{'and '}</Text>
          <Text style={styles.redDescriptionText}>{'Privacy Policy'}</Text>
        </Text>
      </View>
    </View>
  );
}
