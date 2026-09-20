import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const nexusApi = createApi({
  reducerPath: 'nexusApi',

  baseQuery: fetchBaseQuery({
    baseUrl: '/api/',
  }),

  endpoints: () => ({}),
});