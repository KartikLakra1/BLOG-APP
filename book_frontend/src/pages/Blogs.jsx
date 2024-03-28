import axios from "axios";
import React, { useEffect, useState } from "react";
import BlogCard from "../Components/BlogCard";
import ImageSlider from "../Components/ImageSlider";
import Typewriter from 'typewriter-effect';


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
        <div className="w-[100%]  bg-center bg-cover  bg-white">

            <div className="w-full h-[10vh] text-center bg-black flex items-center justify-center">
                <p className="text-white text-xl flex items-center justify-center gap-5">
                    BLOG YOUR
                    <span className="text-3xl md:text-5xl font-semibold bg-slate-950 text-yellow-600 p-2 rounded-lg">
                        <Typewriter
                            options={{
                                strings: ['Day', 'Routine', 'Everyday events', 'surrounding', 'family', 'gym'],
                                autoStart: true,
                                loop: true,

                            }}
                        />
                    </span>
                </p>
            </div>





            <ImageSlider images={images} />

            <div className="w-full h-10vh bg-black text-white p-3 " >
                <h1 className="text-5xl font-bold text-center font-serif">BLOGS</h1>
            </div>


            <div className="w-[100%] md:p-4 bg-gradient-to-tr from-slate-600 to-slate-300 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 content-center gap-5 p-2">


                {blogs && blogs.map((blog) => <BlogCard
                    id={blog._id}
                    title={blog.title}
                    image={blog.image}
                    description={blog.description}
                    name={blog.author.username}
                    email={blog.author.email}
                    date={blog.createdAt}
                    key={blog._id}
                    isUser={localStorage.getItem('userId') === blog.author._id}

                />)}

            </div>

        </div>


    )
};

export default Blogs;
