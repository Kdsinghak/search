import auth from '@react-native-firebase/auth';

const handleSignUp = (
  email: string,
  password: string,
  onSucess: Function,
  onFailure: Function,
) => {
  auth()
    .createUserWithEmailAndPassword(email, password)
    .then(sucess => {
      onSucess(sucess);
    })
    .catch(err => {
      onFailure(err.message);
    });
};

export {handleSignUp};
