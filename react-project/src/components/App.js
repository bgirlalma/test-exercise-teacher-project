import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Layout from "./Layout";
import TeacherPage from "../pages/TeachersPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
        </Route>

        <Route>
          <Route path="/teachers" element={<TeacherPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
