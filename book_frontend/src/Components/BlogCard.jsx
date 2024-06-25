import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

const BlogCard = ({
  title,
  image,
  description,
  name,
  email,
  date,
  id,
  isUser,
}) => {
  const navigate = useNavigate();
  const handleEdit = () => {
    navigate(`/blog-details/${id}`);
  };

  const handleDelete = async () => {
    try {
      const { data } = await axios.delete(
        `http://localhost:8080/api/v1/blog/delete-blog/${id}`
      );
      if (data?.success) {
        alert("Blog deleted successfully");
        navigate("/myblogs");
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-[100%] md:w-[90%] lg:w-[100%] shadow-3xl bg-white rounded-lg  text-black p-1">
      <div className="h-[150px] w-full md:h-[210px] lg:h-[200px] lg:w-full rounded-md border-black border mb-3">
        <img src={image} alt="card image" className="h-full w-full" />
      </div>

      <h1 className=" text-lg  lg:text-xl font-semibold font-sans p-2 text-left">
        {title}
      </h1>

      <hr className="mb-3" />

      <p className="m-2 text-md lg:text-md text-left">
        {description.substring(0, 50)} ...
      </p>

      {isUser && (
        <div className="flex items-center justify-center gap-6 m-2">
          <p
            className="border-red-600 border-2 p-1 bg-red-600 text-white font-bold rounded-md cursor-pointer"
            onClick={handleDelete}>
            Delete
          </p>
          <p
            className="border-blue-400 border-2 p-1 bg-blue-400 rounded-md text-white font-bold cursor-pointer"
            onClick={handleEdit}>
            Edit
          </p>
        </div>
      )}

      <Link to={`/blog/${id}`}>
        <div className="border-4 border-black">
          <h1 className="flex items-end justify-end ">checkout - </h1>
        </div>
      </Link>
    </div>
  );
};

export default BlogCard;
