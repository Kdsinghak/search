import axios from 'axios';

const getSearchData = async () => {
  return await axios
    .get(
      'https://api.giphy.com/v1/gifs/search?api_key=q45RZgEO0PITzMQtXwmhHDpM45VeJAJs&limit=10&offset=0&q=heart',
    )
    .then(res => {
      let data = res.data.data;

      return data;
    })
    .catch(err => {
      //   failureCallBack(err);
      return err;
    });
};

export default getSearchData;
