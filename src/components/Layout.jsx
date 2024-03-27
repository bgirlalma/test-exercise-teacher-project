import { Outlet } from 'react-router-dom';
import Header from './header/header';
import { Suspense } from 'react';
import { InfinitySpin } from 'react-loader-spinner';

const Layout = () => {
  return (
    <>
      <Header />
      <Suspense
        fallback={
          <InfinitySpin
            visible={true}
            width="600"
            color="#4fa94d"
            ariaLabel="infinity-spin-loading"
          />
        }
      >
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
