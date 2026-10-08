import { Link } from 'react-router-dom';
import aypLogo from '../assets/ayp.svg';
import lewkLogo from '../assets/Lewk.png';
import seemlessLogo from '../assets/seemless.png';
import placioLogo from '../assets/placio.svg';
import bountipLogo from '../assets/bountipLogo.svg';
import readycarLogo from '../assets/readycars.png';

const companies = [
  { src: aypLogo, alt: 'AYP' },
  { src: bountipLogo, alt: 'Bountip' },
  { src: lewkLogo, alt: 'Lewk' },
  { src: placioLogo, alt: 'Placio' },
  { src: readycarLogo, alt: 'ReadyCars' },
  { src: seemlessLogo, alt: 'SeamlessHR' },
];

const capabilities = [
  {
    number: '01',
    title: 'Product-minded frontend',
    description: 'Responsive interfaces that feel clear, fast, and natural to use.',
    tools: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    number: '02',
    title: 'Reliable backend systems',
    description: 'Thoughtful APIs and data models built to support real workflows.',
    tools: ['Python', 'FastAPI', 'Node.js', 'NestJS', 'PostgreSQL', 'MongoDB'],
  },
  {
    number: '03',
    title: 'From build to launch',
    description: 'Practical cloud and delivery experience to take products beyond the demo.',
    tools: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'MongoDB'],
  },
];

const highlights = [
  { value: '8+', label: 'years building software' },
  { value: '30+', label: 'cross-functional teams' },
  { value: 'End to end', label: 'from idea to deployment' },
];

function CompanyRail() {
  return (
    <div className="company-rail" aria-label="Companies Yemi has worked with">
      <div className="company-rail__track">
        {[...companies, ...companies].map((company, index) => (
          <div
            className="company-rail__item"
            key={`${company.alt}-${index}`}
            aria-hidden={index >= companies.length}
          >
            <img src={company.src} alt={index < companies.length ? company.alt : ''} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function DeveloperProfile() {
  return (
    <section className="developer-profile" aria-labelledby="developer-profile-title">
      <div className="developer-profile__inner">
        <div className="developer-profile__intro">
          <div>
            <p className="developer-profile__eyebrow">A little about how I work</p>
            <h2 id="developer-profile-title">
              Thoughtful engineering.
              <span> Real-world outcomes.</span>
            </h2>
            <p className="developer-profile__summary">
              I work across the product stack, connecting the details people see
              with the systems that make everything work. I enjoy collaborating
              with teams, solving the tricky parts, and shipping software that
              makes a difference.
            </p>
          </div>
          <div className="developer-profile__highlights">
            {highlights.map((highlight) => (
              <div className="developer-profile__highlight" key={highlight.label}>
                <strong>{highlight.value}</strong>
                <span>{highlight.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="capability-grid">
          {capabilities.map((capability) => (
            <article
              className="capability-card"
              key={capability.number}
            >
              <span className="capability-card__number">{capability.number}</span>
              <h3>{capability.title}</h3>
              <p>{capability.description}</p>
              <ul aria-label={`${capability.title} technologies`}>
                {capability.tools.map((tool) => <li key={tool}>{tool}</li>)}
              </ul>
            </article>
          ))}
        </div>

        <div className="developer-profile__companies">
          <div className="developer-profile__companies-heading">
            <span>Collaboration is at the heart of good software</span>
            <p>Teams and products I&apos;ve had the chance to work with</p>
          </div>
          <CompanyRail />
        </div>

        <div className="developer-profile__cta">
          <div>
            <span>Have a good problem to solve?</span>
            <p>Let&apos;s turn it into something people can use.</p>
          </div>
          <div className="developer-profile__cta-actions">
            <Link to="/Contact">Start a conversation <span aria-hidden="true">-&gt;</span></Link>
            <Link to="/projects" className="developer-profile__projects-link">Explore projects</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
