import React from "react";
import { motion } from "framer-motion";
import profilepic from "../assets/images/profilepic.png";

export const Hero = () => {
    return (
        <div className="relative overflow-clip min-h-screen text-white bg-[linear-gradient(to_bottom,#000,#071E18_35%,#208A65_67%,#35FB8E_85%)]">
            
            <div
                className="absolute bg-black w-[2400px] h-[1000px] rounded-[50%] left-1/2 -translate-x-1/2
                        bg-[radial-gradient(closest-side,#000_85%,#249974)] top-[450px]
                        border-[1px] border-[#8CD6DE]/30"
            />
            
            <div className="container relative mx-auto px-4 pt-12 pb-24">
                <div className="flex flex-col items-center justify-center text-center z-10">
                    <motion.div
                        initial={{ opacity: 0 }}  // Start with opacity 0 (invisible)
                        animate={{ opacity: 1 }}  // Animate to opacity 1 (fully visible)
                        transition={{ duration: 2 }}  // Duration for the fade-in effect
                        className="relative mb-8 mt-24"
                    >
                        <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/20 to-transparent rounded-lg blur-3xl"></div>
                        <img
                            src={profilepic}
                            alt="Rehan Kiriella"
                            className="w-[250px] relative z-10"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-2xl"
                    >
                        <h1 className="text-6xl md:text-7xl font-bold tracking-tighter mb-4">
                            Hi! I'm <br /> Rehan <span className="text-emerald-400"> Kiriella </span>
                        </h1>
                        <p className="text-xl text-white/80 mac-w-lg mx-auto leading-relaxed mb-6">
                            Software Engineer and Full Stack Web Developer based in <span className="text-emerald-400"> Sri Lanka</span>
                        </p>

                        {/* "Available for Intern" Badge */}
                        <div className="flex items-center justify-center mt-6">
                            <div className="flex items-center px-4 py-2 bg-[#1e1e1e] rounded-full shadow-md">
                                {/* Glowing Green Dot */}
                                <motion.div
                                    className="w-3 h-3 bg-emerald-400 rounded-full mr-2"
                                    animate={{
                                        boxShadow: [
                                            "0 0 4px #00FF00",
                                            "0 0 15px #00FF00",
                                            "0 0 4px #00FF00"
                                        ]
                                    }}
                                    transition={{
                                        duration: 1.5,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                ></motion.div>
                                <span className="text-white text-lg font-medium">Available For Intern</span>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    animate={{
                        y: [0, 15, 0],
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute bottom-16 right-1/3 w-96 h-96 bg-emerald-500/10 rounded-full blur-xl"
                />
            </div>
        </div>
    );
};
