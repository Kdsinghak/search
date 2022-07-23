import axios from 'axios';

const getApi = (
  search: string,
  page: number,
  sucessCallBack: Function,
  failureCallBack: Function,
) => {
  if (search === '' || search === 'undefined') {
    search = 'heart';
  }
  axios
    .get(
      `https://api.giphy.com/v1/gifs/search?api_key=q45RZgEO0PITzMQtXwmhHDpM45VeJAJs&limit=10&offset=${page}&q=${search}`,
    )
    .then(res => {
      console.log(res.data.data);
      sucessCallBack(res.data.data);
    })
    .catch(err => {
      failureCallBack(err);
    });
};

export default {getApi};
 