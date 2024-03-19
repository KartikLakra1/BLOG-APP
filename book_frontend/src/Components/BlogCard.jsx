import React from "react";

const BlogCard = ({ title, image, description }) => {
    return (
        <div className="w-[350px] lg:w-[500px] shadow-2xl bg-slate-100 p-2 rounded-lg drop-shadow-2xl m-2">

            <h1 className="min-h-[30px]  text-2xl font-bold ml-3">{title}</h1>

            <div className="h-[250px] w-[330px] lg:h-[350px] lg:w-[450px] p-2 border-black border mt-5 mb-3">
                <img src={image} alt="card image" className="h-full w-full" />
            </div>

            <p className="m-2 text-xl">{description}</p>

        </div>
    )
};

export default BlogCard;
