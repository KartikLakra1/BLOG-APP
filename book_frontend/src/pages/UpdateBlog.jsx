import React from "react";
import Dashboardside from "../Components/Dashboardside";

const UpdateBlog = () => {
    return (
        <div className="flex items-start min-h-screen justify-between  flex-col lg:flex-row w-[100%] gap-5 p-5 bg-neutral-950">
            <div className="lg:basis-[30%]  w-full" >
                <Dashboardside />
            </div>
            <div className="lg:basis-[70%]  w-full min-h-10">

            </div>
        </div>
    )
};

export default UpdateBlog;
