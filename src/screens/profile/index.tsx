import styles from './style';
import React, {useState} from 'react';
import {CustomHeader} from '../../customComponents';
import {Text, View, Image, ActivityIndicator} from 'react-native';

export default function Profile({route}: any) {
  const {color} = route?.params;
  const [isLoading, setLoader] = useState(false);
  const {display_name, username, description} = route?.params?.item?.user ?? '';
  const {url}: {url: string | undefined} =
    route?.params?.item?.images?.original;

  const _onLoadStart = () => {
    setLoader(true);
  };

  const _onLoadEnd = () => {
    setLoader(false);
  };

  return (
    <View style={styles.container}>
      <CustomHeader />

      <View style={styles.innerView2}>
        <View style={[styles.innerView, {backgroundColor: color}]}>
          <Image
            onLoadStart={_onLoadStart}
            onLoadEnd={_onLoadEnd}
            source={{uri: url}}
            style={styles.profileIcon}
          />
          {isLoading ? (
            <ActivityIndicator
              style={styles.indicatorstyle}
              size={'large'}
              color="white"
            />
          ) : null}
        </View>

        <View style={styles.displayNameView}>
          <Text style={styles.displayNameText}>{display_name}</Text>
          <Text style={styles.username}>@{username}</Text>

          <View style={styles.descriptionView}>
            <Text style={styles.descriptionText}>Description</Text>
            <Text numberOfLines={2}>{description}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
