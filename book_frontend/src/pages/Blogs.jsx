import axios from "axios";
import React, { useEffect, useState } from "react";
import BlogCard from "../Components/BlogCard";
import ImageSlider from "../Components/ImageSlider";


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

    const images = [
        "/assets/gojo.jpg",
        '/assets/childluffy.png',
        '/assets/dante.jpg',
        '/assets/gojo.jpg',
        '/assets/monkey.jpg'
    ];

    useEffect(() => {
        getAllBlogs();
    }, [])

    return (
        <div className="w-[100%]  bg-blend-darken  bg-center bg-cover  bg-white">



            <ImageSlider images={images} />

            <div className="w-full h-10vh bg-black text-white p-3 " >
                <h1 className="text-5xl font-bold text-center font-serif">BLOGS</h1>
            </div>

            <div className="w-[100%] p-4 bg-gradient-to-tr from-pink-950 to-pink-500 flex items-center justify-around">
                {
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  min-h-[60vh] text-center w-full">{blogs && blogs.map((blog) => <BlogCard
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
