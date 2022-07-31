const initialState = {
  data: [],
  offset: 0,
  listRef: null,
  loding: false,
  search: '',
  Networkerr: false,
  recentSearch: [],
};

const searchData = (
  state = initialState,
  action: {type: any; payload: any},
) => {
  const {type, payload} = action;
  switch (type) {
    case 'Search_Data':
      return {...state, ...payload};
    case 'offset':
      return {...state, ...payload};
    case 'loding':
      return {...state, ...payload};
    case 'search':
      return {...state, ...payload};
    case 'RecentSearch':
      return {...state, ...payload};
    default:
      return state;
  }
};

// const loading = {
//   isloading: false,
// };

// const Loader = (state = loading, action: any) => {
//   const {type, payload} = action;

//   switch (type) {
//     case 'isloading':
//       return {payload};

//     default:
//       return state;
//   }
// };

export {searchData};
