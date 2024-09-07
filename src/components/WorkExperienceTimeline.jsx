import { motion } from 'framer-motion';

const experiences = [
  {
    title: 'Software Engineer',
    company: 'AskYourPDF',
    period: '2024 - Ongoing',
    description: 'Collaborating with cross-functional teams to enhance backend functionalities, and contributing to the continuous improvement.'
  },
  {
    title: 'Software Engineer',
    company: 'Breezelearn Tech',
    period: '2023 - 2024',
    description: 'Crafted multiple endpoints aimed at performing end-to-end functionality of a smart restaurant application using Nest.js and ORM.'
  },
  {
    title: 'Software Engineer',
    company: 'Careerhaven',
    period: '2022 - 2023',
    description: 'Developed front-end components using JavaScript (Next.js, React.js) using TypeScript. Designed and implemented back-end services using Node.js.'
  },
  {
    title: 'Software Developer',
    company: 'Readycars NG',
    period: '2020 - 2022',
    description: 'Facilitated the creation of user stories and web development lifecycle, with subsequent hands-on deliverables of a Car hire application for the company.'
  }
];

export default function WorkExperienceTimeline() {
  return (
    <div className="min-h-screen text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          className="text-3xl dancing-script-fine text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Work Experiences
        </motion.h2>
        <motion.h3
          className="text-xl roboto-regular text-center mb-16 text-gradient"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          I am privileged to have worked as:
        </motion.h3>
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-white" />

          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              className={`mb-8 flex items-center w-full ${
                index % 2 === 0 ? 'flex-row-reverse' : ''
              }`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {/* Horizontal Line extending to vertical line */}
              <div
                className={`order-1 h-0.5 bg-white ${
                  index % 2 === 0 ? 'w-[calc(49%-16px)] ml-auto mr-0' : 'w-[calc(49%-16px)] mr-auto ml-0'
                }`}
              />

              {/* Icon */}
              <div className="z-20">
                <div className="flex items-center justify-center w-6 h-6 bg-gradient-to-r from-teal-500 to-gray-900 rounded-full">
                  <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-amber-500 rounded-full" />
                </div>
              </div>

              {/* Experience Card */}
              <div
                className={`order-1 bg-gray-800 rounded-lg shadow-xl w-5/12 px-6 py-4 ${
                  index % 2 === 0 ? 'mr-auto' : 'ml-auto'
                }`}
              >
                <h3 className="mb-3 font-bold bg-gradient-to-r from-purple-500 to-amber-500 text-transparent bg-clip-text text-xl">
                  {experience.title}
                </h3>
                <h4 className="mb-3 font-semibold text-lg text-gray-400">
                  {experience.company}{' '}
                  <span className="text-sm">({experience.period})</span>
                </h4>
                <p className="text-sm leading-snug tracking-wide text-gray-300 text-opacity-100">
                  {experience.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
