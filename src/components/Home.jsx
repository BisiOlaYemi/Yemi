import React from 'react'
import { Link } from 'react-router-dom'
import MainLayout from '../components/Layouts/MainLayouts'
import devyemi from '../assets/devyemi.png'
import { motion } from 'framer-motion'
import 'tailwindcss/tailwind.css'
import DeveloperProfile from './DeveloperProfile'
import WorkExperienceTimeline from './WorkExperienceTimeline'

const MovingObject = ({ delay, type }) => {
  const variants = {
    capsule: {
      width: '60px',
      height: '20px',
      borderRadius: '10px',
      background: 'linear-gradient(to right, rgba(74, 14, 78, 0.3), rgba(129, 20, 154, 0.3))',
    },
    circle: {
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      background: 'rgba(255, 191, 0, 0.3)',
    },
    square: {
      width: '30px',
      height: '30px',
      background: 'rgba(0, 128, 128, 0.3)',
    }
  }

  return (
    <motion.div
      className="absolute z-0"
      animate={{
        x: ['0%', '100%', '0%'],
        y: ['0%', '100%', '0%'],
      }}
      transition={{
        repeat: Number.MAX_SAFE_INTEGER,
        repeatType: 'reverse',
        duration: 20 + delay,
        delay: delay,
        ease: 'linear',
      }}
      style={{
        ...variants[type],
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
      }}
    />
  )
}

export default function Home() {
  return (
    <MainLayout>
      <div className="relative min-h-screen overflow-hidden">
        {[...Array(10)].map((_, index) => (
          <MovingObject 
            key={index} 
            delay={index * 2} 
            type={['capsule', 'circle', 'square'][index % 3]} 
          />
        ))}

        <div className="flex flex-col md:flex-row md:h-screen mt-24 max-w-7xl mx-auto px-8">
          <div className="md:w-1/2 p-5 md:p-10 mt-5">
            <motion.p
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              className="text-[2.5rem] text-white text-center md:text-left lg:text-[3.5rem] font-bold tracking-wide text-headingColor md:w-[85%] md:leading-tight"
            >
              <span className="bg-gradient-to-r from-purple-500 to-amber-500 text-transparent bg-clip-text text-[2rem] lg:text-[4rem]">Let's Build</span>{' '}
              Together
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3 }}
              className='mt-2 text-white font-semibold'
            >
              As a full-stack developer, I thrive on the dynamic interplay
              between front-end finesse and back-end robustness, bringing visions to life.
              With expertise spanning both ends of the development spectrum, I excel in architecting
              and implementing end-to-end solutions that drive innovation.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Link to="/#">
                <button className="bg-gradient-to-br from-amber-500 to-purple-500 text-white md:px-7 px-4 py-2 text-lg rounded-lg hover:bg-gray-800 hover:scale-105 transition-all duration-300 mt-12">
                  Get in touch
                </button>
              </Link>
            </motion.div>
          </div>
          <div className="md:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              className="p-4 relative"
            >
              
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-purple-500 rounded-full transform -translate-x-4 -translate-y-4" />
              <img
                src={devyemi}
                alt='about' 
                className="w-full h-auto object-cover rounded-5xl shadow-xl relative z-10"
              />
            </motion.div>
          </div>
        </div>
        <DeveloperProfile />
        <WorkExperienceTimeline />
      </div>
    </MainLayout>
  )
}