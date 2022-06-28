import auth from '@react-native-firebase/auth';

const handleSignOut = (onSucess: Function, onFailure: Function) => {
  auth()
    .signOut()
    .then(res => onSucess(res))
    .catch(err => onFailure(err));
};

export {handleSignOut};
