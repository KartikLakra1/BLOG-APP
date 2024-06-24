import React, { useEffect, useState } from "react";
import BlogCard from "../Components/BlogCard";
import axios from "axios";
import { NavLink } from "react-router-dom";

const UserBlog = () => {
    const [blogs, setBlogs] = useState([]);
    const [total, setTotal] = useState(0);

    // get all user Blogs
    const getUserBlogs = async () => {
        try {
            const id = localStorage.getItem('userId');
            const { data } = await axios.get(`http://localhost:8080/api/v1/blog/user-blog/${id}`);

            if (data?.success) {
                setBlogs(data?.userBlog.blogs);
                setTotal(data.totalCount);
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getUserBlogs();
    }, []);

    return (
        <div className="w-[100%] bg-neutral-950 min-h-screen">

            <h1 className="text-2xl p-4 bg-black text-white ">
                {(total > 0) ?
                    <h1>Total blogs : {total}</h1>
                    :
                    <h1>
                        <span className="text-red-200 font-serif text-5xl">0 </span>
                        Blog found try writing something
                        <NavLink to={'/userdashboard/createblog'}><h1 className="font-bold cursor-pointer text-xl bg-white text-black p-2 mt-2 md:w-fit w-full hover:bg-slate-300 rounded-md text-center">WRITE</h1></NavLink>
                    </h1>}

            </h1>

            <div className="w-[100%] md:p-10  bg-neutral-950 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5 p-2 ">


                {blogs && blogs.map((blog) => <BlogCard
                    title={blog.title}
                    image={blog.image}
                    description={blog.description}
                    name={blog.author.username}
                    id={blog._id}
                    email={blog.author.email}
                    date={blog.createdAt}
                    key={blog._id}
                    isUser={true}

                />)}

            </div>

        </div>

    )
};

export default UserBlog;
