import React, {useRef, useEffect, useReducer, useCallback} from 'react';
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

import styles from './style';
import {getDatafromfireBase} from './action';
import {reducer, initialState} from './reducer';
import {RecentSearch} from '../../customComponents';
import {useDispatch, useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {fetchData, setDataFromFirebase} from '../../redux/search/action';
import SearchResultFlatlist from '../../customComponents/SearchResultFlatlist';

function Home({route}: any) {
  const Dispatch = useDispatch();
  const flatListRef: any = useRef(null);
  const navigation: any = useNavigation();
  const [state, dispatch] = useReducer(reducer, initialState);
  const [{email, uid}] = route.params.user._user.providerData;
  const {data, offset, recentSearch} = useSelector(store => store.searchData);

  const debounce = (fun: Function, timeout: number) => {
    let timer: string | number | NodeJS.Timeout | undefined;
    return (args: string) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        fun(args);
      }, timeout);
    };
  };

  const processChange = useCallback(
    debounce((search: string) => {
      Dispatch(fetchData(offset, data, search, uid, email, state.recentSearch));
    }, 1000),
    [],
  );

  useEffect(() => {
    getDatafromfireBase(uid, (onSucess: any) => {
      Dispatch(setDataFromFirebase(onSucess));
    });
  }, recentSearch);

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
          if (data.length > 0) {
            flatListRef.current.scrollToOffset({offset: 0});
          }
        }}
        onChangeText={value => {
          dispatch({type: 'search', payload: {search: value}});
        }}
      />

      <RecentSearch
        userDetails={route.params.user._user.providerData}
        search={state.search}
        dispatch={dispatch}
      />

      {data.length > 0 ? (
        <SearchResultFlatlist ref={flatListRef} />
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
    </SafeAreaView>
  );
}

export default React.memo(Home);
