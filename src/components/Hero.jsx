import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import careerhavenImg from '../assets/careerhaven.png';
import easycarImg from '../assets/easycar.png';
import simbasImg from '../assets/simbas.png';
import charityImg from '../assets/charity.png';

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
  ];

  return (
    <div className='w-screen h-screen grid grid-rows-2 md:grid-cols-2 text-white'>
      <div className='relative bg-amber-500 w-full h-full md:h-screen'>
        <h1 className='text-3xl text-white font-bold text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
          Hello
        </h1>
        <div className='carousel-container'>
          <Carousel showThumbs={false} infiniteLoop autoPlay>
            {images.map((image, index) => (
              <div key={index} className='carousel-item'>
                <img
                  src={image.src}
                  alt={image.alt}
                  className='carousel-image'
                  style={{ maxWidth: '100%', height: 'auto', width: 300 }}
                />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
      {/* Section two */}
      <div className='bg-gray-900 w-full h-full md:h-screen'>
        <h1 className='text-2xl text-white font-bold text-center'>World</h1>
      </div>
    </div>
  );
};

export default Hero;
