import firestore from '@react-native-firebase/firestore';

var SearchArray: string[] = [];

export const handleOnblur = (
  displayName: string,
  uid: string,
  email: string,
  search: string,
) => {
  console.log('search is', search);
  let index = SearchArray.findIndex(item => item === search);

  if (index != -1) {
    SearchArray.splice(index, 1);
  }

  SearchArray.unshift(search);

  if (search.length >= 1) {
    firestore().collection('Users').doc(uid).set({
      name: displayName,
      email: email,
      search: SearchArray,
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
