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
        <div>
            {
                <div>{blogs && blogs.map((blog) => <BlogCard
                    title={blog.title}
                    image={blog.image}
                    description={blog.description}

                />)}</div>
            }
        </div>


    )
};

export default Blogs;
