const initialState: object = {
  name: '',
  email: '',
  password: '',
};

const reducer = (
  state = initialState,
  action: {type: string; payload: any},
) => {
  const {type, payload} = action;
  switch (type) {
    case 'NAME':
      return {...state, ...payload};
    case 'EMAIL':
      return {...state, ...payload};
    case 'PASSWORD':
      return {...state, ...payload};

    default:
      return state;
  }
};

export {initialState, reducer};
