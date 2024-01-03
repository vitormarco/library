import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { v4 as uuidV4 } from 'uuid';
import Button from '@/components/shared/Button';
import { generateParagraph } from '@/utils/formats/richText';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormInput } from '../../FormFields';
import { FormTextArea } from '../../FormFields/TextArea/TextArea';
import styles from './CreateBook.module.css';
import CreateBookFormSchema from './CreateBook.schemas';
import { CreateBookInputsTypes, ICreateBookProps } from './CreateBook.types';

const CreateBook = ({ onCreateBook }: ICreateBookProps) => {
  const methods = useForm({
    resolver: zodResolver(CreateBookFormSchema),
    mode: 'onBlur',
    defaultValues: {
      title: '',
      description: ''
    }
  });

  const onSubmit: SubmitHandler<CreateBookInputsTypes> = async (data) => {
    await onCreateBook({
      id: uuidV4(),
      title: data.title,
      description: generateParagraph(data.description),
      isAvailable: true,
      created_at: new Date(),
      updated_at: new Date()
    });
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className={styles.form}>
        <FormInput labelText="Titulo" {...methods.register('title')} />
        <FormTextArea labelText="Descrição" {...methods.register('description')} />
        <Button type="submit" loading={methods.formState.isSubmitting}>
          Adicionar livro
        </Button>
      </form>
    </FormProvider>
  );
};

export default CreateBook;
