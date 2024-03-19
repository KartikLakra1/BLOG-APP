import React, { useEffect, useState } from "react";
import Dashboardside from "../Components/Dashboardside";
import axios from "axios";


const UserDashboard = () => {

    const [user, setuser] = useState([]);

    const getuserinfo = async () => {
        try {
            const id = localStorage.getItem('userId');
            console.log(id);
            const { data } = await axios.get(`http://localhost:8080/api/v1/user/userinfo/${id}`);

            if (data?.success) {
                setuser(data?.user);
            }

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getuserinfo();
    }, [])

    return (
        <div className="flex items-center justify-between flex-col lg:flex-row w-[100%] gap-5 p-5">
            <div className="lg:basis-[30%]  w-full" >
                <Dashboardside />
            </div>
            <div className="lg:basis-[70%] bg-yellow-300 w-full min-h-10">
                <h1>Username : {user.username}</h1>
                <h1>Email : {user.email}</h1>
            </div>
        </div>

    )
};

export default UserDashboard;
