import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import { lazy } from "react";

const HomePage = lazy(() => import('../pages/HomePage'));
const UserLogIn = lazy(() => import('./modal/login/login'));
const UserRegistration = lazy(() => import("./modal/registration/registration"))
const TeacherPage = lazy(() => import('../pages/TeachersPage'));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="login" element={<UserLogIn/>}/>
          <Route path="register" element={<UserRegistration/>}/>
          <Route path="teachers" element={<TeacherPage/>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
