const initialSate = {
  data: [],
};

const searchData = (state = initialSate, action: any) => {
  const {type, payload} = action;
  switch (type) {
    case 'Search_Data':
      return {...state, ...payload};

    default:
      return state;
  }
};

export default searchData;
