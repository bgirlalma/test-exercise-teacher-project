import { Outlet } from 'react-router-dom';
import Header from './header/header';
import { Suspense } from 'react';
import Loader from './loader/loader';

const Layout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      </>
  );
};

export default Layout;
