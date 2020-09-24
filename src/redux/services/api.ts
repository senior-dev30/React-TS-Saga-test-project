import apisauce from 'apisauce';

const baseUrl = 'https://jsonplaceholder.typicode.com/';

export const createApi = (baseURL = baseUrl) => {
  const api = apisauce.create({ baseURL });
  const getUsers = () => api.get('users/');
  return {
    getUsers,
  };
};
