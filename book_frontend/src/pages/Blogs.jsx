import axios from "axios";
import React, { useEffect, useState } from "react";
import BlogCard from "../Components/BlogCard";


const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    const getAllBlogs = async () => {
        try {
            const { data } = await axios.get('http://localhost:8080/api/v1/blog/all-blog');
            if (data && data.success) {
                setBlogs(data?.blogs)
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getAllBlogs();
    }, [])

    return (
        <div className="w-[100%]">
            <div className="w-[100%]   mt-6 mb-7 ">
                {
                    <div className="grid grid-cols-1 lg:grid-cols-2 w-[100%] gap-4  bg-slate-400 min-h-[60vh] text-center">{blogs && blogs.map((blog) => <BlogCard
                        id={blog._id}
                        title={blog.title}
                        image={blog.image}
                        description={blog.description}
                        name={blog.author.username}
                        email={blog.author.email}
                        date={blog.createdAt}
                        key={blog._id}
                        isUser={localStorage.getItem('userId') === blog.author._id}

                    />)}</div>
                }
            </div>

        </div>


    )
};

export default Blogs;
