'use client';

import { useState } from 'react';
import { Input } from '@/components/shared/Input';
import Pagination from '@/components/shared/Pagination';
import BookList from '@/components/ui/BookList';
import { useDebounce } from '@/hooks/useDebounce';
import { useGetBooksQuery } from '@/services/books/books';
import styles from './Library.module.css';

const Library = () => {
  const [page, setPage] = useState(2);
  const [search, setSearch] = useState('');
  const searchQuery = useDebounce(search, 500);

  const { data } = useGetBooksQuery({
    page,
    name: searchQuery
  });

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPage(1);
    setSearch(e.target.value);
  };

  return (
    <>
      <section className={styles.library}>
        <div className={styles.wrapper}>
          <Input
            labelText="Buscar livro por titulo"
            visuallyHidden
            value={search}
            onChange={handleSearch}
            placeholder="Buscar livro por titulo"
          />
          <BookList books={data?.results} />
        </div>
        <Pagination
          onChange={(page) => setPage(page)}
          totalCountRegisters={data?.total || 0}
          currentPage={page}
        />
      </section>
    </>
  );
};

export default Library;
