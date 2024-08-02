import React from "react";
import { Navbar } from "../layouts/Navbar";
import { SignUp } from "../components/SignUp";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const HomePage = () => {
    return (
        // whole page (outer div)
        <div className="flex justify-center items-center h-screen bg-white">
            <div className="flex justify-center items-center p-8 rounded-md bg-[#121212] text-white">
                <div className="flex flex-col gap-y-5">
                    <div className="flex flex-row gap-x-4">
                        <div>
                            <img src="https://i.pinimg.com/736x/7b/f5/29/7bf5297b1565febb2359f5cd950399c0.jpg" alt="mingyu" className="rounded-full w-24"/>
                        </div>
                        <div className="flex flex-col justify-center">
                            <div className="text-3xl font-semibold">
                                kristenwonton
                            </div>
                            <div className="text-small">
                                17 Followers • 17 Following
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-2">
                        <div className="text-lg font-semibold">
                            Playlists
                        </div>
                        <div className="flex flex-row gap-x-4">
                            <Link to="/about">
                                <motion.img src="https://i.pinimg.com/474x/57/47/ae/5747aec4662d057ab2259eb5f0781fbc.jpg" alt="loopy1" className="w-24 h-24" whileHover={{scale: 1.2}} />
                            </Link>
                            <Link to="/interests">
                                <motion.img src="https://i.pinimg.com/474x/d9/63/49/d963497e59f01fdafb781caae959d601.jpg" alt="loopy2" className="w-24 h-24" whileHover={{scale: 1.2}}/>
                            </Link>
                            <motion.img src="https://i.pinimg.com/564x/1b/f3/64/1bf364842157f0dbf320e1e77a4492ee.jpg" alt="loopy3" className="w-24 h-24" whileHover={{scale: 1.2}}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;