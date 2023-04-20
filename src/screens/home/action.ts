import firestore from '@react-native-firebase/firestore';
export const saveDataOnFirebase = (
  uid: string,
  email: string,
  search: string,
  recentSearch: Array<string>,
) => {
  let newSearch = search.trim().toLowerCase();
  let index = recentSearch.findIndex(item => item === newSearch);
  if (index !== -1) {
    recentSearch.splice(index, 1);
  }
  if (newSearch.length >= 2) {
    recentSearch.unshift(newSearch);
    console.log('recentSearch', recentSearch);
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
    .onSnapshot((res: any) => {
      sucessCallBack(res.data().search);
    });
};
