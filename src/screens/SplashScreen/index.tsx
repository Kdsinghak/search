import styles from './style';
import React, {useEffect} from 'react';
import {Image, View} from 'react-native';
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';

export default function SplashScreen() {
  const navigation: any = useNavigation();

  useEffect(() => {
    const suscriber = auth().onAuthStateChanged(user => {
      if (user) {
        setTimeout(() => navigation.navigate('Home', {user}), 1000);
        // console.log(' bfghcfg', user);
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
    </View>
  );
}
