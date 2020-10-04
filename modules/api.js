import axios from 'axios';

const client = axios.create({
  baseURL: 'api.github.com',
});

const getFirst10Users = async () => {
  const { data } = await client.get('/users');
  return data;
};

export { getFirst10Users };
