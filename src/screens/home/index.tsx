import React, {
  useRef,
  useEffect,
  useReducer,
  useCallback,
  useState,
} from 'react';
import {
  View,
  Text,
  Alert,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

import styles from './style';
import {reducer, initialState} from './reducer';
import callingAPI from '../../action/callingAPI';
import {RecentSearch} from '../../customComponents';
import Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {handleOnblur, getDatafromfireBase} from './action';
import SearchResultFlatlist from '../../customComponents/SearchResultFlatlist';

function Home({route}: any) {
  const [{displayName, email, uid}] = route.params.user._user.providerData;
  const flatListRef = useRef(null);
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
            flatListRef.current.scrollToOffset({offset: 0});
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
        <SearchResultFlatlist
          data={state}
          dispatch={dispatch}
          ref={flatListRef}
        />
      ) : (
        <ActivityIndicator size="large" animating={true} color="red" />
      )}

      <TouchableOpacity
        style={styles.backToTop}
        onPress={() => {
          flatListRef.current.scrollToOffset({offset: 0});
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
