import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Layout from "./Layout";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<HomePage />} />
        </Route>
</Routes>
    </div>
  );
}

export default App;
