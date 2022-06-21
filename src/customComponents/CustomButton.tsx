import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function CustomButton(props: any) {
  const {buttonStyle, title, buttonText, onPress} = props;
  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress}>
      <Text style={buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}
