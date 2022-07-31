export const fetchData = (page: number, data: any, search: any) => {
  return {type: 'Fetch_Data', page, data, search};
};

export const beginLoading = () => {
  return {type: 'Search_Data', payload: {loding: true}};
};

export const endLoading = () => {
  return {type: 'Search_Data', payload: {loding: false}};
};

export const setData = (searchData: any, page: number, search: string) => {
  return {
    type: 'Search_Data',
    payload: {data: searchData, offset: page, search},
  };
};

export const addData = (
  prevData: any,
  newData: any,
  page: any,
  search: any,
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

export const setDataFromFirebase = (item: any) => {
  return {
    type: 'Search_Data',
    payload: {recentSearch: item},
  };
};
