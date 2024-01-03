import { BookTypes } from '@/services/books/books.types';

export interface IEditBookProps {
  onEditBook: (data: Partial<BookTypes>) => Promise<void>;
  book: BookTypes;
}
