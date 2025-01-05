import React from "react";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiOutlineLinkedin,
} from "react-icons/ai";

export const Footer = () => {
  return (
    <footer className="py-8" id="contact">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="flex items-center justify-between flex-col md:flex-row">
          {/* Contact Section */}
          <div>
            <h2 className="md:text-7xl text-4xl font-bold mb-10 text-white/50">
              Contact <span className="text-gray-400">Me</span>
            </h2>
            <a
              className="md:text-3xl text-2xl font-semibold text-white underline decoration-gray-400 decoration-2 underline-offset-4 hover:decoration-gray-200 transition duration-300"
              href="mailto:rehankiriella2@gmail.com"
            >
              rehankiriella2@gmail.com
            </a>
          </div>

          {/* Additional Info Section */}
          <div className="text-white/50 mt-12 md:mt-0">
            <div className="mb-8">
              <p className="text-lg mb-1">Phone</p>
              <a
                href="tel:+94702513000"
                className="text-2xl font-semibold underline decoration-gray-400 decoration-2 underline-offset-4 hover:decoration-gray-200 transition duration-300"
              >
                (+94) 70 251 3000
              </a>
            </div>
            <div className="text-lg mb-8">
              <p className="font-bold">Address</p>
              <p>Kandy</p>
              <p>Sri Lanka</p>
            </div>
          </div>
        </div>

        {/* Background Watermark */}
        <div className="relative z-10 text-center mt-8 py-12">
          <h1 className="hidden md:block text-[10rem] md:text-[12rem] lg:text-[15rem] font-bold text-white opacity-10">
            REHANK.
          </h1>
          <h1 className="md:hidden text-9xl font-bold text-white opacity-10">
            REHAN <br /> K.

            
           
          </h1>
        </div>

        {/* Social Media Links */}
        <div className="relative mt-12 container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
          <p className="text-gray-200 text-sm text-center sm:text-left">
            © 2025 All rights reserved by Rehan Kiriella
          </p>
          <ul className="flex gap-5">
            <li>
              <a
                href="https://github.com/RehanKiriella"
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-200 flex items-center justify-center w-10 h-10 rounded-full hover:text-emerald-300 transition"
              >
                <AiFillGithub size={30} />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/rehankiriella/"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-200 flex items-center justify-center w-10 h-10 rounded-full hover:text-emerald-300 transition"
              >
                <AiOutlineLinkedin size={30} />
              </a>
            </li>
            <li>
              <a
                href="https://x.com/RehanKiriella"
                aria-label="X (Twitter)"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-200 flex items-center justify-center w-10 h-10 rounded-full hover:text-emerald-300 transition"
              >
                <AiOutlineTwitter size={30} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
