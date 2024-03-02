import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import { IoSearchOutline } from "react-icons/io5";

const Navigation = () => {
    const [toggle, setToggle] = useState(false);
    const [profile, setProfile] = useState(false);

    return (
        <>
            <div className=" md:flex justify-around items-center bg-gradient-to-r from-slate-600 to-slate-900 text-white pt-6 pb-7 relative">
                <div className="text-left pl-1 z-20">
                    <h1 className="text-5xl font-bold text-yellow-500">BLOG</h1>
                </div>

                <div className="md:flex hidden items-center justify-center">
                    <input type="text" placeholder="search" className="p-1 text-black"></input>
                    <span className="cursor-pointer"><IoSearchOutline size={30} className="border-2 bg-black p-1 " /></span>
                    <div className="flex items-center justify-center gap-4 ml-4">
                        <h1 className="font-semibold cursor-pointer text-2xl">BLOGS</h1>
                        <h1 className="font-semibold cursor-pointer text-2xl">MY BLOGS</h1>
                    </div>
                </div>

                <div className="md:flex hidden relative">
                    <CgProfile size={40} onClick={() => setProfile(!profile)} />
                    {
                        profile ? (<div className="absolute top-12 bg-slate-800 min-w-[120px] right-0 p-2 gap-4 text-left">
                            <h1 className="cursor-pointer hover:bg-slate-400 p-1 rounded-md">Login</h1>
                            <h1 className="cursor-pointer hover:bg-slate-400 p-1 rounded-md">Register</h1>
                            <h1 className="cursor-pointer hover:bg-slate-400 p-1 rounded-md">Dashboard</h1>
                        </div>) : (<></>)
                    }
                </div>

                <div className="absolute md:hidden right-8 top-8 cursor-pointer">
                    <GiHamburgerMenu size={30} onClick={() => setToggle(!toggle)} />
                </div>

                {/*Mobile view style */}

                <div className={`absolute h-[70vh] w-full md:hidden flex flex-col items-center justify-start  gap-7 ${toggle ? `left-0` : `left-[-100%]`} duration-1000 text-white bg-gradient-to-r from-slate-700 to-slate-950 z-0 top-24 bg-transparent/2`}>
                    <div className="flex items-center justify-center flex-col mt-11 p-5 gap-10">
                        <div className="flex items-center justify-center">
                            <input type="text" placeholder="search" className="p-1 text-black"></input>
                            <span className="cursor-pointer"><IoSearchOutline size={30} className="border-2 bg-black p-1 " /></span>
                        </div>
                        <div className="flex items-center justify-center gap-8 ml-4 flex-col">
                            <h1 className="font-bold cursor-pointer text-2xl">BLOGS</h1>
                            <h1 className="font-bold cursor-pointer text-2xl">MY BLOGS</h1>
                        </div>
                    </div>

                    <div className="absolute bottom-40 left-50">
                        <CgProfile size={40} onClick={() => setProfile(!profile)} />
                        {
                            profile ? (<div className="absolute top-12 bg-slate-800 min-w-[150px] left-0 p-2 gap-4 text-left ">
                                <h1 className="cursor-pointer hover:bg-slate-400 p-1 rounded-md">Login</h1>
                                <h1 className="cursor-pointer hover:bg-slate-400 p-1 rounded-md">Register</h1>
                                <h1 className="cursor-pointer hover:bg-slate-400 p-1 rounded-md">Dashboard</h1>
                            </div>) : (<></>)
                        }
                    </div>

                </div>


            </div >
        </>
    )
};

export default Navigation;
