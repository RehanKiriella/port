import React from "react";
import { motion } from "framer-motion";
import proj1 from "../assets/images/proj9.png";
import proj2 from "../assets/images/proj11.png";
import proj3 from "../assets/images/proj12.png";
import { FaGithub } from "react-icons/fa";

const projects = [
    {
        title: "Employee Monitoring and Analysis System",
        desc: "A system to monitor employee's performance and productivity in real-time, providing analytics for better decision-making and improved efficiency.",
        devstack: "HTML, CSS, JavaScript, Python, PHP, Node.js, React.js, Tailwind CSS, MySQL",
        link: "#",
        git: "",
        src: proj1,
        type: "Fullstack",
    },
    {
        title: "eBook Ordering System",
        desc: "An eBook e-commerce platform designed to simplify the ordering process, allowing users to browse and purchase eBooks seamlessly. Includes advanced search functionality and user-friendly features.",
        devstack: "ASP.NET, SQL Database",
        link: "#",
        git: "",
        src: proj2,
        type: "Fullstack",
    },
    {
        title: "Online Taxi Booking System",
        desc: "An easy-to-use taxi booking system that allows users to book rides, track drivers in real-time, and manage payments efficiently, ensuring a hassle-free experience.",
        devstack: "HTML, CSS, JavaScript, PHP, eJS",
        link: "#",
        git: "",
        src: proj3,
        type: "Fullstack",
    },
];

export const Portfolio = () => {
    return (
        <div className="text-white py-24 md:py-64" id="portfolio">
            <div className="container mx-auto px-4">
                <h2 className="text-6xl font-bold text-center mb-12">
                    Selected <span className="text-emerald-300">Projects</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white/5 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 h-full"
                        >
                            <div className="p-6 bg-black/20 border border-white/10 flex flex-col h-full">
                                <h3 className="text-4xl font-semibold mb-4">{project.title}</h3>
                                <img
                                    src={project.src}
                                    alt={project.title}
                                    className="w-full h-48 object-cover rounded-lg mb-4"
                                />
                                <p className="text-white/70 mb-4 flex-grow">{project.desc}</p>
                                <p className="text-emerald-300 font-medium mb-2">
                                    Stack: {project.devstack}
                                </p>
                                <p className="text-emerald-400/60 font-medium mb-4 capitalize">
                                    Type: {project.type}
                                </p>
                                <div className="mt-auto">
                                    <a
                                        href={project.git}
                                        className="text-gray-400 text-3xl hover:text-gray-300 transition-colors"
                                    >
                                        <FaGithub />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};
