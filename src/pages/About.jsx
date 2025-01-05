import React, { useEffect, useState } from "react";
import project from "../assets/images/project5.png"; // Ensure this path is correct.

export const About = () => {
    const [animateBars, setAnimateBars] = useState(false);

    useEffect(() => {
        // Trigger animation after the component loads
        const timer = setTimeout(() => setAnimateBars(true), 500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section id="about" className="text-white p-8">
            <h2 className="text-6xl font-bold mb-8">
                About <span className="text-emerald-300">Me</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Background Section */}
                <div className="border border-white/20 rounded-lg p-6 group hover:border-emerald-300 hover:shadow-lg hover:shadow-emerald-500/50 transition">
                    <img
                        src="rk.jpeg"
                        alt="Rehan Kiriella"
                        className="w-32 h-32 rounded-full mb-4 mx-auto border-2 border-emerald-300"
                    />
                    <h3 className="text-2xl font-bold mb-2">01. Background</h3>
                    <p className="text-white/50 mb-6">
                        I am Rehan Kiriella, a graduate from London Metropolitan University with a BEng (Hons) in Software Engineering.
                        I develop softwares as well as web systems! Feel free to contact me at ‎
                        <a
                            href="mailto:rehankiriella2@gmail.com"
                            target="_blank"
                            className="text-emerald-300 underline"
                            rel="noopener noreferrer"
                        >
                            rehankiriella2@gmail.com
                        </a>.
                        <br></br><br></br>
                        Feel free to browse through my projects and view their source code as well.
                    </p>
                </div>

                {/* Expertise Section */}
                <div className="border border-white/20 rounded-lg p-6 group hover:border-emerald-300 hover:shadow-lg hover:shadow-emerald-500/50 transition flex flex-col justify-between">
                    <div>
                        <h3 className="text-2xl font-bold mb-2">02. Expertise</h3>
                        <p className="text-white/50">
                            I specialize in full stack web development and have already developed several individual and group projects, including web systems.
                        </p>
                        <div className="mt-4 relative border border-white/20 rounded-lg p-4 h-[270px] overflow-hidden">
                            <img
                                src={project}
                                alt="Project 1"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>

                {/* Skills Section */}
                <div className="border border-white/20 rounded-lg p-6 group hover:border-emerald-300 hover:shadow-lg hover:shadow-emerald-500/50 transition flex flex-col justify-between">
                    <div>
                        <h3 className="text-2xl font-bold mb-2">03. Skills</h3>
                        <p className="text-white/50 mb-4">
                            I'm proficient in the following languages:
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="border border-white/20 rounded-lg p-3">
                                <h4 className="text-emerald-300 font-medium mb-2">Frontend</h4>
                                <ul className="text-white space-y-1 text-sm">
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>JavaScript</li>
                                    <li>React.JS</li>
                                    <li>Tailwind CSS</li>
                                    <li>Framer Motion</li>
                                    <li>Bootstrap</li>
                                    <li>Figma</li>
                                </ul>
                            </div>
                            <div className="border border-white/20 rounded-lg p-3">
                                <h4 className="text-emerald-300 font-medium mb-2">Backend</h4>
                                <ul className="text-white space-y-1 text-sm">
                                    <li>Node.JS</li>
                                    <li>SQL</li>
                                    <li>Python</li>
                                    <li>C#</li>
                                    <li>C Language</li>
                                </ul>
                                <br></br>
                                <h4 className="text-emerald-300 font-medium mb-2">Other Tools</h4>
                                <ul className="text-white space-y-1 text-sm">
                                    <li>Git</li>
                                    <li>Github</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="mt-4">
                        <label className="block text-sm font-medium mb-1">Front-End</label>
                        <div className="w-full bg-white/10 rounded-full h-2">
                            <div
                                className={`bg-emerald-300 h-2 rounded-full transition-all duration-1000 ${
                                    animateBars ? "w-[90%] " : "w-0"
                                }`}
                            ></div>
                        </div>
                        <label className="block text-sm font-medium mt-4 mb-1">Back-End</label>
                        <div className="w-full bg-white/10 rounded-full h-2">
                            <div
                                className={`bg-emerald-300 h-2 rounded-full transition-all duration-1000 ${
                                    animateBars ? "w-[70%] " : "w-0"
                                }`}
                            ></div>
                        </div>
                        <label className="block text-sm font-medium mt-4 mb-1">DevOps</label>
                        <div className="w-full bg-white/10 rounded-full h-2">
                            <div
                                className={`bg-emerald-300 h-2 rounded-full transition-all duration-1000 ${
                                    animateBars ? "w-[50%] " : "w-0"
                                }`}
                            ></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
