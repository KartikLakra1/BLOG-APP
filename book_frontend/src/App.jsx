import React from "react";
import Layout from "./Components/Layout";
import { Routes, Route } from 'react-router-dom';
import Blogs from "./pages/Blogs";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Navigation from "./Components/Navigation";

const App = () => {
  return (
    <>
      <Layout>

        <Routes>
          <Route path="/" element={<Blogs />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/blogs" element={<Blogs />} />


        </Routes>

      </Layout>
    </>
  )

};

export default App;
