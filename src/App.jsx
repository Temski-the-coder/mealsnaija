import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Toaster } from "react-hot-toast";
import "./App.css";
import PageLayout from "../Layout/PageLayout";
import MenuPage from "../Pages/MenuPage"
import AboutPage from '../Pages/AboutPage';

const App = () => {
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />

      <Routes>
        <Route path="/" element={<PageLayout />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </>
  );
};

export default App;

