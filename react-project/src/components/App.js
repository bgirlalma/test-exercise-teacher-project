import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import { lazy } from "react";
import { RestrictedRoute } from "./RestrictedRoute";
import { PrivateRouter } from "./PrivateRouter";

const HomePage = lazy(() => import('../pages/HomePage'));
const UserLogIn = lazy(() => import('./modal/login/login'));
const UserRegistration = lazy(() => import("./modal/registration/registration"))
const TeacherPage = lazy(() => import('../pages/TeachersPage'));

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <RestrictedRoute redirectTo="/teachers" component={HomePage} />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/teachers" component={UserLogIn} />
            }
          />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/teachers"
                component={UserRegistration}
              />
            }
          />
          <Route
            path="/teachers"
            element={
              <PrivateRouter redirectTo="/login" component={TeacherPage} />
            }
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
