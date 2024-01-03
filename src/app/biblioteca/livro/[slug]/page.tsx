import { redirect } from 'next/navigation';
import BookDetail from '@/components/ui/Layout/BookDetail';
import MainLayout from '@/components/ui/Template';
import routes from '@/utils/routes';

const BookPage = ({ params }: { params: { slug: string } }) => {
  const id = params.slug.split('cod-').pop();

  if (!id) {
    redirect(routes.library);
  }

  return (
    <MainLayout>
      <BookDetail id={id} />
    </MainLayout>
  );
};

export default BookPage;
