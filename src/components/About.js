import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

const About = () => {
    const [isDBig, setIsDBig] = useState(false);
    const [isKBig, setIsKBig] = useState(false);

    const containerVariants = {
        hidden: {opacity: 0 },
        visible: {opacity: 1 },
    };

    return (
        <div className="flex justify-center items-center h-screen bg-white">
            <div className="flex flex-col justify-center p-8 rounded-md bg-[#121212] text-white gap-y-4">
                <div className="flex justify-center">
                    <div>
                        <img src="https://i.pinimg.com/474x/57/47/ae/5747aec4662d057ab2259eb5f0781fbc.jpg" alt="loopy1" className="w-36"/>
                    </div>
                </div>
                <div className="flex flex-col gap-y-2">
                    <div className="text-lg font-bold">kristen</div>
                    <div className="text-xs font-medium">she/her 20 enfp 🇰🇷🇺🇸</div>
                    <div className="flex flex-row items-center gap-x-2">
                        <img src="https://i.pinimg.com/736x/7b/f5/29/7bf5297b1565febb2359f5cd950399c0.jpg" alt="mingyu" className="rounded-full w-6"/>
                        <Link to="/"><div className="text-xs font-bold">kristenwonton</div></Link>
                    </div>

                    <div className="flex flex-col gap-y-2">
                        <motion.div
                            className="flex flex-row gap-x-20"
                            whileHover={{ scale: 1.1 }}
                            onClick={() => setIsDBig(!isDBig)}
                        >
                            <div className="flex flex-row gap-x-3">
                                <img src="https://i1.sndcdn.com/artworks-8yoXjdWWTgPX-0-t500x500.jpg" alt="dust" className="w-10 h-10"/>
                                <div className="flex flex-col">
                                    <div className="text-sm">Dust</div>
                                    <div className="text-xs">SEVENTEEN</div>
                                </div>
                            </div>
                            <div>...</div>
                        </motion.div>
                        <AnimatePresence>
                            {isDBig && (
                                <motion.div
                                    variants={containerVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.3, ease: "easeIn",opacity: { duration: 0.2 } }}
                                    className="flex flex-row gap-x-1 text-xs"
                                >
                                    <div className="font-bold">byf</div>
                                    <div>i go ia when i'm in school</div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <motion.div
                            className="flex flex-row gap-x-20"
                            whileHover={{ scale: 1.1 }}
                            onClick={() => setIsKBig(!isKBig)}
                        >
                            <div className="flex flex-row gap-x-3">
                                <img src="https://upload.wikimedia.org/wikipedia/en/5/51/Henggarae_seventeen_artwork.png" alt="kidult" className="w-10 h-10"/>
                                <div className="flex flex-col">
                                    <div className="text-sm">Kidult</div>
                                    <div className="text-xs">SEVENTEEN</div>
                                </div>
                            </div>
                            <div>...</div>
                        </motion.div>
                        <AnimatePresence>
                            {isKBig && (
                                <motion.div
                                    variants={containerVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit={{ opacity: 0 }}
                                    transition={{duration: 0.5, ease: "easeIn",opacity: { duration: 0.2 } }}
                                    className="flex flex-row gap-x-1 text-xs"
                                >
                                    <div className="font-bold">dni</div>
                                    <div className="flex flex-col">
                                        <div>exo/svt antis, btspoppers,</div>
                                        <div>annoying exols, -17/30+</div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
