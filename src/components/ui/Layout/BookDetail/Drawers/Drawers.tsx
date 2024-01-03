import EditBook from '@/components/ui/Forms/EditBook/EditBook';
import Delete from './Delete';
import { IDrawersProps } from './Drawers.types';

const Drawers = ({ book, onDelete, onEdit, opened }: IDrawersProps) => {
  const drawers = {
    edit: <EditBook book={book} onEditBook={onEdit} />,
    delete: <Delete book={book} onDelete={onDelete} />
  };

  return drawers[opened];
};

export default Drawers;
