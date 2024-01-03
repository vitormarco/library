import { useState } from 'react';
import Button from '@/components/shared/Button';
import { BookTypes } from '@/services/books/books.types';
import styles from './Delete.module.css';
import { IDeleteProps } from './Delete.types';

const Delete = ({ book, onDelete }: IDeleteProps) => {
  const [loading, setLoading] = useState(false);
  const handleDelete = async (book: BookTypes) => {
    setLoading(true);
    await onDelete(book);
  };
  return (
    <div className={styles.delete}>
      <h3>{book.title}</h3>
      <p>Você tem certeza que deseja deletar o livro? Essa ação não pode ser desfeita.</p>
      <Button onClick={() => handleDelete(book)} loading={loading}>
        Deletar o livro
      </Button>
    </div>
  );
};

export default Delete;
