import { FiBook, FiChevronRight } from 'react-icons/fi';
import Link from '@/components/shared/Link';
import List from '@/components/shared/List';
import Loading from '@/components/shared/Loading';
import Tag from '@/components/shared/Tag';
import { slugfy } from '@/utils/formats/url';
import routes from '@/utils/routes';
import styles from './BookList.module.css';
import { IBookListProps } from './BookList.types';

const BookList = ({
  books,
  isLoading = false,
  isFetching = false,
  isError = false
}: IBookListProps) => {
  if (isLoading || isFetching) {
    return <Loading />;
  }

  if (isError) {
    return <span>Ocorreu um error.</span>;
  }

  if (!books || !books.length) {
    return <span>Nenhum livro encontrado</span>;
  }

  return (
    <List className={styles.list}>
      {books?.map((book) => (
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
              {!book.isAvailable && (
                <Tag
                  style={
                    {
                      '--border-color': 'var(--red500)',
                      '--background': 'var(--red500)',
                      '--color': 'var(--white)',
                      fontWeight: 'bold'
                    } as React.CSSProperties
                  }
                >
                  Indisponível
                </Tag>
              )}
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
