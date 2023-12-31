import { BookTypes } from '@/services/books/books.types';

export interface ICreateBookProps {
  onCreateBook: (data: BookTypes) => Promise<void>;
}

export type CreateBookInputsTypes = {
  title: string;
  description: string;
};
