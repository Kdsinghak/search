import React from 'react';
import {normalize} from '../utils/dimensions';

import {View, Text, FlatList, StyleSheet} from 'react-native';
import {saveDataOnFirebase} from '../screens/home/action';
import {useSelector, useDispatch} from 'react-redux';
import {fetchData} from '../redux/search/action';

function RecentSearch(props: any) {
  const {recentSearch} = useSelector(store => store.searchData);
  const Dispatch = useDispatch();
  console.log(props);
  const {dispatch} = props;
  let length = recentSearch.length;

  recentSearch.splice(5, length);
  const [{email, uid}] = props.userDetails;

  const recentSearchApiCalling = (item: any) => {
    saveDataOnFirebase(uid, email, item, recentSearch);
    Dispatch(fetchData(0, [], item));
  };

  const _onRenderItem = ({item}: any) => {
    return (
      <View style={styles.card}>
        <Text
          onPress={() => {
            recentSearchApiCalling(item);
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
      {recentSearch.length > 0 ? (
        <View style={styles.container}>
          <Text style={styles.heading}>Recent Search</Text>
          <FlatList
            data={recentSearch}
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
