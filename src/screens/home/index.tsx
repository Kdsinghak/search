import React, {useRef, useEffect, useReducer, useCallback} from 'react';
import {
  View,
  Text,
  Image,
  Keyboard,
  FlatList,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from 'react-native';

import styles from './style';
import {propsType} from '../../modal';
import colors from '../../utils/colors';
import {reducer, initialState} from './reducer';
import callingAPI from '../../action/callingAPI';
import {RecentSearch} from '../../customComponents';
import Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {handleOnblur, getDatafromfireBase} from './action';

function Home({route}: any) {
  const [{displayName, email, uid}] = route.params.user._user.providerData;
  const listRef: any = useRef(null);
  const navigation: any = useNavigation();
  const [state, dispatch] = useReducer(reducer, initialState);

  const debounce = (fun: Function, timeout: number) => {
    let timer: string | number | NodeJS.Timeout | undefined;
    return (args: string) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        dispatch({type: 'data', payload: {data: []}});

        fun(args);
      }, timeout);
    };
  };

  const processChange = useCallback(
    debounce((search: string) => {
      callingAPI.getApi(
        search,
        state.offset,

        (Details: string | []) => {
          if (Details.length === 0) {
            dispatch({type: 'loding', payload: {loding: false}});
          } else {
            dispatch({type: 'data', payload: {data: [...Details]}});
          }
        },
        (error: string) => {
          Alert.alert(error);
        },
      );
    }, 500),
    [],
  );

  useEffect(() => {
    processChange(state.search);
    getDatafromfireBase(uid, (onSucess: any) => {
      dispatch({
        type: 'RecentSearch',
        payload: {recentSearch: [...onSucess]},
      });
    });
  }, [state.search]);

  const onendPage = () => {
    Keyboard.dismiss();
    dispatch({type: 'loding', payload: {loding: true}});
    callingAPI.getApi(
      state.search,
      state.offset,
      (Details: Array<[]>) => {
        dispatch({type: 'offset', payload: {offset: state.offset + 10}});
        dispatch({type: 'loding', payload: {loding: false}});

        state.offset === 0
          ? dispatch({type: 'data', payload: {data: [...Details]}})
          : dispatch({
              type: 'data',
              payload: {data: [...state.data, ...Details]},
            });
      },
      (error: string) => {
        Alert.alert(error);
      },
    );
  };

  const renderItem = ({item, index}: {item: propsType; index: number}) => {
    let color = colors[index % colors.length];
    console.log('call call');
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
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>Search</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Setting')}>
          <Icon name="setting" size={30} />
        </TouchableOpacity>
      </View>

      <TextInput
        placeholder="Search"
        style={styles.txtinput}
        onFocus={() => {
          if (state.data.length > 0) {
            listRef.current.scrollToOffset({offset: 0});
          }
        }}
        onChangeText={value => {
          dispatch({type: 'search', payload: {search: value}});
        }}
        onBlur={() => {
          handleOnblur(displayName, uid, email, state.search);
        }}
      />

      <RecentSearch data={state.recentSearch} dispatch={dispatch} />

      {state.data.length > 0 ? (
        <FlatList
          ref={listRef}
          data={state.data}
          renderItem={renderItem}
          onEndReachedThreshold={0.5}
          onEndReached={!state.loding ? onendPage : null}
          keyExtractor={(item, index) => `${item.id}${index}`}
        />
      ) : (
        <ActivityIndicator size="large" animating={true} color="blue" />
      )}

      <TouchableOpacity
        style={styles.backToTop}
        onPress={() => {
          listRef.current.scrollToOffset({offset: 0});
        }}>
        <Icon name={'arrowup'} size={30} />
      </TouchableOpacity>
      {state.loding && state.data.length >= 0 ? (
        <ActivityIndicator size="large" animating={state.loding} color="blue" />
      ) : null}
    </SafeAreaView>
  );
}

export default React.memo(Home);
