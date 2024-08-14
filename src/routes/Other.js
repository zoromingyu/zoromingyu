import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

const Other = () => {

    return (
        <div className="flex justify-center items-center h-screen bg-white">
            <div className="flex flex-col justify-center p-8 rounded-md bg-[#121212] text-white gap-y-4">
                <div className="flex justify-center">
                    <div>
                        <img src="https://i.pinimg.com/474x/d9/63/49/d963497e59f01fdafb781caae959d601.jpg" alt="loopy2" className="w-36"/>
                    </div>
                </div>
                <div className="flex flex-col gap-y-2">
                    <div className="text-lg font-bold">likes</div>
                    <div className="flex flex-row items-center gap-x-2">
                        <img src="https://i.pinimg.com/736x/7b/f5/29/7bf5297b1565febb2359f5cd950399c0.jpg" alt="mingyu" className="rounded-full w-6"/>
                        <Link to="/"><div className="text-xs font-bold">kristenwonton</div></Link>
                    </div>
                    <div className="flex flex-col gap-y-2 text-sm">
                            <div className="flex flex-col justify-items-end">
                                <div className="font-bold">kpop</div>
                                <div>svt mingyu exo baekhyun</div>
                            </div>
                            <div className="flex flex-col">
                                <div className="font-bold">anime</div>
                                <div className="flex flex-col">
                                    <div>one piece hq jjk hxh</div>
                                    <div>mha demon slayer</div>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <div className="font-bold">kdrama</div>
                                <div className="flex flex-col justify-end">
                                    <div>reply 1988 alchemy of souls</div>
                                    <div>queen of tears atypical family</div>
                                    <div>extraordinary you</div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default Other;
