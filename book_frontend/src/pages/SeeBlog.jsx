import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import BlogCard from "../Components/BlogCard";

const SeeBlog = () => {
  const params = useParams();
  const [blog, setBlog] = useState({});
  const navigate = useNavigate();

  console.log(params.id);

  // get product
  const getProduct = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:8080/api/v1/blog/get-blog/${params.id}`
      );

      setBlog(data?.blog);

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (params?.id) getProduct();
  }, [params.id]);

  return (
    <div className="flex items-center flex-col justify-center gap-6 w-[100%] lg:p-11 p-3 pt-5 pb-5 bg-neutral-950 ">
      <div className="border-4 border-white p-1">
        <div className="h-[200px] w-full md:h-[210px] lg:h-auto lg:w-full rounded-md border-black border mb-3">
          <img src={blog.image} alt="card image" className="h-full w-full" />
        </div>

        <h1 className=" text-xl md:text-xl  lg:text-2xl font-semibold font-sans p-2 text-left text-white uppercase underline pb-4">
          {blog.title}
        </h1>

        <p className=" text-md lg:text-md text-left text-white p-8">
          {blog.description} ...
        </p>
      </div>
    </div>
  );
};

export default SeeBlog;
