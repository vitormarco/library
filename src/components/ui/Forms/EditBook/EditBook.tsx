import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import Button from '@/components/shared/Button';
import { BookTypes } from '@/services/books/books.types';
import { generateForEdit, generateParagraph } from '@/utils/formats/richText';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormInput } from '../../FormFields';
import { FormTextArea } from '../../FormFields/TextArea/TextArea';
import styles from './EditBook.module.css';
import EditBookFormSchema from './EditBook.schemas';
import { IEditBookProps } from './EditBook.types';

const EditBook = ({ onEditBook, book }: IEditBookProps) => {
  const methods = useForm({
    resolver: zodResolver(EditBookFormSchema),
    mode: 'onBlur',
    values: {
      title: book.title,
      description: generateForEdit(book.description)
    }
  });

  const onSubmit: SubmitHandler<Partial<BookTypes>> = async (data) => {
    const editedBookData = new Object();
    Object.assign(editedBookData, {
      ...book,
      ...data,
      updated_at: new Date(),
      description: generateParagraph(data.description || '')
    });

    await onEditBook(editedBookData);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className={styles.form}>
        <FormInput labelText="Titulo" {...methods.register('title')} />
        <FormTextArea labelText="Descrição" {...methods.register('description')} />
        <Button
          type="submit"
          disabled={!methods.formState.isValid}
          loading={methods.formState.isSubmitting}
        >
          Editar livro
        </Button>
      </form>
    </FormProvider>
  );
};

export default EditBook;
