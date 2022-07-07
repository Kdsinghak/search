import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  Keyboard,
  Alert,
  StyleSheet,
} from 'react-native';
import React from 'react';
import {colors} from '../utils';
import {propsType} from '../modal';
import styles from '../screens/home/style';
import {useNavigation} from '@react-navigation/native';
import callingAPI from '../action/callingAPI';
export default function SearchResultFlatlist(props: any) {
  const navigation: any = useNavigation();
  const {data, offset, loding, search} = props.data;
  const {dispatch} = props;

  const onendPage = () => {
    console.log('page end');
    Keyboard.dismiss();
    dispatch({type: 'loding', payload: {loding: true}});
    callingAPI.getApi(
      search,
      offset,
      (Details: Array<[]>) => {
        dispatch({type: 'offset', payload: {offset: offset + 10}});
        dispatch({type: 'loding', payload: {loding: false}});

        offset === 0
          ? dispatch({type: 'data', payload: {data: [...Details]}})
          : dispatch({
              type: 'data',
              payload: {data: [...data, ...Details]},
            });
      },
      (error: string) => {
        Alert.alert(error);
      },
    );
  };

  const renderItem = ({item, index}: {item: propsType; index: number}) => {
    let color = colors[index % colors.length];
    // console.log('call call');
    return (
      <TouchableOpacity
        style={[styles.Card, {backgroundColor: color}]}
        onPress={() => {
          navigation.navigate('Profile', {item, color: color});
        }}>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <View
          style={[
            styles.imageContainer,
            {backgroundColor: colors[(index % colors.length) / 2]},
          ]}>
          <Image
            source={{uri: item.images.original.url}}
            style={styles.cardImg}
          />
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={stylew.container}>
      <FlatList
        //   ref={listRef}
        data={data}
        renderItem={renderItem}
        onEndReachedThreshold={0.5}
        onEndReached={!loding ? onendPage : null}
        keyExtractor={(item, index) => `${item.id}${index.toString()}`}
      />
    </View>
  );
}

const stylew = StyleSheet.create({
  container: {
    flex: 1,
  },
});
