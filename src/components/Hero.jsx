import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import yemi from '../assets/yemi.png';
import careerhavenImg from '../assets/careerhaven.png';
import easycarImg from '../assets/easycar.png';
import simbasImg from '../assets/simbas.png';
import charityImg from '../assets/charity.png';
import withiresImg from '../assets/withhires.png';

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

  return (
    <div className=' w-screen h-screen grid grid-rows-2 md:grid-cols-2 text-white'>
      <div className='bg-gradient-to-r from-gray-950 w-full h-full md:h-screen flex flex-col justify-center items-center'>
          
          <img
            src={yemi}
            alt='myphoto'
            className='max-w-full h-auto'
            style={{ maxWidth: '100%', maxHeight: '100%', width: 'auto', height: 'auto' }}
          />
      </div>
      {/* Section two */}
      <div className='relative w-full h-full md:h-screen'>
        <div className='carousel-container'>
          <Carousel showThumbs={false} infiniteLoop autoPlay>
            {images.map((image, index) => (
              <div key={index} className='carousel-item'>
                <img
                  src={image.src}
                  alt={image.alt}
                  className='carousel-image'
                  style={{ maxWidth: '100%', height: 600, width: 300 }}
                />
              </div>
            ))}
          </Carousel>
        </div>
      </div>      
    </div>
  );
};

export default Hero;
