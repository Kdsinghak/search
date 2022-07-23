import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
const {height, width} = Dimensions.get('window');
import Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
export default function CustomHeader() {
  const navigation = useNavigation();

  const handleNavigation = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.BackArrow} onPress={handleNavigation}>
        <Icon name="arrowleft" size={40} color={'#ffffff'} />
      </TouchableOpacity>
      <Text style={styles.headerText}>Detail</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: height / 10,
    flexDirection: 'row',
  },
  BackArrow: {
    left: 5,
    bottom: 0,
    width: width / 7,
    position: 'absolute',
  },
  headerText: {
    left: 155,
    bottom: 2,
    fontSize: 30,
    color: '#ffffff',
    fontWeight: '700',
    position: 'absolute',
  },
});
