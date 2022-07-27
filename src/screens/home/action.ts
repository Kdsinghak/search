import firestore from '@react-native-firebase/firestore';

export const saveDataOnFirebase = (
  uid: string,
  email: string,
  search: string,
  recentSearch: Array<string>,
) => {
  let newSearcn = search.trim().toLowerCase();
  let index = recentSearch.findIndex(item => item === newSearcn);
  if (index != -1) {
    recentSearch.splice(index, 1);
  }
  if (newSearcn.length >= 2) {
    recentSearch.unshift(newSearcn);

    firestore()
      .collection('Users')
      .doc(uid)
      .set({
        email: email,
        search: recentSearch,
      })
      .then(res => console.log(res));
  }
};

export const getDatafromfireBase = (uid: string, sucessCallBack: Function) => {
  firestore()
    .collection('Users')
    .doc(uid)
    .get()
    .then(res => sucessCallBack(res._data.search))
    .catch(error => {
      console.log(error);
    });
};
