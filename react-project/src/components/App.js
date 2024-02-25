import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Layout from "./Layout";
import TeacherPage from "../pages/TeachersPage";
import UserLogIn from "./modal/login/login";
import UserRegistration from "./modal/registration/registration";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/login" element={<UserLogIn />} />
          <Route path="/register" element={<UserRegistration/>} />
        </Route>

        <Route>
          <Route path="/teachers" element={<TeacherPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
