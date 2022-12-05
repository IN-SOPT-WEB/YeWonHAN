import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "../pages/Main";

export default function Router({ id }) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
}
