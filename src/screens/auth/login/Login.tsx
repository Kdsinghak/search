import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {CustomButton, CustomTextInput} from '../../../customComponents';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import Home from '../../home';
export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation: any = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>{'Log in'}</Text>
      <CustomTextInput placeholder="jane@example.com" setText={setEmail} />
      <CustomTextInput placeholder="password" setText={setPassword} />
      <TouchableOpacity style={styles.forgotPasswordButton}>
        <Text numberOfLines={1} style={styles.forgotPasswordText}>
          Forgot Password?
        </Text>
      </TouchableOpacity>
      <CustomButton
        buttonStyle={styles.LoginButon}
        buttonText={styles.buttonText}
        title="LOG IN"
        onPress={() => {
          navigation.navigate('Home');
        }}
      />
      <View style={styles.socialLoginView}>
        <TouchableOpacity style={styles.socialButton}>
          <Icon name={'google'} size={40} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Icon name={'facebook'} size={40} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  txt: {
    left: 16,
    top: 104,
    width: 148,
    height: 40,
    color: 'black',
    position: 'absolute',
  },
  LoginButon: {
    left: 16,
    height: 52,
    width: '90%',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  forgotPasswordButton: {
    width: '45%',
    marginTop: '50%',
    marginHorizontal: '60%',
    marginBottom: 3,
  },
  forgotPasswordText: {
    color: 'black',
  },
  socialButton: {
    width: '10%',
    marginHorizontal: '10%',
  },
  socialLoginView: {
    flexDirection: 'row',
    padding: 10,
    margin: '1%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
