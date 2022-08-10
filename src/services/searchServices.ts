import axios from 'axios';

const getSearchData = async (page: any, search: any) => {
  if (search === '' || search === undefined) {
    search = 'heart';
  }
  return await axios
    .get(
      `https://api.giphy.com/v1/gifs/search?api_key=q45RZgEO0PITzMQtXwmhHDpM45VeJAJs&limit=10&offset=${page}&q=${search}`,
    )
    .then(res => {
      let data = res.data.data;

      return data;
    })
    .catch(err => {
      return err;
    });
};

export default getSearchData;
