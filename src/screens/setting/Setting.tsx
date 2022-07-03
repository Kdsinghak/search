import React from 'react';
import styles from './style';
import {handleSignOut} from './SettingUtils';
import DeviceInfo from 'react-native-device-info';
import {useNavigation} from '@react-navigation/native';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import {CustomButton, CustomButtom2} from '../../customComponents';

export default function Setting() {
  const navigation = useNavigation();
  const version = DeviceInfo.getVersion();

  return (
    <View style={styles.container}>
      <View style={styles.headerSetting}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name={'arrow-left'} size={20} color={'white'} />
        </TouchableOpacity>
        <Text style={styles.settingHeading}>Settings</Text>
      </View>
      <View style={styles.ButtonView}>
        <CustomButtom2 title="Edit Profile" Button={styles.Button} />
        <CustomButtom2 title="Account Settings" Button={styles.Button} />
      </View>
      <View style={styles.ButtonView}>
        <CustomButtom2 title="Help Center" Button={styles.Button} />
        <CustomButtom2 title="Terms And Privacy" Button={styles.Button} />
      </View>
      <CustomButton
        title="LOGOUT"
        buttonStyle={styles.LoginButon}
        buttonText={styles.buttonText}
        onPress={() => {
          handleSignOut(
            (sucess: any) => {
              console.log('ebfhewbwe', sucess);
            },
            (error: any) => {
              console.log('c hebghvbwehv', error);
            },
          );
        }}
      />
      <View style={styles.appInfoView}>
        <Text style={styles.appInfoText}>Search App - {version}</Text>
        <Text style={styles.appInfoText}>Made with love in India</Text>
      </View>
    </View>
  );
}
