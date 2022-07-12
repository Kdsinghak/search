import {View, Text, FlatList, StyleSheet, Alert} from 'react-native';
import React, {useCallback, useReducer} from 'react';
import {normalize} from '../utils/dimensions';
import callingAPI from '../action/callingAPI';
import {saveDataOnFirebase} from '../screens/home/action';

function RecentSearch(props: any) {
  const {data, dispatch} = props;

  let length = data.length;

  data.splice(5, length);
  const [{email, uid}] = props.userDetails;

  const recentSearchApiCalling = async (item: any) => {
    await saveDataOnFirebase(uid, email, item, data);
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
        <Text onPress={() => recentSearchApiCalling(item)} style={styles.text}>
          {item}
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>RecentSearch</Text>
      <FlatList
        data={data}
        renderItem={_onRenderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

export default React.memo(RecentSearch);

const styles = StyleSheet.create({
  container: {
    marginVertical: normalize(4),
    marginLeft: normalize(20),
  },
  heading: {
    fontWeight: 'bold',
    marginBottom: normalize(3),
  },
  card: {
    backgroundColor: 'black',
    marginHorizontal: normalize(3),
    borderRadius: normalize(20),
  },
  text: {
    color: 'white',
    padding: normalize(6),
  },
});
