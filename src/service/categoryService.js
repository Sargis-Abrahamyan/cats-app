import { apiRequest } from './apiService';

export const GetCategory = async () => {
  return await apiRequest('/categories');
};
