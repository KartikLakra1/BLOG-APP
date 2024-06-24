import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import { IoSearchOutline } from "react-icons/io5";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { authActions } from "../redux/store";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
    let isLogin = useSelector((state) => state.isLogin);
    isLogin = isLogin || localStorage.getItem("userId");
    console.log(isLogin);

    const [toggle, setToggle] = useState(false);
    const [profile, setProfile] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        try {
            dispatch(authActions.logout());
            alert("logout successful")
            navigate('/login')
            localStorage.clear();

        } catch (error) {
            console.log(error);
        }
    }


    return (
        <>
            <div className=" md:flex justify-around items-center bg-neutral-950 text-white pt-6 pb-7  z-50 sticky">
                <div className="text-left pl-1 z-20">
                    <h1 className="lg:text-5xl text-5xl md:text-4xl font-bold text-yellow-500 font-serif">bloglify</h1>
                </div>

                <div className="md:flex hidden items-center justify-center">

                    <div className="flex items-center justify-center gap-4 ml-4">

                        <NavLink to={'/blogs'}><h1 className="font-semibold cursor-pointer text-xl bg-black p-2 rounded-lg">ALL BLOGS</h1></NavLink>

                        {
                            isLogin ? <>

                                <NavLink to={"/myblogs"}><h1 className="font-semibold cursor-pointer text-xl">MY BLOGS</h1></NavLink>
                                <NavLink to={'/userdashboard/createblog'}><h1 className="font-semibold cursor-pointer text-xl">WRITE</h1></NavLink>
                            </> : <><h2 className="text-red-400">Login to write blog</h2></>
                        }

                    </div>
                </div>

                <div className="md:flex hidden relative ">

                    {

                        isLogin ? <>

                            <div className="flex items-center justify-center">
                                <h1 className="cursor-pointer hover:bg-slate-400 p-1 rounded-md" onClick={handleLogout}>Logout</h1>
                                <NavLink to={'/userdashboard'}>
                                    <CgProfile />
                                </NavLink>
                            </div>


                        </> : <>

                            <div className="">
                                <NavLink to={'/login'}><h1 className="cursor-pointer hover:bg-slate-300 hover:text-black p-1 rounded-md">Login</h1></NavLink>

                            </div>


                        </>


                    }
                </div>

                <div className="absolute md:hidden right-8 top-8 cursor-pointer">
                    <GiHamburgerMenu size={30} onClick={() => setToggle(!toggle)} />
                </div>

                {/*Mobile view style */}

                <div className={`absolute min-h-[20vh] w-full md:hidden flex flex-col items-center justify-start  gap-1 ${toggle ? `left-0` : `left-[-100%]`} duration-2000 text-white bg-neutral-950 z-0 top-24 bg-transparent/2`}>
                    <div className="flex w-full items-start justify-center flex-col  pl-2 gap-5">
                        <div className="flex items-center justify-center">

                        </div>
                        <div className="flex items-start w-full justify-center gap-2 ml-4 flex-col">
                            <NavLink to={"/blogs"}><h1 className="font-semibold cursor-pointer text-2xl">ALL BLOGS</h1></NavLink>
                            {
                                isLogin ? <>
                                    <NavLink to={"/myblogs"}><h1 className="font-semibold cursor-pointer text-2xl">MY BLOGS</h1></NavLink>
                                    <NavLink to={'/userdashboard/createblog'}><h1 className="font-semibold cursor-pointer text-xl">WRITE</h1></NavLink>
                                </> : <></>
                            }
                        </div>
                    </div>

                    <div className="mb-5">

                        {

                            isLogin ? <>

                                <div className="flex items-center justify-center gap-2">
                                    <h1 className="cursor-pointer hover:bg-slate-400 p-1 rounded-md text-xl" onClick={handleLogout}>Logout</h1>
                                    <NavLink to={'/userdashboard'}>
                                        <CgProfile size={20} />
                                    </NavLink>
                                </div>


                            </> : <>

                                <div className="">
                                    <NavLink to={'/login'}><h1 className="cursor-pointer hover:bg-slate-400 p-1 rounded-md">Login</h1></NavLink>

                                </div>


                            </>


                        }

                    </div>

                </div>


            </div >
        </>
    )
};

export default Navigation;
