import { ToastContainer } from 'react-toastify';
import { getServerSession } from 'next-auth';
import Login from '@/components/ui/Forms';
import authOptions from '@/lib/auth';
import styles from '@/styles/Login.module.css';
import '@/styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';

const Home = async () => {
  const session = await getServerSession(authOptions);

  return (
    <>
      <main className="container">
        <section className={['flex-center', styles.login].join(' ')}>
          <Login session={session} />
        </section>
      </main>
      <ToastContainer
        position="bottom-center"
        autoClose={4000}
        newestOnTop={false}
        theme="dark"
        pauseOnFocusLoss
        pauseOnHover
      />
    </>
  );
};

export default Home;
