import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function CustomButton(props: any) {
  const navigation: any = useNavigation();

  const {buttonStyle, title, buttonText, screen} = props;
  return (
    <TouchableOpacity
      style={buttonStyle}
      onPress={() => {
        navigation.navigate(screen);
      }}>
      <Text style={buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}
