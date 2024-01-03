import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import Login from '@/components/ui/Forms';
import MainLayout from '@/components/ui/Template';
import authOptions from '@/lib/auth';
import styles from '@/styles/Login.module.css';
import routes from '@/utils/routes';

const Home = async () => {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect(routes.library);
  }

  return (
    <MainLayout>
      <section className={['flex-center', styles.login].join(' ')}>
        <Login />
      </section>
    </MainLayout>
  );
};

export default Home;
