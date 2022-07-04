import React, {useState} from 'react';
import {View, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {normalize} from '../utils/dimensions';
export default function CustomTextInput(props: any) {
  const {textInput, secureTextEntry, maxLength} = props;
  const [visible, setVisible] = useState(true);

  const handleVisible = () => {
    setVisible(!visible);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={textInput}
        placeholderTextColor="white"
        placeholder={props.placeholder}
        onChangeText={text => {
          props.setText(text);
        }}
        secureTextEntry={secureTextEntry && visible}
        maxLength={maxLength}
      />
      <TouchableOpacity onPress={handleVisible}>
        {secureTextEntry ? (
          <Icon
            name={!visible ? 'eye' : 'eye-off'}
            size={25}
            color={'white'}
            style={styles.eyeIcon}
          />
        ) : null}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  eyeIcon: {
    top: normalize(35),
    right: normalize(50),
  },
});
