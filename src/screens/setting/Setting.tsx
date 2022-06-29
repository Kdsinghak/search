import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {CustomButton, CustomButtom2} from '../../customComponents';
import {handleSignOut} from './Action';
import {useNavigation} from '@react-navigation/native';

export default function Setting() {
  const navigation = useNavigation();

  return (
    <View>
      <View style={styles.headerSetting}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name={'reply'} size={20} />
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
        <Text>Search App - 3.33.3.0</Text>
        <Text>Made with love in India</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerSetting: {
    flexDirection: 'row',
    marginTop: '15%',
    justifyContent: 'flex-start',
    paddingHorizontal: '6%',
  },
  LoginButon: {
    left: 16,
    height: 52,
    width: '90%',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    marginVertical: '15%',
  },
  settingHeading: {
    marginHorizontal: '10%',
    fontSize: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },

  Button: {
    backgroundColor: '#737373',
    flexDirection: 'row',
    height: 50,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: '6%',
    marginVertical: 2,
  },
  ButtonView: {
    marginTop: '10%',
  },
  appInfoView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
