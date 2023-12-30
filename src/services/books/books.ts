import { AxiosHeaders } from 'axios';
import { createApi } from '@reduxjs/toolkit/query/react';
import { axiosBaseQuery } from '../api';
import { BookTypes } from './books.types';

interface IGetBooksDTO {
  page?: number;
  limit?: number;
}

export const booksApi = createApi({
  reducerPath: 'booksApi',
  baseQuery: axiosBaseQuery(),
  endpoints: (builder) => ({
    getBooks: builder.query<{ results: BookTypes[]; total: number }, IGetBooksDTO>({
      query: ({ page = 1, limit = 12 }) => ({
        method: 'get',
        url: 'library',
        params: {
          _page: page,
          _limit: limit
        }
      }),
      transformResponse: (response: BookTypes[], meta: { headers: AxiosHeaders }) => {
        return {
          results: response,
          total: Number(meta.headers.get('x-total-count')) ?? 0
        };
      }
    })
  })
});

export const { useGetBooksQuery } = booksApi;
