import axios from 'axios';

// https://www.tvmaze.com/api
const baseUrl = 'https://api.tvmaze.com';

export const searchShows = async (query: string) => {
  axios
    .get(`${baseUrl}/search/shows`, {
      params: {
        q: query,
      },
    })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      return error;
    });
};
