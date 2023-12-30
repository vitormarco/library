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
    getBooks: builder.query<BookTypes[], IGetBooksDTO>({
      query: ({ page = 1, limit = 12 }) => ({
        method: 'get',
        url: 'library',
        params: {
          _page: page,
          _limit: limit
        }
      })
    })
  })
});

export const { useGetBooksQuery } = booksApi;
