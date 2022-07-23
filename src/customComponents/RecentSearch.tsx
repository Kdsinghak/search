import React, {useCallback, useEffect, useState} from 'react';
import {normalize} from '../utils/dimensions';
import callingAPI from '../action/callingAPI';
import {View, Text, FlatList, StyleSheet, Alert} from 'react-native';
import {getDatafromfireBase, saveDataOnFirebase} from '../screens/home/action';

function RecentSearch(props: any) {
  const {data, dispatch, setSearchValue} = props;
  console.log(props);
  let length = data.length;

  data.splice(5, length);
  const [{email, uid}] = props.userDetails;

  const recentSearchApiCalling = (item: any) => {
    saveDataOnFirebase(uid, email, item, data);
    callingAPI.getApi(
      item,
      0,
      (sucess: any) => {
        dispatch({type: 'data', payload: {data: [...sucess]}});

        dispatch({type: 'RecentSearch', payload: {search: item}});
      },
      (error: any) => {
        Alert.alert(error.message);
      },
    );
  };

  const _onRenderItem = ({item}: any) => {
    return (
      <View style={styles.card}>
        <Text
          onPress={() => {
            recentSearchApiCalling(item),
              dispatch({type: 'search', payload: {search: item}});
          }}
          style={styles.text}>
          {item}
        </Text>
      </View>
    );
  };

  return (
    <>
      {data.length > 0 ? (
        <View style={styles.container}>
          <Text style={styles.heading}>Recent Search</Text>
          <FlatList
            data={data}
            renderItem={_onRenderItem}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
      ) : null}
    </>
  );
}

export default React.memo(RecentSearch);

const styles = StyleSheet.create({
  container: {
    marginTop: normalize(8),
    marginLeft: normalize(20),
    height: normalize(60),
    width: '90%',
  },
  heading: {
    fontWeight: 'bold',
    marginBottom: normalize(7),
    color: '#fefefe',
    paddingLeft: normalize(3),
  },
  card: {
    backgroundColor: '#fc1655',
    marginHorizontal: normalize(3),
    borderRadius: normalize(20),
    height: normalize(30),
  },
  text: {
    color: 'white',
    padding: normalize(7),
    alignSelf: 'center',
    fontWeight: 'bold',
  },
});
