import {View, Text, StyleSheet, TextInput} from 'react-native';
import React from 'react';

export default function CustomText(props: any) {
  return (
    <View>
      <TextInput style={styles.textInput} placeholder={props.placeholder} />
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    width: 343,
    height: 52,
    left: 16,
    borderWidth: 2,
    borderColor: 'black',
    top: 176,
    marginBottom: 10,
    padding: 10,
  },
});
