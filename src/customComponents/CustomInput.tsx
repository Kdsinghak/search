import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import Icons from 'react-native-vector-icons/Feather';
export default function CustomTextInput(props: any) {
  console.log('njdbwhf', props);
  const {textInput} = props;
  // let secured = false;
  // if (props.placeholder === 'password') secured = true;

  return (
    <View>
      <TextInput
        style={textInput}
        placeholder={props.placeholder}
        onChangeText={text => {
          props.setText(text);
          console.log(' jhbdfjhefbwe', text);
        }}
        // secureTextEntry={secured}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
