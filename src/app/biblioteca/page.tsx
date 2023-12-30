import Library from '@/components/ui/Layout/Library';
import MainLayout from '@/components/ui/Template';

const livros = async () => {
  return (
    <MainLayout>
      <Library />
    </MainLayout>
  );
};

export default livros;
