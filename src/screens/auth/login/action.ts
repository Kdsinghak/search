import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
  webClientId:
    '276532965348-i0ou9rhe00h7bvu1jrejrp7sb96oam3a.apps.googleusercontent.com',
});

const handleSignin = (
  email: string,
  password: string,
  onSucess: Function,
  onfailure: Function,
) => {
  auth()
    .signInWithEmailAndPassword(email, password)
    .then(res => {
      onSucess(res);
    })
    .catch(err => {
      onfailure(err);
    });
};

const googleSignIn = async (onSucess: Function, onfailure: Function) => {
  try {
    const {idToken} = await GoogleSignin.signIn();

    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    auth()
      .signInWithCredential(googleCredential)
      .then(res => {
        onSucess(res);
      });
  } catch (error) {
    onfailure(error);
  }
};

export {handleSignin, googleSignIn};
