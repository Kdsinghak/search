import styles from './style';
import {Image} from 'react-native';
import React, {useEffect} from 'react';
import screenNames from '../../utils/screenNames';
import {useNavigation} from '@react-navigation/native';


export default function SplashScreen() {
  const navigation:any = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate(screenNames.home);
    }, 2000);
  }, []);

  return (
    <Image
      source={require('../../assests/images/splashimg.jpeg')}
      style={styles.splashimg}
    />
  );
}

