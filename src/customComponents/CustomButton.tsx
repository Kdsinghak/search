import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

export default function CustomButton(props: any) {
  const {buttonStyle, title, buttonText, onPress, idDisable} = props;
  console.log('dfhgj');

  return (
    <TouchableOpacity
      style={buttonStyle}
      onPress={onPress}
      disabled={idDisable}>
      <Text style={buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}
