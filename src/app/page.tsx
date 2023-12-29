import { getServerSession } from 'next-auth';
import Login from '@/components/ui/Forms';
import MainLayout from '@/components/ui/layout';
import authOptions from '@/lib/auth';
import styles from '@/styles/Login.module.css';

const Home = async () => {
  const session = await getServerSession(authOptions);

  return (
    <MainLayout>
      <section className={['flex-center', styles.login].join(' ')}>
        <Login session={session} />
      </section>
    </MainLayout>
  );
};

export default Home;
