import React, {useRef, useEffect, useReducer, useCallback} from 'react';
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
import {RecentSearch} from '../../customComponents';
import {
  fetchData,
  setDataFromFirebase,
  setDataOnFirebase,
} from '../../redux/search/action';
// import callingAPI from '../../action/callingAPI';
import {useDispatch, useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {saveDataOnFirebase, getDatafromfireBase} from './action';
import SearchResultFlatlist from '../../customComponents/SearchResultFlatlist';

function Home({route}: any) {
  const Dispatch = useDispatch();
  const flatListRef: any = useRef(null);
  const navigation: any = useNavigation();
  const [state, dispatch] = useReducer(reducer, initialState);
  const [{email, uid}] = route.params.user._user.providerData;
  const {data, offset, listRef, search, Networkerr, recentSearch} = useSelector(
    store => store.searchData,
  );

  const debounce = (fun: Function, timeout: number) => {
    let timer: string | number | NodeJS.Timeout | undefined;

    return (args: string) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        dispatch({type: 'data', payload: {data: []}});
        saveDataOnFirebase(uid, email, args, state.recentSearch);
        fun(args);
      }, timeout);
    };
  };

  const processChange = useCallback(
    debounce((search: string) => {
      Dispatch(fetchData(offset, data, search));
    }, 1000),
    [],
  );

  useEffect(() => {
    getDatafromfireBase(uid, (onSucess: any) => {
      Dispatch(setDataFromFirebase(onSucess));
    });
  }, [state.search]);

  useEffect(() => {
    processChange(state.search);
  }, [state.search]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>Search</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Setting')}>
          <Icon name="setting" size={30} color={'#fc1655'} />
        </TouchableOpacity>
      </View>

      <TextInput
        value={state.search}
        placeholder="Search"
        placeholderTextColor={'#6d757f'}
        style={styles.txtinput}
        onFocus={() => {
          if (state.data.length > 0) {
            flatListRef.current.scrollToOffset({offset: 0});
          }
        }}
        onChangeText={value => {
          dispatch({type: 'search', payload: {search: value}});
        }}
      />

      <RecentSearch
        // data={state.recentSearch}
        // dispatch={dispatch}
        userDetails={route.params.user._user.providerData}
      />

      {data.length > 0 ? (
        <SearchResultFlatlist
          // data={state}
          // dispatch={dispatch}
          ref={flatListRef}
        />
      ) : (
        <ActivityIndicator size="large" animating={true} color="#fefefe" />
      )}

      <TouchableOpacity
        style={styles.backToTop}
        onPress={() => {
          flatListRef.current.scrollToOffset({offset: 0});
        }}>
        <Icon name={'arrowup'} size={30} color={'white'} />
      </TouchableOpacity>

      {/* {loding && data.length >= 0 ? (
        <ActivityIndicator size="large" animating={loding} color="red" />
      ) : null} */}
    </SafeAreaView>
  );
}

export default React.memo(Home);
