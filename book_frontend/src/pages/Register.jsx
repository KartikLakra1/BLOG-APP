import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {

    const [username, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:8080/api/v1/user/register", {
                username, email, password
            });
            if (response.data.success) {
                alert(response.data.message);
                navigate("/login")
            } else {
                alert(response.data.message)
            }

        } catch (error) {
            console.log(error);
            alert("something went wrong")
        }
    }

    return (
        <div className="min-h-[100vh] w-[100%] relative z-0">
            <div className="h-[50vh] bg-gradient-to-tr from-blue-950 to-blue-700">

            </div>
            <div className="h-[50vh] bg-gradient-to-tr from-slate-600 to-slate-800">

            </div>

            <div className="bg-white text-black absolute top-[10%] left-4 sm:left-32 lg:left-44 shadow-xl w-[90%] sm:w-[75%] lg:w-[50%]  flex flex-col  sm:flex-row  items-center justify-center min-h-[50vh] bg-[url('/assets/image1.jpg')] bg-center bg-cover opacity-80 p-7">

                <div className="w-[100%] sm:w-[60%] opacity-100 text-white bg-slate-600/20 backdrop-blur-xl p-2 lg:p-5 text-xl md:text-2xl gap-6 flex items-start justify-start flex-col">
                    <h1 className="text-3xl font-bold text-yellow-200">Registeration Form</h1>
                    <form className="flex items-center justify-center flex-col w-[100%]" onSubmit={handleSubmit}>
                        <div className="flex flex-col items-start justify-center">
                            <label>Name</label>
                            <input type="text" className="text-black p-1" value={username}
                                onChange={(e) => setName(e.target.value)}
                                required />
                        </div>

                        <div className="flex flex-col items-start justify-center">
                            <label>Email</label>
                            <input type="text" className="text-black p-1" value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required />
                        </div>

                        <div className="flex flex-col items-start justify-center">
                            <label>Password</label>
                            <input type="text" className="text-black p-1" value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required />
                        </div>

                        <button type="submit" className="mt-4 mb-4 bg-white text-black p-2 rounded-lg font-semibold">
                            Submit
                        </button>
                    </form>
                    <h3>If already registered ! <Link to={"/login"}>Login</Link></h3>
                </div>
            </div>

        </div>
    )
};

export default Register;
