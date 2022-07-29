export const fetchData = (page: number, data: any, search: any) => {
  return {type: 'Fetch_Data', page, data, search};
};

export const setLoading = (loading: boolean) => {
  return {type: 'loading', loading};
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
  console.log('data add ');
  return {
    type: 'Search_Data',
    payload: {data: [...prevData, ...newData], offset: page, search: search},
  };
};
