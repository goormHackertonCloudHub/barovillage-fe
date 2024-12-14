import React from "react";
import { BrowserRouter, Outlet, Route, Router, Routes } from "react-router-dom";
import "./App.css";

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import MainPage from "./pages/Main/MainPage";

const PageLayout = () => (
  <div className="w-[1125px] h-[2208px] mx-auto bg-gray-100 flex flex-col">
    <Header />
    <div className="flex-1 overflow-y-auto">
      <Outlet />
    </div>
    <Navbar />
  </div>
);

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<PageLayout />}>
            <Route path="/" element={<MainPage />} />
          {/* <Route path="/page1" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="/page3" element={<Page3 />} />
          <Route path="/page4" element={<Page4 />} />
          <Route path="/search" element={<SearchPage />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
