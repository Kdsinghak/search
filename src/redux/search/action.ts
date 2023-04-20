// Action Creators

/**
 * action creater for calling a function
 * @param page
 * @param data
 * @param search
 * @param uid
 * @param email
 * @param recentSearch
 * @returns  object -> type , payload
 */

export const fetchData = (
  page: number,
  data: any,
  search: string,
  uid: string,
  email: string,
  recentSearch: Array<any>,
) => {
  return {type: 'Fetch_Data', page, data, search, uid, email, recentSearch};
};

/**
 * action creators for start loading
 * @returns  boolean value  (true) as a payload
 */

export const beginLoading = () => {
  return {type: 'Search_Data', payload: {loding: true}};
};

/**
 * action creators for end a loading
 * @returns boolean value (false ) as a payload
 */

export const endLoading = () => {
  return {type: 'Search_Data', payload: {loding: false}};
};

/**
 *  action creators get a data from api and set on reducers
 * @param searchData
 * @param page
 * @param search
 * @returns a payload (data, page , search value)
 */

export const setData = (searchData: any, page: number, search: string) => {
  return {
    type: 'Search_Data',
    payload: {data: searchData, offset: page, search},
  };
};

/**
 * actio creators for pagination add new data in previous data
 * @param prevData
 * @param newData
 * @param page
 * @param search
 * @returns payload (data, page , search)
 */
export const addData = (
  prevData: any,
  newData: any,
  page: number,
  search: string,
) => {
  return {
    type: 'Search_Data',
    payload: {
      data: [...prevData, ...newData],
      offset: page,
      search: search,
    },
  };
};

/**
 * action creators for get a gata from firebase and set in redux
 * @param item
 * @returns  payload (contains a recent items array)
 */

export const setDataFromFirebase = (item: any) => {
  return {
    type: 'Search_Data',
    payload: {recentSearch: item},
  };
};
