import React from "react";
import { motion } from "framer-motion";

// Images
import htmlLogo from "../assets/images/html-logo.webp";
import cssLogo from "../assets/images/css-logo.webp";
import jsLogo from "../assets/images/javascript-logo.webp";
import nodeLogo from "../assets/images/node-logo.webp";
import reactLogo from "../assets/images/react-logo.webp";
import tailwindLogo from "../assets/images/tailwind.png";
import pythonLogo from "../assets/images/python.webp";

const stack = [
  { name: "HTML", logo: htmlLogo },
  { name: "CSS", logo: cssLogo },
  { name: "JavaScript", logo: jsLogo },
  { name: "Node.js", logo: nodeLogo },
  { name: "React.js", logo: reactLogo },
  { name: "Tailwind CSS", logo: tailwindLogo },
  { name: "Python", logo: pythonLogo },
  { name: "Figma", logo: "https://miro.medium.com/v2/resize:fit:1340/0*UTBrDcrJ6SbePBzR" },
  { name: "Git", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2048px-Git_icon.svg.png" },
  { name: "Github", logo: "https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_640.png" },
  { name: "C#", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Logo_C_sharp.svg/910px-Logo_C_sharp.svg.png" },
  { name: "C Language", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/1853px-C_Programming_Language.svg.png" },
  { name: "SQL", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Database-mysql.svg/1448px-Database-mysql.svg.png" },
];

export const Stack = () => {
  return (
    <div className="text-white py-12 md:py-24" id="skills">
      <div className="container mx-auto px-4">
        <h2 className="text-6xl font-bold text-center mb-12">
          My <span className="text-emerald-300">Stack</span>
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {stack.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex flex-col items-center bg-white/5 p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <img
                src={item.logo}
                alt={`${item.name} logo`}
                className="w-20 h-20 object-contain mb-4"
              />
              <span className="text-white/80 font-medium text-lg">
                {item.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
