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
          _sort: 'isAvailable,updated_at,',
          _order: 'desc,desc'
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
    createBook: builder.mutation<BookTypes, BookTypes>({
      query: (data) => ({
        method: 'post',
        url: 'library',
        data
      }),
      invalidatesTags: ['Books']
    }),
    getBook: builder.query<BookTypes, { id: string }>({
      query: ({ id }) => ({
        method: 'get',
        url: `library/${id}`
      }),
      providesTags: (result, error, { id }) => [{ type: 'Books', id }]
    }),
    updateBook: builder.mutation<BookTypes, Partial<BookTypes>>({
      query: (data) => {
        const { id, ...body } = data;

        return {
          url: `library/${id}`,
          method: 'put',
          data: body
        };
      },
      invalidatesTags: (result, error, { id }) => [{ type: 'Books', id }, 'Books']
    }),
    deleteBook: builder.mutation<BookTypes, Partial<BookTypes>>({
      query: (data) => ({
        url: `library/${data.id}`,
        method: 'delete'
      }),
      invalidatesTags: (result, error, { id }) => ['Books', { type: 'Books', id }]
    })
  })
});

export const {
  useGetBooksQuery,
  useCreateBookMutation,
  useGetBookQuery,
  useUpdateBookMutation,
  useDeleteBookMutation
} = booksApi;
