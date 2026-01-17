/* eslint-disable */
import React, { useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';

const Projects = () => {
  const [searchParams] = useSearchParams();
  const selected = searchParams.get('selected') || null;
  const refs = useRef({});

  const projectsData = [
    {
      name: 'ReadyCars',
      imageUrl: 'https://img.freepik.com/free-vector/vacation-holidays-background-with-realistic-globe-suitcase-photo-camera_1284-10476.jpg?size=626&ext=jpg&ga=GA1.2.149556823.1683788678&semt=sph',
      link: 'https://readycars.ng/',
    },
    {
      name: 'CareerHaven',
      imageUrl: 'https://img.freepik.com/free-vector/focused-tiny-people-reading-books_74855-5836.jpg?size=626&ext=jpg&ga=GA1.2.149556823.1683788678&semt=sph',
      link: 'https://careerhaven.ca/',
    },
    {
      name: 'All Errands',
      imageUrl: 'https://img.freepik.com/premium-psd/3d-rendering-people-shopping_23-2149910735.jpg?w=740',
      link: 'https://all-errands.com/',
    },
    {
      name: 'Royal Heritage',
      imageUrl: 'https://img.freepik.com/premium-vector/composition-3d-plane-truck-pile-boxes-vector-illustration-advertising-transportation-any-type-difficult-long-routes-oversized-cargo-template-web-page-phone-application_913036-592.jpg?size=626&ext=jpg&ga=GA1.1.149556823.1683788678&semt=ais',
      link: 'https://www.royalheritageintenterprises.com/',
    },
    {
      name: 'Prevent Child Care',
      imageUrl: 'https://img.freepik.com/free-psd/3d-rendering-family-scene_23-2150123723.jpg?t=st=1716464592~exp=1716468192~hmac=5aae2c19bf48b5fd6b786da5d3d0b09a2594434e56b8d97af0f725d6f2016b96&w=740',
      link: 'https://preventchildrensocialcare.co.uk/',
    },
    {
      name: 'Withires',
      imageUrl: 'https://img.freepik.com/free-vector/man-search-hiring-job-online-from-laptop_1150-52728.jpg?size=626&ext=jpg&ga=GA1.2.149556823.1683788678&semt=sph',
      link: 'https://withires.vercel.app/',
    },
    {
      name: 'Debenedict Initiative',
      imageUrl: 'https://img.freepik.com/premium-vector/money-donation-concept-with-people-putting-coins-charity-donation-campaign_605858-246.jpg?size=626&ext=jpg&ga=GA1.1.149556823.1683788678&semt=sph',
      link: 'https://www.debenedictinitiative.org/',
    },
    {
      name: 'Simbas',
      imageUrl: 'https://img.freepik.com/free-vector/happy-man-online-dating-via-laptop_74855-7495.jpg?size=626&ext=jpg&ga=GA1.1.149556823.1683788678&semt=sph',
      link: 'https://simbas.ng/login',
    },
    {
      name: 'Placeholder',
      imageUrl: 'https://img.freepik.com/free-vector/placeholder-concept-illustration_114360-4727.jpg?size=626&ext=jpg&ga=GA1.1.149556823.1683788678&semt=sph',
      link: '#',
    },
    {
      name: 'Innonavi',
      imageUrl: 'https://img.freepik.com/premium-vector/mobile-calculator-service-smartphone-mobile-finance-technology-mobile-display-vector_3482-7322.jpg?size=626&ext=jpg&ga=GA1.2.149556823.1683788678&semt=ais',
      link: 'https://innonavi.vercel.app/',
    },
    {
      name: 'Enhancz',
      imageUrl: 'https://img.freepik.com/premium-vector/freelance-man-work-comfortable-cozy-home-office-kitchen-flat-illustration-freelancer-man-character-working-from-home-relaxed-pace-self-employed-concept_165217-303.jpg?size=626&ext=jpg&ga=GA1.2.149556823.1683788678&semt=sph',
      link: 'https://enhancz.vercel.app/',
    },
    {
      name: 'Challenge App',
      imageUrl: 'https://img.freepik.com/premium-vector/man-is-using-lot-smartphone-apps_18660-3029.jpg?size=626&ext=jpg&ga=GA1.2.149556823.1683788678&semt=ais',
      link: 'https://challenge-chi-rouge.vercel.app/',
    },
  ];

  const getScreenshotUrl = (url) => `https://s.wordpress.com/mshots/v1/${encodeURIComponent(url)}?w=600`;

  useEffect(() => {
    if (selected && refs.current[selected]) {
      refs.current[selected].scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [selected]);

  return (
    <div className="container mx-auto py-8 mt-12 mb-12">
      <h2 className="text-3xl text-white font-bold mb-6">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in-down">
        {projectsData.map((project, index) => {
          const key = project.name || `project-${index}`;
          return (
            <div
              key={key}
              ref={(el) => (refs.current[project.name] = el)}
              className={`rounded-xl overflow-hidden drop-shadow-lg bg-gray-900 border ${selected === project.name ? 'ring-4 ring-amber-400' : 'border-transparent'} transition-all duration-300`}
            >
              <div className="w-full h-48 bg-gray-800">
                <img
                  src={getScreenshotUrl(project.link)}
                  alt={project.name}
                  className="object-cover w-full h-full"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = project.imageUrl;
                  }}
                />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <div className="text-white font-semibold text-lg">{project.name}</div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-amber-400 hover:underline ml-2"
                  >
                    Open
                  </a>
                </div>
                <p className="text-sm text-gray-300 mt-2">Live preview and link for this project.</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
