'use client';

import { useState } from 'react';
import { FiPlus } from 'react-icons/fi';
import Button from '@/components/shared/Button';
import { Input } from '@/components/shared/Input';
import Pagination from '@/components/shared/Pagination';
import VisuallyHidden from '@/components/shared/VisuallyHidden';
import BookList from '@/components/ui/BookList';
import { useDebounce } from '@/hooks/useDebounce';
import { useGetBooksQuery } from '@/services/books/books';
import styles from './Library.module.css';

const Library = () => {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const searchQuery = useDebounce(search, 500);

  const { data, isLoading, isFetching, isError } = useGetBooksQuery({
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
          <header className={styles.header}>
            <Input
              labelText="Buscar livro por titulo"
              visuallyHidden
              value={search}
              onChange={handleSearch}
              placeholder="Buscar livro por titulo"
            />
            <Button>
              <VisuallyHidden>Addicionar livro</VisuallyHidden>
              <span>
                <FiPlus />
              </span>
            </Button>
          </header>
          <BookList
            books={data?.results}
            isLoading={isLoading}
            isFetching={isFetching}
            isError={isError}
          />
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
