import { apiRequest } from './apiService';

export const GetCats = async (categoryIds = 1, page = 1, limit, size = 'small') => {
  return await apiRequest('/images/search', 'GET', {
    limit,
    page,
    category_ids: categoryIds,
    size,
  });
};
