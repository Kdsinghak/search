import {
  Text,
  View,
  Image,
  Alert,
  Animated,
  Keyboard,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {colors} from '../utils';
import {propsType} from '../modal';
import styles from '../screens/home/style';
import callingAPI from '../action/callingAPI';
import React, {forwardRef, useRef} from 'react';
import {useNavigation} from '@react-navigation/native';

import {useDispatch, useSelector} from 'react-redux';
import {fetchData, setLoading} from '../redux/search/action';

const SearchResultFlatlist = forwardRef((props: any, ref: any) => {
  const {data, offset, listRef, search, loding, Networkerr, recentSearch} =
    useSelector(store => store.searchData);
  const dispatch = useDispatch();
  // const {dispatch} = props;
  const navigation: any = useNavigation();
  const {height} = Dimensions.get('window');
  // const {search} = props.data;

  const scrollY = useRef(new Animated.Value(0)).current;

  const AnimatedTouchableOpacity =
    Animated.createAnimatedComponent(TouchableOpacity);

  const onendPage = () => {
    Keyboard.dismiss();
    // dispatch(setLoading(true));
    dispatch(fetchData(offset + 10, data, search, loding));
    // dispatch({type: 'loding', payload: {loding: true}});
    // callingAPI.getApi(
    //   search,
    //   offset,
    //   (Details: Array<[]>) => {
    //     dispatch({type: 'loding', payload: {loding: false}});
    //     dispatch({type: 'offset', payload: {offset: offset + 10}});

    //     offset === 0
    //       ? //  dispatch({type: 'data', payload: {data: [...Details]}})
    //         Dispatch(fetchData(offset, data, search))
    //       : // dispatch({
    //         //     type: 'data',
    //         //     payload: {data: [...data, ...Details]},
    //         //   });
    //         Dispatch(fetchData(offset, data, search));
    //   },
    //   (error: string) => {
    //     Alert.alert(error);
    //   },
    // );
  };

  const renderItem = ({item, index}: {item: propsType; index: number}) => {
    const position = Animated.subtract(index * 180, scrollY);
    const idDisspearing = -180;
    const isTop = 0;
    const isBottom = height / 70;
    const isAppearing = height;
    const translateY = Animated.add(
      Animated.add(
        scrollY,
        scrollY.interpolate({
          inputRange: [0, 0.00001 + index * 180],
          outputRange: [0, -index * 200],
          extrapolateRight: 'clamp',
        }),
      ),
      position.interpolate({
        inputRange: [isBottom, isAppearing],
        outputRange: [0, -180 / 2],
        extrapolate: 'clamp',
      }),
    );

    const scale = position.interpolate({
      inputRange: [idDisspearing, isTop, isBottom, isAppearing],
      outputRange: [0.5, 1, 1, 0.5],
      extrapolate: 'clamp',
    });

    const opacity = position.interpolate({
      inputRange: [idDisspearing, isTop, isBottom, isAppearing],
      outputRange: [0.5, 1, 1, 0.5],
    });

    return (
      <AnimatedTouchableOpacity
        style={[
          styles.Card,
          {backgroundColor: colors.light[index % colors.light.length]},
          {opacity, transform: [{translateY}, {scale}]},
        ]}
        onPress={() => {
          navigation.navigate('Profile', {
            item,
            color: colors.light[index % colors.light.length],
          });
        }}>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <View
          style={[
            styles.imageContainer,
            {backgroundColor: colors.dark[index % colors.dark.length]},
          ]}>
          <Image
            source={{uri: item.images.original.url}}
            style={styles.cardImg}
          />
        </View>
      </AnimatedTouchableOpacity>
    );
  };

  return (
    <View style={stylew.container}>
      <Animated.FlatList
        data={data}
        renderItem={renderItem}
        onEndReachedThreshold={0.5}
        onEndReached={!loding ? onendPage : null}
        keyExtractor={(item, index) => `${item.id}${index.toString()}`}
        ref={ref}
        scrollEventThrottle={6}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {useNativeDriver: true},
        )}
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
