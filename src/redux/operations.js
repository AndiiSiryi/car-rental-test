import axios from 'axios';
import { createApi } from '@reduxjs/toolkit/query/react';

const baseURL = 'https://65e848864bb72f0a9c4ed445.mockapi.io/';

const baseQuery = async ({ url = '' }) => {
  try {
    const { data } = await axios({
      baseURL,
      url,
    });
    return { data };
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
};

export const carsApi = createApi({
  baseQuery,
  endpoints: builder => ({
    getCarsByPage: builder.query({
      query: (page = 1) => ({ url: `adverts/?page=${page}&limit=12` }),
    }),
    getAdverts: builder.query({
      query: () => ({ url: '/adverts/' }),
    }),
  }),
});

export const { useGetCarsByPageQuery, useGetAdvertsQuery } = carsApi;
