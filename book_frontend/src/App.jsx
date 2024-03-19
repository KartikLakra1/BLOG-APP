import React from "react";
import Layout from "./Components/Layout";
import { Routes, Route } from 'react-router-dom';
import Blogs from "./pages/Blogs";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Navigation from "./Components/Navigation";
import UserBlog from "./pages/UserBlog";
import UserDashboard from "./pages/UserDashboard";
import CreateBlog from "./pages/CreateBlog";
import UpdateBlog from "./pages/UpdateBlog";

const App = () => {
  return (
    <>
      <Layout>

        <Routes>
          <Route path="/" element={<Blogs />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/myblogs" element={<UserBlog />} />
          <Route path="/userdashboard" element={<UserDashboard />} />
          <Route path="/userdashboard/createblog" element={<CreateBlog />} />
          <Route path="/userdashboard/updateblog" element={<UpdateBlog />} />


        </Routes>

      </Layout>
    </>
  )

};

export default App;
