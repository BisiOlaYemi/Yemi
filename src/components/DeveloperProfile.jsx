import { motion } from 'framer-motion';
import devyemi from '../assets/devyemi.png';
import aypLogo from '../assets/ayp.svg';
import lewkLogo from '../assets/Lewk.png';
import seemlessLogo from '../assets/seemless.png';
import placioLogo from '../assets/placio.svg';
import bountipLogo from '../assets/bountipLogo.svg';
import readycarLogo from '../assets/readycars.png';

const logos = [
  { src: aypLogo, alt: 'AYP Logo' },
  { src: bountipLogo, alt: 'Bountip Logo' },
  { src: lewkLogo, alt: 'Lewk Logo' },
  { src: placioLogo, alt: 'Placio Logo' },
  { src: readycarLogo, alt: 'Readycars Logo' },
  { src: seemlessLogo, alt: 'Seemless Logo' },
];

export default function DeveloperProfile() {
  return (
    <div className="min-h-screen text-white">
      <header className="container mx-auto py-6 overflow-hidden">
        <motion.div
          className="flex items-center space-x-12"
          initial={{ x: 0 }}
          animate={{ x: ['10%', '-100%'] }} 
          transition={{
            repeat: Infinity, 
            duration: 30, 
            ease: 'linear', 
          }}
        >
          {logos.map((logo, index) => (
            <motion.div
              key={index}
              className="flex-shrink-0"
              style={{ width: '200px' }} 
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="w-80 h-auto object-contain"
              />
            </motion.div>
          ))}
        </motion.div>
      </header>

      <main className="container mx-auto mt-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl font-bold text-white dancing-script-fine">Software Developer</h1>
              <p className="text-gray-300 roboto-regular mt-2">
                Crafting elegant solutions to complex problems
              </p>
            </motion.div>
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500 to-purple-500 rounded-tl-full rounded-br-full -rotate-6"></div>
              <img
                src={devyemi}
                alt="Software Developer"
                className="relative z-10 rounded-full shadow-2xl w-[300px] h-[300px] object-cover"
              />
            </motion.div>
          </div>
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="text-gray-300 roboto-regular">
              Experienced in developing scalable and efficient applications using cutting-edge technologies.
            </p>
            <div className="space-y-4">
              <h2 className="text-2xl roboto-black">Tech Stacks</h2>
              <ul className="list-disc list-inside text-gray-300 roboto-regular">
                <li>JavaScript / TypeScript</li>
                <li>React / Next.js</li>
                <li>Node.js / Nest | Express</li>
                <li>Python / FastApi | Django</li>
                <li>Postgresql / MongoDB Databases</li>
                <li>Docker / K8S</li>
                <li>AWS | GCP | Azure</li>
              </ul>
            </div>
            <div className="space-y-2 text-gray-300 roboto-regular">
              <p><span className="font-bold">Experience:</span> 6+ years</p>
              <p><span className="font-bold">Location:</span> Lisbon, Portugal</p>
              <p><span className="font-bold">Availability:</span> Remote | Hybrid</p>
            </div>
            <button href="/Contact" className="bg-amber-800 text-white px-8 py-3 rounded-full roboto-bold text-lg hover:bg-gray-700 hover:scale-105 transition-all duration-300">
              Hire me
            </button>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
