import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import inFaktApiPaths from './infakt-api-paths';
import { AccountantResponseType } from './infakt-api-types';

export const infaktApi = createApi({
  reducerPath: 'infaktApi',
  baseQuery: fetchBaseQuery({ baseUrl: inFaktApiPaths.basic }),
  endpoints: (builder) => ({
    getUsers: builder.query<AccountantResponseType, { page: number; results: number }>({
      query: ({ page, results }) => ({
        url: `?page=${page}&results=${results}`,
      }),
    }),
  }),
});

export const { useGetUsersQuery } = infaktApi;