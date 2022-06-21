import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import Icons from 'react-native-vector-icons/Feather';
export default function CustomTextInput(props: any) {
  let secured = false;
  if (props.placeholder === 'password') secured = true;

  return (
    <View>
      <TextInput
        style={styles.textInput}
        placeholder={props.placeholder}
        onChangeText={text => {
          props.setText(text);
          console.log(' jhbdfjhefbwe', text);
        }}
        secureTextEntry={secured}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    width: '90%',
    height: 52,
    left: 16,
    borderWidth: 2,
    borderColor: 'black',
    top: 176,
    marginBottom: 30,
    padding: 10,
  },
});
