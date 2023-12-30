import { BookTypes } from '@/services/books/books.types';

export interface IBookListProps {
  books?: BookTypes[];
  isLoading?: boolean;
  isFetching?: boolean;
  isError?: boolean;
}
