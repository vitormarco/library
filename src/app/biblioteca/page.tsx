import BookList from '@/components/ui/BookList';
import MainLayout from '@/components/ui/Template';

const livros = async () => {
  return (
    <MainLayout>
      <section>
        <h1>Biblioteca</h1>
        <BookList />
      </section>
    </MainLayout>
  );
};

export default livros;
