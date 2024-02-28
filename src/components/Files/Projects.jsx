/* eslint-disable */
import React from 'react';

const Projects = () => {
  const projectsData = [
    {
      imageUrl: 'https://img.freepik.com/free-vector/vacation-holidays-background-with-realistic-globe-suitcase-photo-camera_1284-10476.jpg?size=626&ext=jpg&ga=GA1.2.149556823.1683788678&semt=sph',
      link: 'https://readycars.ng/',
    },
    {
      imageUrl: 'https://img.freepik.com/premium-vector/composition-3d-plane-truck-pile-boxes-vector-illustration-advertising-transportation-any-type-difficult-long-routes-oversized-cargo-template-web-page-phone-application_913036-592.jpg?size=626&ext=jpg&ga=GA1.1.149556823.1683788678&semt=ais',
      link: 'https://www.royalheritageintenterprises.com/',
    },
    {
      imageUrl: 'https://img.freepik.com/free-vector/focused-tiny-people-reading-books_74855-5836.jpg?size=626&ext=jpg&ga=GA1.2.149556823.1683788678&semt=sph',
      link: 'https://careerhaven.ca/',
    },
    {
      imageUrl: 'https://img.freepik.com/free-vector/man-search-hiring-job-online-from-laptop_1150-52728.jpg?size=626&ext=jpg&ga=GA1.2.149556823.1683788678&semt=sph',
      link: 'https://withires.uk/',
    },
    {
      imageUrl: 'https://img.freepik.com/premium-vector/money-donation-concept-with-people-putting-coins-charity-donation-campaign_605858-246.jpg?size=626&ext=jpg&ga=GA1.1.149556823.1683788678&semt=sph',
      link: 'https://www.debenedictinitiative.org/',
    },
    {
      imageUrl: 'https://img.freepik.com/free-vector/happy-man-online-dating-via-laptop_74855-7495.jpg?size=626&ext=jpg&ga=GA1.1.149556823.1683788678&semt=sph',
      link: 'https://simbas.ng/login',
    },
    {
      imageUrl: 'https://img.freepik.com/free-vector/placeholder-concept-illustration_114360-4727.jpg?size=626&ext=jpg&ga=GA1.1.149556823.1683788678&semt=sph',
      link: '#',
    },
    {
      imageUrl: 'https://img.freepik.com/premium-vector/mobile-calculator-service-smartphone-mobile-finance-technology-mobile-display-vector_3482-7322.jpg?size=626&ext=jpg&ga=GA1.2.149556823.1683788678&semt=ais',
      link: 'https://innonavi.vercel.app/',
    },
    {
      imageUrl: 'https://img.freepik.com/premium-vector/freelance-man-work-comfortable-cozy-home-office-kitchen-flat-illustration-freelancer-man-character-working-from-home-relaxed-pace-self-employed-concept_165217-303.jpg?size=626&ext=jpg&ga=GA1.2.149556823.1683788678&semt=sph',
      link: 'https://enhancz.vercel.app/',
    },
    {
      imageUrl: 'https://img.freepik.com/premium-vector/man-is-using-lot-smartphone-apps_18660-3029.jpg?size=626&ext=jpg&ga=GA1.2.149556823.1683788678&semt=ais',
      link: 'https://challenge-chi-rouge.vercel.app/',
    },
  ];

  return (
    <div className="container mx-auto py-8 mt-12 mb-12">
      <div className="grid grid-cols-3 gap-4 animate-fade-in-down">
        {projectsData.map((project, index) => (
          <div key={index} className=" rounded-xl overflow-hidden drop-shadow-lg hover:scale-105 transition-all duration-300">
            <img src={project.imageUrl} alt={`Project ${index + 1}`} className="object-cover w-full h-48" />
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="block text-center mt-4 mb-2 text-white font-bold">
              View the App
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
