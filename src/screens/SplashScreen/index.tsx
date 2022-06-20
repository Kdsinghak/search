import styles from './style';
import {Image, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import CustomButton from '../../customComponents/CustomButton';

export default function SplashScreen() {
  const navigation: any = useNavigation();

  // useEffect(() => {
  //   setTimeout(() => {
  //     navigation.navigate(screenNames.home);
  //   }, 2000);
  // }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assests/images/Rectangle.png')}
        style={styles.splashimg}
      />

      <CustomButton
        buttonStyle={styles.loginButton}
        buttonText={styles.loginText}
        title="LOG IN"
        screen="Login"
      />

      <CustomButton
        buttonStyle={styles.registerButton}
        buttonText={styles.registerText}
        title="REGISTER"
        screen="SignUp"
      />
    </View>
  );
}
