import {
  View,
  Text,
  Alert,
  Image,
  FlatList,
  Keyboard,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, {forwardRef} from 'react';
import {colors} from '../utils';
import {propsType} from '../modal';
import styles from '../screens/home/style';
import callingAPI from '../action/callingAPI';
import {useNavigation} from '@react-navigation/native';

const SearchResultFlatlist = forwardRef((props: any, ref) => {
  console.log(props);
  const {dispatch} = props;
  const navigation: any = useNavigation();
  const {data, offset, loding, search} = props.data;

  const onendPage = () => {
    Keyboard.dismiss();
    dispatch({type: 'loding', payload: {loding: true}});
    callingAPI.getApi(
      search,
      offset,
      (Details: Array<[]>) => {
        dispatch({type: 'loding', payload: {loding: false}});
        dispatch({type: 'offset', payload: {offset: offset + 10}});

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
        data={data}
        renderItem={renderItem}
        onEndReachedThreshold={0.5}
        onEndReached={!loding ? onendPage : null}
        keyExtractor={(item, index) => `${item.id}${index.toString()}`}
        ref={ref}
      />
    </View>
  );
});
export default SearchResultFlatlist;

const stylew = StyleSheet.create({
  container: {
    flex: 1,
  },
});
