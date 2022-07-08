import firestore from '@react-native-firebase/firestore';

export const handleOnblur = (
  displayName: string,
  uid: string,
  email: string,
  search: string,
  recentSearch: Array<string>,
) => {
  let index = recentSearch.findIndex(item => item === search);

  if (index != -1) {
    recentSearch.splice(index, 1);
  }

  recentSearch.unshift(search);

  if (search.length >= 1) {
    firestore().collection('Users').doc(uid).set({
      name: displayName,
      email: email,
      search: recentSearch,
    });
  }
};

export const getDatafromfireBase = (uid: string, sucessCallBack: Function) => {
  firestore()
    .collection('Users')
    .doc(uid)
    .get()
    .then(res => sucessCallBack(res._data.search));
};
