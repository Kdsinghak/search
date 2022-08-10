/**
 * initial state for a full searching
 */

const initialState = {
  data: [],
  offset: 0,
  listRef: null,
  loding: false,
  search: 'heart',
  Networkerr: false,
  recentSearch: [],
};

/**
 * reducer function  which contains a initial state and payload
 * @param state
 * @param action
 * @returns  a state based on switch conditions
 */

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

const userDetail = {
  email: '',
  userId: '',
  search: '',
  recentSearch: '',
};

/**
 * reducer function for  setting a user details whose logged in the app
 */

const userDetails = (state = userDetail, action: any) => {
  const {type, payload} = action();
  switch (type) {
    case 'setUserDetails':
      return {...state, ...payload};
    default:
      return state;
  }
};

export {searchData, userDetails};
