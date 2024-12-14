import React from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import "./App.css";

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import PostDetail from "./pages/Post/PostDetail";
import ProtectedRoute from "./components/ProtectedRoute";
import LocationAuthPage from "./pages/LocationAuth/LocationAuthPage";
import MoreComments from "./components/MoreComments";

const PageLayout = () => (
  <div className="w-[390px] h-[844px] mx-auto bg-gray-100 flex flex-col">
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
            <Route path="/" element={<ProtectedRoute />} />
            <Route path="/location-auth" element={<LocationAuthPage />} />
            <Route path="/post/:id" element={<PostDetail />} />
            <Route path="/post/:id/comments" element={<MoreComments />} />

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
