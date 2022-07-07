import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';

export default function CustomButtom2(props: any) {
  console.log('sfdfgchvjbnkm');

  const {title, Button} = props;
  return (
    <TouchableOpacity>
      <View style={Button}>
        <Text>{title}</Text>
        <Icon name="right" size={20} />
      </View>
    </TouchableOpacity>
  );
}
