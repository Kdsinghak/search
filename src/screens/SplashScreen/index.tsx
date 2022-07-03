import styles from './style';
import {Image, View} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import CustomButton from '../../customComponents/CustomButton';
import auth from '@react-native-firebase/auth';

export default function SplashScreen() {
  const navigation: any = useNavigation();

  useEffect(() => {
    const suscriber = auth().onAuthStateChanged(user => {
      if (user) {
        setTimeout(() => navigation.navigate('Home'), 1000);
      } else {
        setTimeout(() => navigation.navigate('Login'), 1000);
      }
    });
    return suscriber;
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assests/images/logo.png')}
        style={styles.splashimg}
      />

      {/* <CustomButton
        buttonStyle={styles.loginButton}
        buttonText={styles.loginText}
        title="LOG IN"
        onPress={() => {
          navigation.navigate('Login');
        }}
      />

      <CustomButton
        buttonStyle={styles.registerButton}
        buttonText={styles.registerText}
        title="REGISTER"
        onPress={() => {
          navigation.navigate('SignUp');
        }}
      /> */}
    </View>
  );
}
