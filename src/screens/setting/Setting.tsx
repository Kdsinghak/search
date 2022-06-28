import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {CustomButton} from '../../customComponents';
import {handleSignOut} from './Action';
export default function Setting() {
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          marginTop: '15%',
          justifyContent: 'flex-start',
          paddingHorizontal: '6%',
        }}>
        <Icon name={'reply'} size={20} />
        <Text>Settings</Text>
      </View>
      <View>
        <CustomButton
          title="Edit Profile"
          buttonStyle={styles.editButtonStyle}
        />
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
    </View>
  );
}

const styles = StyleSheet.create({
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
  editButtonStyle: {
    left: 16,
    height: 52,
    width: '90%',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#bfbfbf',
  },
});
