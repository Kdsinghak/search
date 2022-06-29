import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

export default function CustomButton(props: any) {
  const {buttonStyle, title, buttonText, onPress} = props;
  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress}>
      <Text style={buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}
