import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../components/Layouts/MainLayouts';
import dev from '../assets/dev.png';
import { motion } from 'framer-motion';
import 'tailwindcss/tailwind.css';

const Home = () => {
  return (
    <MainLayout>
      <div className="flex flex-col md:flex-row md:h-screen mt-24">
        <div className="md:w-1/2 p-5 md:p-10 mt-5">
        <p className="text-[2.5rem] text-white text-center md:text-left lg:text-[3.5rem] font-bold tracking-wide text-headingColor md:w-[85%] md:leading-tight">
          <span className="bg-gradient-to-r from-purple-500 to-amber-500 text-transparent bg-clip-text text-[2rem] lg:text-[4rem]">Let's Build</span>  Together
        </p>
          <p className='mt-2 text-white'>
          Efficient transportation services for your goods and materials, latest telecommunications solutions
          to keep your business connected. Get access to wide range of services, including voice, data,
          and internet, We can help you plan, organize, and execute your events, from small corporate
          meetings to large-scale festivals.
          </p>
          <Link to="/contact">
            <button className="bg-blue-950 text-white md:px-7 px-4 py-2 text-lg rounded-lg hover:bg-gray-800 hover:scale-105 transition-all duration-300 mt-12">Get in touch</button>
          </Link>
        </div>
        <div className="md:w-1/2">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className=" p-4"
          >
          <img src={dev}
          alt='about' 
          className="w-full h-auto object-cover" />
          </motion.div>
        </div>
      </div>
      </MainLayout>
  );
};

export default Home;