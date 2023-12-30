'use client';

import { useGetBooksQuery } from '@/services/books/books';
import List from './List';

const BookList = () => {
  const { data } = useGetBooksQuery({});

  return <List>{data?.map((book) => <List.Item key={book.id}>{book.title}</List.Item>)}</List>;
};

export default BookList;
