import React from "react";

const BlogCard = ({ title, image, description, name, email, date }) => {
    return (
        <div className="w-[350px] lg:w-[500px] shadow-2xl bg-slate-100 p-2 rounded-lg drop-shadow-2xl m-2" >

            <h1 className="min-h-[30px]  text-2xl font-bold ml-1">{title}</h1>
            <p className="text-red-500">Created at : {date}</p>

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
