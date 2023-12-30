import List from '../List';
import { getLastPage, getNextPages, getPreviousPage, getSibling } from './Pagination.helpers';
import styles from './Pagination.module.css';
import { IPaginationProps } from './Pagination.types';

const Pagination = ({
  onChange,
  totalCountRegisters,
  currentPage = 1,
  registersPerPage = 12
}: IPaginationProps) => {
  const lastPage = getLastPage(totalCountRegisters, registersPerPage);
  const siblingCount = getSibling(currentPage, lastPage);
  const previousPages = getPreviousPage({
    currentPage,
    lastPage,
    sibling: siblingCount
  });
  const nextPages = getNextPages({
    currentPage,
    lastPage,
    sibling: siblingCount
  });

  return (
    <nav className={styles.pagination}>
      <List className={styles['pagination-list']}>
        {/* Generate First Page and dots */}
        {currentPage > 1 + siblingCount && (
          <>
            <List.Item>
              <button className={styles.button} onClick={() => onChange(1)}>
                1
              </button>
            </List.Item>
            {currentPage > 2 + siblingCount && (
              <List.Item>
                <span>...</span>
              </List.Item>
            )}
          </>
        )}

        {/* Generate previous pages */}
        {Boolean(previousPages.length) &&
          previousPages.map((page) => (
            <List.Item key={page}>
              <button className={styles.button} onClick={() => onChange(page)}>
                {page}
              </button>
            </List.Item>
          ))}

        {/* Current page */}
        <List.Item>
          <button className={styles.button} disabled={true}>
            {currentPage}
          </button>
        </List.Item>

        {/* Generate next pages */}
        {Boolean(nextPages.length) &&
          nextPages.map((page) => (
            <List.Item key={page}>
              <button className={styles.button} onClick={() => onChange(page)}>
                {page}
              </button>
            </List.Item>
          ))}

        {/* Generate last page and dots  */}
        {currentPage + siblingCount < lastPage && (
          <>
            {currentPage + 1 + siblingCount < lastPage && (
              <List.Item>
                <span>...</span>
              </List.Item>
            )}
            <List.Item>
              <button className={styles.button} onClick={() => onChange(lastPage)}>
                {lastPage}
              </button>
            </List.Item>
          </>
        )}
      </List>
    </nav>
  );
};

export default Pagination;
