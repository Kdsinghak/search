import React from 'react';
import {View, TextInput} from 'react-native';

export default function CustomTextInput(props: any) {
  const {textInput, secureTextEntry} = props;

  return (
    <View>
      <TextInput
        style={textInput}
        placeholderTextColor="white"
        placeholder={props.placeholder}
        onChangeText={text => {
          props.setText(text);
          console.log(' jhbdfjhefbwe', text);
        }}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
}
