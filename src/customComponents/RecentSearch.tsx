import {View, Text, FlatList, StyleSheet, Alert} from 'react-native';
import React, {useCallback, useReducer} from 'react';
import {normalize} from '../utils/dimensions';
import callingAPI from '../action/callingAPI';

function RecentSearch(props: any) {
  const {data, dispatch} = props;
  let length = data.length;
  data.splice(5, length);

  const recentSearchApiCalling = (item: any) => {
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

  const _onRenderItem = useCallback(
    ({item}: any) => {
      return (
        <View style={styles.card}>
          <Text
            onPress={() => recentSearchApiCalling(item)}
            style={styles.text}>
            {item}
          </Text>
        </View>
      );
    },
    [data],
  );

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
