'use client';

import React, { useState } from 'react';
import { FiChevronLeft, FiEdit, FiTrash } from 'react-icons/fi';
import dynamic from 'next/dynamic';
import { redirect, useRouter } from 'next/navigation';
import Button from '@/components/shared/Button';
import Link from '@/components/shared/Link';
import Loading from '@/components/shared/Loading';
import VisuallyHidden from '@/components/shared/VisuallyHidden';
import { useDeleteBookMutation, useGetBookQuery, useUpdateBookMutation } from '@/services/books';
import { BookTypes } from '@/services/books/books.types';
import routes from '@/utils/routes';
import sanitize from '@/utils/sanitize';
import Actions from './Actions';
import { deleteButtonStyles } from './BookDetail.helpers';
import styles from './BookDetail.module.css';
import Drawers from './Drawers';
const DynamicDrawer = dynamic(() => import('@/components/shared/Drawer'), { ssr: false });

const BookDetail = ({ id }: { id: string }) => {
  const [openedDrawer, setOpenedDrawer] = useState<'edit' | 'delete' | undefined>();
  const { data, isLoading } = useGetBookQuery({ id });
  const [updatedBook] = useUpdateBookMutation();
  const [deleteBook] = useDeleteBookMutation();
  const router = useRouter();

  const handleUpdateBook = async (data: Partial<BookTypes>) => {
    await updatedBook(data);
    setOpenedDrawer(undefined);
  };
  const handleDeleteBook = async (data: Partial<BookTypes>) => {
    await deleteBook(data);
    setOpenedDrawer(undefined);
    router.push(routes.library);
  };

  if (isLoading) {
    return <Loading />;
  }

  if (!data) {
    redirect(routes.library);
  }

  return (
    <>
      <div className={styles.wrapper}>
        <section>
          <h1>{data?.title}</h1>
          <Actions>
            <Link href={routes.library}>
              <Button variant="outline">
                <FiChevronLeft />

                <VisuallyHidden>Voltar</VisuallyHidden>
              </Button>
            </Link>
            <Button onClick={() => setOpenedDrawer('edit')} disabled={!data.isAvailable}>
              <FiEdit />
              <VisuallyHidden>Editar</VisuallyHidden>
            </Button>

            <Button
              style={deleteButtonStyles}
              onClick={() => setOpenedDrawer('delete')}
              disabled={!data.isAvailable}
            >
              <FiTrash />
              <VisuallyHidden>deletar</VisuallyHidden>
            </Button>
          </Actions>
        </section>
        <section className={styles.description}>
          <h2>Descrição</h2>
          <div dangerouslySetInnerHTML={{ __html: sanitize(data?.description) }} />
        </section>
        <section>
          <Button
            disabled={!data.isAvailable}
            onClick={() =>
              handleUpdateBook({
                ...data,
                isAvailable: false
              })
            }
          >
            Alugar livro
          </Button>
        </section>
      </div>
      <DynamicDrawer isOpen={Boolean(openedDrawer)} onClose={() => setOpenedDrawer(undefined)}>
        {openedDrawer && (
          <Drawers
            book={data}
            opened={openedDrawer}
            onDelete={handleDeleteBook}
            onEdit={handleUpdateBook}
          />
        )}
      </DynamicDrawer>
    </>
  );
};

export default BookDetail;
