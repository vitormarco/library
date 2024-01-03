import { BookTypes } from '@/services/books/books.types';

export interface IDrawersProps {
  opened: 'edit' | 'delete';
  book: BookTypes;
  onEdit: (data: Partial<BookTypes>) => Promise<void>;
  onDelete: (id: Partial<BookTypes>) => Promise<void>;
}
