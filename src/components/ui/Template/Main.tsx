import { ToastContainer } from 'react-toastify';
import { IMainProps } from './Main.types';

const MainLayout = ({ children }: IMainProps) => (
  <>
    <main className="container">{children}</main>
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

export default MainLayout;
