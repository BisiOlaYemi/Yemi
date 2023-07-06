import React from 'react'
import { useState, useEffect } from 'react';
import { FaReact, FaPython, FaDatabase, FaNodeJs } from 'react-icons/fa';

const Skills = () => {
    const skills = [
        { id: 1, icon: <FaReact className="skill-icon" />, name: 'ReactJS' },
        { id: 2, icon: <FaPython className="skill-icon" />, name: 'Django' },
        { id: 3, icon: <FaDatabase className="skill-icon" />, name: 'SQL' },
        { id: 4, icon: <FaNodeJs className="skill-icon" />, name: 'Node.js' },
      ];
    
      const [marqueeOffset, setMarqueeOffset] = useState(0);
      useEffect(() => {
        const interval = setInterval(() => {
          setMarqueeOffset((prevOffset) => prevOffset - 1);
        }, 100);
      
        return () => clearInterval(interval);
      }, []);
  return (
    <div className="marquee-container py-2">
          <div
            className="marquee flex"
            style={{ transform: `translateX(${marqueeOffset}px)` }}
          >
            {skills.map((skill) => (
              <div className="flex items-center text-rose-600 mr-8" key={skill.id}>
                {skill.icon}
                <span className="ml-2 text-rose-600 font-bold">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
  )
}

export default Skills
