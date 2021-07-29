import axios from 'axios';

const KEY = 'AIzaSyB-cLwWcyOr0tvBLidPHHbNmRYbWsYU6HM';
const BaseUrl = 'https://www.googleapis.com/youtube/v3';

export default axios.create({
  baseURL: BaseUrl,
  params: {
    part: 'snippet',
    maxResults: 10,
    key: KEY,
  },
});
