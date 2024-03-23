import { Outlet } from "react-router-dom";
import Header from "./header/header";
import { Suspense } from "react";

const Layout = () => {
    return (
      <div>
        <Header />
        <Suspense fallback={<>Loading...</>}>
          <Outlet />
        </Suspense>
      </div>
    );
}

export default Layout;