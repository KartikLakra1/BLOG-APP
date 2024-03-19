import React, { useEffect, useState } from "react";
import Dashboardside from "../Components/Dashboardside";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CreateBlog = () => {

    const [user, setuser] = useState([]);
    const [inputs, setInputs] = useState({
        title: "",
        description: "",
        image: "",
    })
    const navigate = useNavigate()

    const getuserinfo = async () => {
        try {
            const id = localStorage.getItem('userId');
            console.log(id);
            const { data } = await axios.get(`http://localhost:8080/api/v1/user/userinfo/${id}`);

            if (data?.success) {
                setuser(data?.user);
                console.log(user.email);
            }

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getuserinfo();
    }, [])

    const handleChange = (e) => {
        setInputs(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post('http://localhost:8080/api/v1/blog/create-blog', {
                title: inputs.title,
                description: inputs.description,
                image: inputs.image,
                useremail: user.email

            });
            if (data?.success) {
                alert("Blog created")
                navigate("/myblogs")
            }
        } catch (error) {
            console.log(error);
        }
    }




    return (

        <div className="flex items-center justify-between flex-col lg:flex-row w-[100%] gap-5 p-5">
            <div className="lg:basis-[30%]  w-full" >
                <Dashboardside />
            </div>
            <div className="lg:basis-[70%] bg-[url('/assets/dante.jpg')] bg-cover bg-center w-full min-h-10 flex items-center justify-center p-10">
                <form className="p-3 bg-slate-600/50 w-[80%] lg:w-[50%] backdrop-blur-sm flex items-start justify-center flex-col gap-6" onSubmit={handleSubmit}>
                    <div className="flex flex-col items-start justify-center w-[100%]">
                        <label className="text-2xl text-white font-bold">Title</label>
                        <input type="text" className="text-black p-1 w-[90%] text-lg"
                            name="title"
                            onChange={handleChange}
                            value={inputs.title}
                            required />
                    </div>

                    <div className="flex flex-col items-start justify-center w-[100%]">
                        <label className="text-2xl text-white font-bold">Image URL</label>
                        <input type="text" className="text-black p-1 w-[90%] text-lg "
                            name="image"
                            onChange={handleChange}
                            value={inputs.image}
                            required />
                    </div>

                    <div className="flex flex-col items-start justify-center w-[100%]">
                        <label className="text-2xl text-white font-bold">Description</label>
                        <textarea className="w-[90%] h-[150px] lg:h-[80px] overflow-scroll p-1 text-lg resize-none"
                            name="description"
                            onChange={handleChange}
                            value={inputs.description}
                            required></textarea>
                    </div>



                    <button type="submit" className="mt-4 mb-4 bg-white text-black p-2 rounded-lg font-semibold">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
};

export default CreateBlog;
