import Library from '@/components/ui/Layout/Library';
import MainLayout from '@/components/ui/Template';

const livros = async () => {
  return (
    <MainLayout>
      <h1>Biblioteca</h1>
      <Library />
    </MainLayout>
  );
};

export default livros;
