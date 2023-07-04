import React from 'react';
import { Link, BrowserRouter } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import yemi from '../assets/yemi.png';
import careerhavenImg from '../assets/careerhaven.png';
import easycarImg from '../assets/easycar.png';
import simbasImg from '../assets/simbas.png';
import charityImg from '../assets/charity.png';
import withiresImg from '../assets/withhires.png';
import resumePDF from '../assets/resume.pdf';

const Hero = () => {
  const images = [
    {
      src: careerhavenImg,
      alt: 'Career Haven',
    },
    {
      src: easycarImg,
      alt: 'Easy Car',
    },
    {
      src: simbasImg,
      alt: 'Simbas',
    },
    {
      src: charityImg,
      alt: 'Charity',
    },
    {
      src: withiresImg,
      alt: 'Charity',
    },
  ];

  const openResume = () => {
    window.open(resumePDF, '_blank');
  };

  return (
    <BrowserRouter>
      <div className='w-screen h-screen grid grid-cols-1 md:grid-cols-2 text-white'>
        <div className='bg-gradient-to-r from-gray-950 w-full h-full md:h-screen flex flex-col justify-center items-center'>
          <img
            src={yemi}
            alt='myphoto'
            className='max-w-full h-auto mt-2'
            style={{ maxWidth: '100%', maxHeight: '100%', width: 'auto', height: 600 }}
          />
        </div>
        {/* Section two */}
        <div className='relative w-full h-full md:h-screen md:grid md:place-items-center'>
        <div className='flex justify-center mt-2 mb-2'>
            <Link to='https://github.com/BisiOlaYemi'>
              <button className='bg-violet-600 py-2 px-4 text-white text-center rounded-lg font-bold'>Github</button>
            </Link>
              <button className='bg-gray-800 py-2 px-4 text-white text-center font-bold rounded-lg ml-2' onClick={openResume}>
                Resume
              </button>
          </div>
          <div className='carousel-container'>
            <Carousel showThumbs={false} showArrows={false} showStatus={false} infiniteLoop autoPlay>
              {images.map((image, index) => (
                <div key={index} className='carousel-item'>
                  <img
                    src={image.src}
                    alt={image.alt}
                    className='carousel-image'
                    style={{ maxWidth: '100%', height: 550, width: 300 }}
                  />
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default Hero;
