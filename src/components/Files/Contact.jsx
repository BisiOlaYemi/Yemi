import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa';
import { BsTwitterX } from 'react-icons/bs';
import yemi from '../../assets/yemi.png';
import MainLayout from '../Layouts/MainLayouts';

const initialFormData = {
  user_name: '',
  user_email: '',
  message: '',
};

const Contact = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (event) => {
    setFormData((current) => ({
      ...current,
      [event.target.name]: event.target.value,
    }));
    setSuccess(false);
    setError('');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    setSuccess(false);
    setError('');

    try {
      const response = await fetch('https://getform.io/f/cfa37ff6-ad1b-4704-bc7b-03ddb734a155', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Message submission failed. Please try again, or email me directly.');
      }

      setSuccess(true);
      setFormData(initialFormData);
    } catch (submissionError) {
      setError(submissionError.message || 'Something went wrong. Please try again, or email me directly.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <MainLayout>
      <main className="contact-page">
        <div className="contact-page__inner">
          <Link to="/" className="contact-page__back">
            <span aria-hidden="true">←</span> Back to profile
          </Link>

          <header className="contact-page__heading">
            <p className="contact-page__eyebrow">Get in touch</p>
            <h1>Let&apos;s make something <span>meaningful.</span></h1>
            <p>
              Have a project, an opportunity, or just a good idea? Tell me a little
              about it and I&apos;ll get back to you.
            </p>
          </header>

          <div className="contact-layout">
            <aside className="contact-card">
              <div className="contact-card__portrait">
                <img src={yemi} alt="Yemi Ogunrinde" />
                <span className="contact-card__availability">
                  <span aria-hidden="true" /> Open to conversations
                </span>
              </div>

              <div className="contact-card__body">
                <p className="contact-card__eyebrow">Your point of contact</p>
                <h2>Yemi Ogunrinde</h2>
                <p className="contact-card__role">Senior Software Engineer</p>

                <div className="contact-card__details">
                  <a href="mailto:ogunrinde_olayemi@yahoo.com">
                    <FaEnvelope aria-hidden="true" />
                    <span>ogunrinde_olayemi@yahoo.com</span>
                  </a>
                  <div>
                    <FaMapMarkerAlt aria-hidden="true" />
                    <span>Lisbon, Portugal · Remote-friendly</span>
                  </div>
                </div>

                <div className="contact-card__socials" aria-label="Social profiles">
                  <a href="https://www.linkedin.com/in/yemiogunrinde/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <FaLinkedin aria-hidden="true" />
                  </a>
                  <a href="https://github.com/BisiOlaYemi" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <FaGithub aria-hidden="true" />
                  </a>
                  <a href="https://x.com/yemioogunrinde" target="_blank" rel="noopener noreferrer" aria-label="X">
                    <BsTwitterX aria-hidden="true" />
                  </a>
                </div>
              </div>
            </aside>

            <section className="contact-form-card" aria-labelledby="contact-form-title">
              <div className="contact-form-card__heading">
                <p className="contact-card__eyebrow">Send a message</p>
                <h2 id="contact-form-title">Tell me what you&apos;re thinking</h2>
                <p>Share a few details and I&apos;ll be in touch soon.</p>
              </div>

              {success && (
                <p className="contact-form__feedback contact-form__feedback--success" role="status">
                  Thanks for reaching out. Your message has been sent.
                </p>
              )}
              {error && (
                <p className="contact-form__feedback contact-form__feedback--error" role="alert">
                  {error}
                </p>
              )}

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="contact-form__row">
                  <div className="contact-form__field">
                    <label htmlFor="user_name">Your name</label>
                    <input
                      type="text"
                      id="user_name"
                      name="user_name"
                      placeholder="Jane Smith"
                      value={formData.user_name}
                      onChange={handleChange}
                      autoComplete="name"
                      required
                    />
                  </div>
                  <div className="contact-form__field">
                    <label htmlFor="user_email">Email address</label>
                    <input
                      type="email"
                      id="user_email"
                      name="user_email"
                      placeholder="jane@company.com"
                      value={formData.user_email}
                      onChange={handleChange}
                      autoComplete="email"
                      required
                    />
                  </div>
                </div>

                <div className="contact-form__field">
                  <label htmlFor="message">Your message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    placeholder="A little context about your project or idea..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="contact-form__submit-row">
                  <p>I usually reply within a couple of working days.</p>
                  <button type="submit" disabled={submitting}>
                    {submitting ? 'Sending…' : 'Send message'}
                    {!submitting && <span aria-hidden="true">↗</span>}
                  </button>
                </div>
              </form>
            </section>
          </div>
        </div>
      </main>
    </MainLayout>
  );
};

export default Contact;
