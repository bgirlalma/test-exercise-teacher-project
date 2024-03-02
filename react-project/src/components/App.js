import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import { lazy } from 'react';
import RestrictedRoute from './RestrictedRoute';
import { PrivateRouter } from './PrivateRouter';
import ReadMore from './teachers/teacher-items/readmore/redmore';

const HomePage = lazy(() => import('../pages/HomePage'));
const UserLogIn = lazy(() => import('./modal/login/login'));
const UserRegistration = lazy(
  () => import('./modal/registration/registration')
);
const TeacherPage = lazy(() => import('../pages/TeachersPage'));
const FavoritePage = lazy(() => import('../pages/FavoritePage'));

function App() {
  
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />}></Route>
          <Route
            path="login"
            element={
              <RestrictedRoute redirectTo="/teachers" component={UserLogIn} />
            }
          />
          <Route
            path="register"
            element={
              <RestrictedRoute
                redirectTo="/teachers"
                component={UserRegistration}
              />
            }
          />

          <Route
            path="teachers"
            element={
              <PrivateRouter redirectTo="/login" component={TeacherPage} />
            }
          >
            <Route path='readmore' element={<ReadMore/> }></Route>
          </Route>

          <Route
            path="favorite"
            element={
              <PrivateRouter redirectTo="/login" component={FavoritePage} />
            }
          ></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
