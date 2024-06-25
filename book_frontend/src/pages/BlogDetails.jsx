import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const BlogDetails = () => {
  const [user, setuser] = useState([]);
  const [inputs, setInputs] = useState({});
  const navigate = useNavigate();

  const [blog, setBlog] = useState({});
  const id = useParams().id;

  // get blog BlogDetails
  const getBlogDetails = async () => {
    try {
      // const { data } = await axios.get(`http://localhost:8080/api/v1/blog/get-blog/${id}`)
      const { data } = await axios.get(
        `https://blog-app-4sc3.onrender.com/api/v1/blog/get-blog/${id}`
      );
      if (data?.success) {
        setBlog(data?.blog);
        setInputs({
          title: data?.blog.title,
          description: data?.blog.description,
          image: data?.blog.image,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBlogDetails();
  }, [id]);

  console.log(blog);

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      //   const { data } = await axios.put(
      //     `http://localhost:8080/api/v1/blog/update-blog/${id}`,
      //     {
      //       title: inputs.title,
      //       description: inputs.description,
      //       image: inputs.image,
      //     }
      //   );

      const { data } = await axios.put(
        `https://blog-app-4sc3.onrender.com/api/v1/blog/update-blog/${id}`,
        {
          title: inputs.title,
          description: inputs.description,
          image: inputs.image,
        }
      );

      if (data?.success) {
        alert("Blog updated successfully");
        navigate("/myblogs");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className=" bg-[url('/assets/dante.jpg')] bg-cover bg-center w-full min-h-10 flex items-center justify-center p-10">
        <form
          className="p-3 bg-slate-600/50 w-[80%] lg:w-[50%] backdrop-blur-sm flex items-start justify-center flex-col gap-6"
          onSubmit={handleSubmit}>
          <div className="flex flex-col items-start justify-center w-[100%]">
            <label className="text-2xl text-white font-bold">Title</label>
            <input
              type="text"
              className="text-black p-1 w-[90%] text-lg"
              name="title"
              onChange={handleChange}
              value={inputs.title}
              required
            />
          </div>

          <div className="flex flex-col items-start justify-center w-[100%]">
            <label className="text-2xl text-white font-bold">Image URL</label>
            <input
              type="text"
              className="text-black p-1 w-[90%] text-lg "
              name="image"
              onChange={handleChange}
              value={inputs.image}
              required
            />
          </div>

          <div className="flex flex-col items-start justify-center w-[100%]">
            <label className="text-2xl text-white font-bold">Description</label>
            <textarea
              className="w-[90%] h-[150px] lg:h-[80px] overflow-scroll p-1 text-lg resize-none"
              name="description"
              onChange={handleChange}
              value={inputs.description}
              required></textarea>
          </div>

          <button
            type="submit"
            className="mt-4 mb-4 bg-white text-black p-2 rounded-lg font-semibold">
            UPDATE
          </button>
        </form>
      </div>
    </div>
  );
};

export default BlogDetails;
