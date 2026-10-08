import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import 'tailwindcss/tailwind.css';
import devyemi from '../assets/devyemi.png';
import MainLayout from './Layouts/MainLayouts';
import DeveloperProfile from './DeveloperProfile';
import WorkExperienceTimeline from './WorkExperienceTimeline';

const outerOrbitSkills = [
  { name: 'AWS', x: 50, y: 8 },
  { name: 'Docker', x: 80, y: 20 },
  { name: 'React', x: 90, y: 50 },
  { name: 'TypeScript', x: 80, y: 80 },
  { name: 'Node.js', x: 50, y: 92 },
  { name: 'PostgreSQL', x: 20, y: 80 },
  { name: 'Python', x: 10, y: 50 },
  { name: 'Next.js', x: 20, y: 20 },
];

const innerOrbitSkills = [
  { name: 'NestJS', x: 65, y: 14 },
  { name: 'MongoDB', x: 86, y: 65 },
  { name: 'FastAPI', x: 35, y: 86 },
  { name: 'GCP', x: 14, y: 35 },
];

function TechOrbit({ skills, className }) {
  return (
    <div className={`tech-orbit ${className}`} aria-label="Technology stack">
      <div className="tech-orbit__track" aria-hidden="true" />
      <div className="tech-orbit__rotation">
        {skills.map((skill) => (
          <span
            className="tech-orbit__position"
            key={skill.name}
            style={{ left: `${skill.x}%`, top: `${skill.y}%` }}
          >
            <span className="tech-orbit__label">{skill.name}</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <MainLayout>
      <main>
        <section className="profile-hero">
          <div className="profile-hero__content">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="profile-hero__eyebrow">
                <span aria-hidden="true" />
                Senior Software Engineer
              </p>
              <h1 className="profile-hero__title">Yemi Ogunrinde</h1>
              <p className="profile-hero__subtitle">
                I build thoughtful, reliable software from idea to launch.
              </p>
              <p className="profile-hero__description">
                I partner with teams to turn complex problems into useful products,
                bringing together polished user experiences, dependable backend
                systems, and cloud infrastructure.
              </p>
              <div className="profile-hero__actions">
                <Link className="profile-hero__button profile-hero__button--primary" to="/Contact">
                  Let&apos;s work together <span aria-hidden="true">-&gt;</span>
                </Link>
                <a
                  className="profile-hero__button profile-hero__button--secondary"
                  href="https://github.com/BisiOlaYemi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub <span aria-hidden="true">↗</span>
                </a>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="profile-hero__visual"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <div className="profile-orbit" role="img" aria-label="Yemi's profile surrounded by technology stacks">
              <TechOrbit skills={outerOrbitSkills} className="tech-orbit--outer" />
              <TechOrbit skills={innerOrbitSkills} className="tech-orbit--inner" />
              <div className="profile-orbit__portrait">
                <img src={devyemi} alt="Yemi Ogunrinde" />
              </div>
            </div>
          </motion.div>
        </section>

        <DeveloperProfile />
        <WorkExperienceTimeline />
      </main>
    </MainLayout>
  );
}
