'use client';

import BookList from '@/components/ui/BookList';
import { useGetBooksQuery } from '@/services/books/books';

const Library = () => {
  const { data } = useGetBooksQuery({});

  return (
    <section>
      {/* TODO: Search */}
      <BookList books={data?.results} />
      {/* TODO: PAGINATION */}
    </section>
  );
};

export default Library;
