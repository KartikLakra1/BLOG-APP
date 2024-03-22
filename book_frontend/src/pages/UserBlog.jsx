import React, { useEffect, useState } from "react";
import BlogCard from "../Components/BlogCard";
import axios from "axios";

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
        <div className="w-[100%]">
            <div className="w-[100%]   mt-6 mb-7 ">
                <h1 className="text-2xl text-black">Total blogs : {total}</h1>
                {
                    <div className="grid grid-cols-1 lg:grid-cols-2 w-[100%] gap-4  bg-slate-400 min-h-[60vh] text-center">{blogs && blogs.map((blog) => <BlogCard
                        title={blog.title}
                        image={blog.image}
                        description={blog.description}
                        name={blog.author.username}
                        id={blog._id}
                        email={blog.author.email}
                        date={blog.createdAt}
                        key={blog._id}
                        isUser={true}

                    />)}</div>
                }
            </div>

        </div>

    )
};

export default UserBlog;
