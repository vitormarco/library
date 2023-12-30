import { AxiosHeaders } from 'axios';
import { createApi } from '@reduxjs/toolkit/query/react';
import { axiosBaseQuery } from '../api';
import { BookTypes } from './books.types';

interface IGetBooksDTO {
  page?: number;
  limit?: number;
  name?: string;
}

export const booksApi = createApi({
  tagTypes: ['Books'],
  reducerPath: 'booksApi',
  baseQuery: axiosBaseQuery(),
  endpoints: (builder) => ({
    getBooks: builder.query<{ results: BookTypes[]; total: number }, IGetBooksDTO>({
      query: ({ page = 1, limit = 12, name }) => ({
        method: 'get',
        url: 'library',
        params: {
          _page: page,
          _limit: limit,
          title_like: name,
          _sort: 'created_at',
          _order: 'desc'
        }
      }),
      transformResponse: (response: BookTypes[], meta: { headers: AxiosHeaders }) => {
        return {
          results: response,
          total: Number(meta.headers.get('x-total-count')) ?? 0
        };
      },
      providesTags: ['Books']
    }),
    createBook: builder.mutation({
      query: (data) => ({
        method: 'post',
        url: 'library',
        data
      }),
      invalidatesTags: ['Books']
    })
  })
});

export const { useGetBooksQuery, useCreateBookMutation } = booksApi;
