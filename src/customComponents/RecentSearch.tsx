import {View, Text, FlatList, StyleSheet} from 'react-native';
import React, {useCallback} from 'react';
import {normalize} from '../utils/dimensions';

function RecentSearch(props: any) {
  const {data} = props;
  console.log('reacent');
  const _onRenderItem = useCallback(
    ({item}: any) => {
      return (
        <View style={styles.card}>
          <Text style={styles.text}>{item}</Text>
        </View>
      );
    },
    [data],
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>RecentSearch</Text>
      <FlatList data={data} renderItem={_onRenderItem} horizontal />
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
