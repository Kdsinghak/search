import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
const {height, width} = Dimensions.get('window');
export default function CustomHeader() {
  const navigation = useNavigation();
  console.log('hgfdxzsADSFhzgdfhdgfh');

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.BackArrow}
        onPress={() => {
          navigation.goBack();
        }}>
        <Icon name="arrowleft" size={40} />
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
    fontWeight: '700',
    position: 'absolute',
  },
});
