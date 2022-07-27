export const fetchData = () => {
  return {type: 'Fetch_Data'};
};

export const setData = (searchData: any) => {
  return {
    type: 'Search_Data',
    payload: {data: searchData},
  };
};
