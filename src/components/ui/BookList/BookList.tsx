'use client';

import { FiBook, FiChevronRight } from 'react-icons/fi';
import Link from '@/components/shared/Link';
import List from '@/components/shared/List';
import { useGetBooksQuery } from '@/services/books/books';
import { slugfy } from '@/utils/formats/url';
import routes from '@/utils/routes';
import styles from './BookList.module.css';

const BookList = () => {
  const { data } = useGetBooksQuery({});

  return (
    <List className={styles.list}>
      {data?.results.map((book) => (
        <List.Item className={styles['list-item']} key={book.id}>
          <Link
            className={styles.link}
            href={routes.bookDetail(slugfy(`${book.title} cod ${book.id}`))}
          >
            <span className={styles['book-title']}>
              <div className={styles.wrapper}>
                <FiBook size={16} />
              </div>
              {book.title}
            </span>
            <div className={styles.wrapper}>
              <FiChevronRight size={16} />
            </div>
          </Link>
        </List.Item>
      ))}
    </List>
  );
};

export default BookList;
