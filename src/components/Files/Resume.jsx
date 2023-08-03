import React from 'react';
import { FaStar, FaBriefcase, FaGraduationCap } from 'react-icons/fa';

const Resume = () => {
  return (
    <div className="rounded-lg text-white p-8 relative mt-6">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2"><span className='text-indigo-600'>Yemi Ogunrinde</span></h1>
        <p className="text-lg">Software Developer</p>
      </div>
      <hr className="border-t-1 border-gray-400 w-full mx-auto my-4 mb-6" />
      <div className="mb-8">
        <div className="thread" />
        <h2 className="text-2xl font-bold mb-4 relative z-10">
          <FaStar className="inline mr-2 mb-2" />
          <span className='text-indigo-600'>Summary</span>
        </h2>
        <p>
            Being a software developer (frontend and backend) with more than 4 + years of experience, I have worked with over 30 cross-functional software development team at various levels. I am dedicated to identifying clients’ need and delivering effective solution to all problems that revolve around build, iterate and deploy, including expertise in solution optimization, and AWS Cloud computing. 
        </p>
      </div>
      <hr className="border-t-1 border-gray-400 w-full mx-auto my-4 mb-6" />
      <div className="mb-8">
        <div className="thread" />
        <h2 className="text-2xl font-bold mb-4 relative z-10">
          <FaStar className="inline mr-2 mb-2" />
          <span className='text-indigo-600'>Skills</span>
        </h2>
        <p>
          JavaScript | React | Next JS | Redux | Tailwind CSS | HTML5 | CSS3 | GIT | Node| JQuery | Express | Axios | RestAPIs | MySQL | Django | NoSQL | OOP | CRUD | Backend | PHP Distributed system | AWS Cloud Computing | Frontend | Lambda | Full Stack | VPS | Nginx | Postgresql | Wordpress | MongoDB | PowerApps | Golang | SharedPoint | English – Professional
        </p>
      </div>
      <hr className="border-t-1 border-gray-400 w-full mx-auto my-4 mb-6" />
      <div className="mb-8">
        <div className="thread" />
        <h2 className="text-2xl font-bold mb-4 relative z-10">
          <FaBriefcase className="inline mr-2 mb-2" />
          <span className='text-indigo-600'>Work Experience</span>
        </h2>
        <p className="font-bold">Software Developer, Careerhaven Consulting Inc (Remote)</p>
        <p className="text-rose-900">Jan 2023 - June 2023</p>
        <ul className="list-disc list-inside">
          <li>
            Successfully developed a sophisticated web application from scratch utilizing
            the latest technologies.
          </li>
          <li>
            Achieved a 50% increase in app stability and a 15% reduction in app crashes by
            implementing a CI/CD Pipeline
          </li>
          <li>
            Collaborated with the design team to create visually appealing and
            user-friendly interfaces for web applications.
          </li>
        </ul>
      </div>
      <div className="mb-8">
        <div className="thread" />
        <p className="font-bold">Software Developer, Readyflow Service Limited (Hybrid)</p>
        <p className="text-rose-900">Mar 2020 - Nov 2022</p>
        <ul className="list-disc list-inside">
          <li>
            Built and successfully created a system backup for over 35,000+ customer (users) directory using SQL
          </li>
          <li>
            Developed two custom web applications using PHP, SQL, JavaScript core technologies, and Python Django.
          </li>
          <li>
            Created and monitored Google Analytics for all company-associated websites, resulting in a substantial 30% upturn
          </li>
        </ul>
      </div>
      <div className="mb-8">
        <div className="thread" />
        <p className="font-bold">Software Developer, Borosmart uba (Onsite)</p>
        <p className="text-rose-900">Aug 2018 - Nov 2019</p>
        <ul className="list-disc list-inside">
          <li>
            Led the development team in enhancing a secure backend system, resulting in a notable 50% decrease in system vulnerabilities.
          </li>
          <li>
            Successfully automated business processes by building custom SharePoint-based applications 
          </li>
          
        </ul>
      </div>
      <hr className="border-t-1 border-gray-400 w-full mx-auto my-4 mb-6" />
      <div className="mb-8">
        <div className="thread" />
        <h2 className="text-2xl font-bold mb-4 relative z-10">
          <FaGraduationCap className="inline mr-2 mb-1" />
          <span className='text-indigo-600'>Education</span>
        </h2>
        <p>
          Bachelor of Science in Business Admin, Bangalore University, 2016
        </p>
      </div>
    </div>
  );
};

export default Resume;
