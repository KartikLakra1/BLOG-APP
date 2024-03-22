import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const BlogCard = ({ title, image, description, name, email, date, id, isUser }) => {

    const navigate = useNavigate()
    const handleEdit = () => {
        navigate(`/blog-details/${id}`)
    }

    const handleDelete = async () => {
        try {
            const { data } = await axios.delete(`http://localhost:8080/api/v1/blog/delete-blog/${id}`)
            if (data?.success) {
                alert("Blog deleted successfully")
                navigate("/myblogs")
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="w-[350px] lg:w-[500px] shadow-2xl bg-slate-100 p-2 rounded-lg drop-shadow-2xl m-2" >

            <h1 className="min-h-[30px]  text-2xl font-bold ml-1">{title}</h1>
            <p className="text-red-500">Created at : {date}</p>

            {
                isUser && (
                    <div className="flex items-center justify-center gap-6 m-2">
                        <p className="border-red-600 border-2 p-1 bg-red-600 text-white font-bold rounded-md cursor-pointer" onClick={handleDelete}>Delete</p>
                        <p className="border-blue-400 border-2 p-1 bg-blue-400 rounded-md text-white font-bold cursor-pointer" onClick={handleEdit}>Edit</p>
                    </div>
                )
            }

            <div className="h-[250px] w-[330px] lg:h-[350px] lg:w-[450px] p-2 border-black border mt-5 mb-3">
                <img src={image} alt="card image" className="h-full w-full" />
            </div>

            <p className="m-2 text-xl">{description}</p>

            {
                (name || email) ?
                    <>
                        <p className="font-bold">Posted By : <span className="font-normal">{name}</span></p>
                        <p className="font-bold">Contact Info : <span className="font-normal">{email}</span></p>
                    </> : <></>
            }


        </div>
    )
};

export default BlogCard;
