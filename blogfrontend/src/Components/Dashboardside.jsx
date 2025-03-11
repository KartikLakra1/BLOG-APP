import React from "react";
import { NavLink } from 'react-router-dom';

const Dashboardside = () => {
    return (
        <div className="border-black border-none p-3 m-4 text-white bg-neutral-950">
            <NavLink to="/userdashboard">
                <h1 className="text-2xl font-semibold border-2 border-red-700 p-1 hover:cursor-pointer hover:bg-slate-500 duration-700 hover:border-none">PROFILE</h1>
            </NavLink>

            <NavLink to={"/userdashboard/createblog"}>
                <h1 className="text-2xl font-semibold border-2 border-red-700 p-1 hover:cursor-pointer hover:bg-slate-500 duration-700 hover:border-none">CREATE BLOG</h1>
            </NavLink>

            <NavLink to={"/userdashboard/updateblog"}>
                <h1 className="text-2xl font-semibold border-2 border-red-700 p-1 hover:cursor-pointer hover:bg-slate-500 duration-700 hover:border-none">UPDATE BLOG</h1>
            </NavLink>





        </div>
    )
};

export default Dashboardside;
