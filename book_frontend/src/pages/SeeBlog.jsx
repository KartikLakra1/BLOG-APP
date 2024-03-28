import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import BlogCard from "../Components/BlogCard";

const SeeBlog = () => {
    const params = useParams();
    const [blog, setBlog] = useState({});
    const navigate = useNavigate();


    console.log(params.id)

    // get product
    const getProduct = async () => {
        try {
            const { data } = await axios.get(`http://localhost:8080/api/v1/blog/get-blog/${params.id}`);

            setBlog(data?.blog);

            console.log(blog);

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        if (params?.id) getProduct();
    }, [params.id])

    return (
        <div className="flex items-center flex-col justify-center gap-6 w-[100%] lg:p-11 p-3 pt-5 pb-5 bg-gradient-to-tr from-slate-950 to-slate-900" >



        </div>
    )
};

export default SeeBlog;
