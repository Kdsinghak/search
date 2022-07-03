const initialState = {
  data: [],
  offset: 0,
  listRef: null,
  loding: false,
  search: 'heart',
  Networkerr: false,
};

const reducer = (state = initialState, action: {type: any; payload: any}) => {
  const {type, payload} = action;
  switch (type) {
    case 'data':
      return {...state, ...payload};
    case 'offset':
      return {...state, ...payload};
    case 'loding':
      return {...state, ...payload};
    case 'search':
      return {...state, ...payload};
  }
};

export {reducer, initialState};
