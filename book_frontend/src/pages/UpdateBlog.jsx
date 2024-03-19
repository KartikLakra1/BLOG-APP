import React from "react";
import Dashboardside from "../Components/Dashboardside";

const UpdateBlog = () => {
    return (
        <div className="flex items-center justify-between flex-col lg:flex-row w-[100%] gap-5 p-5">
            <div className="lg:basis-[30%]  w-full" >
                <Dashboardside />
            </div>
            <div className="lg:basis-[70%] bg-yellow-300 w-full min-h-10">

            </div>
        </div>
    )
};

export default UpdateBlog;
