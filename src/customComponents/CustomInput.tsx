import React, {useState} from 'react';
import {
  View,
  Animated,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {normalize} from '../utils/dimensions';
import Icon from 'react-native-vector-icons/Ionicons';
export default function CustomTextInput(props: any) {
  const [visible, setVisible] = useState(true);
  const value = useState(new Animated.Value(0))[0];
  const {textInput, secureTextEntry, maxLength} = props;
  const handleVisible = () => {
    setVisible(!visible);
  };

  const handleFocus = () => {
    Animated.timing(value, {
      toValue: 10,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };
  const handleBlur = () => {
    Animated.timing(value, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={textInput}
        onFocus={handleFocus}
        onChangeText={text => {
          props.setText(text);
        }}
        onBlur={handleBlur}
        secureTextEntry={secureTextEntry && visible}
        maxLength={maxLength}
      />

      <Animated.Text
        style={{
          color: '#fc1655',
          alignSelf: 'center',
          position: 'absolute',
          left: 25,

          transform: [
            {
              scale: value.interpolate({
                inputRange: [0, 10],
                outputRange: [1.3, 0.8],
                extrapolate: 'clamp',
              }),
            },
            {
              translateY: value.interpolate({
                inputRange: [0, 10],
                outputRange: [-8, -24],
              }),
            },
            {
              translateX: value.interpolate({
                inputRange: [0, 10],
                outputRange: [-8, -28],
              }),
            },
          ],
        }}>
        {props.placeholder}
      </Animated.Text>

      {secureTextEntry ? (
        <TouchableOpacity style={styles.eyeIcon} onPress={handleVisible}>
          <Icon name={!visible ? 'eye' : 'eye-off'} size={25} color={'white'} />
        </TouchableOpacity>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: normalize(10),
  },
  eyeIcon: {
    top: normalize(24),
    position: 'absolute',
    right: 0,
    width: 50,
    height: 50,
  },
});
