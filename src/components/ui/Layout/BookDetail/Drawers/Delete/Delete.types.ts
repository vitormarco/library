import { BookTypes } from '@/services/books/books.types';

export interface IDeleteProps {
  onDelete: (data: BookTypes) => Promise<void>;
  book: BookTypes;
}
