import React, { useState } from "react";
import { Link } from 'react-router-dom';
import yemi from '../../assets/yemi.png';
import Footer from '../Layouts/Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic client-side validation
    if (!formData.user_name.trim() || !formData.user_email.trim() || !formData.message.trim()) {
      alert('Please fill in all fields before submitting.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.user_email)) {
      alert('Please enter a valid email address.');
      return;
    }

    setSubmitting(true);

    fetch("https://getform.io/f/cfa37ff6-ad1b-4704-bc7b-03ddb734a155", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        setSubmitting(false);
        if (response.ok) {
          setSuccess(true);
          setFormData({ user_name: '', user_email: '', message: '' });
        } else {
          alert("Form submission failed. Please try again later.");
        }
      })
      .catch((error) => {
        setSubmitting(false);
        console.log("Error occurred while submitting the form:", error);
        alert("An error occurred while submitting the form. Please try again later.");
      });
  };

  return (
    <div className="bg-gray-950 min-h-screen text-white flex flex-col">
      <main className="flex-1">
        <div className="container mx-auto max-w-7xl px-8 py-12">
          <div className="mb-6">
            <Link to="/" className="inline-block bg-gray-800 px-3 py-2 rounded-md hover:bg-gray-700">&larr; Back</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="p-4">
            <img
              src={yemi}
              alt="Yemi"
              className="w-full h-auto lg:mt-4 rounded-xl hover:scale-105 transition-all duration-300"
            />
            <p className="mt-4 text-gray-300">Prefer emailing directly? <a href="mailto:ogunrinde_olayemi@yahoo.com" className="text-orange-400 underline">ogunrinde_olayemi@yahoo.com</a></p>
          </div>

          <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Get in touch</h2>
            {success && (
              <div className="mb-4 p-3 bg-emerald-900 rounded text-emerald-200">Thank you — your message was sent.</div>
            )}

            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label htmlFor="user_name" className="block mb-2 font-medium text-white">Name</label>
                <input
                  type="text"
                  id="user_name"
                  name="user_name"
                  placeholder="Your full name"
                  value={formData.user_name}
                  onChange={handleChange}
                  className="block w-full px-4 py-2 mb-1 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
                  required
                />
              </div>

              <div>
                <label htmlFor="user_email" className="block mb-2 font-medium text-white">Email</label>
                <input
                  type="email"
                  id="user_email"
                  name="user_email"
                  placeholder="you@anything.com"
                  value={formData.user_email}
                  onChange={handleChange}
                  className="block w-full px-4 py-2 mb-1 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 font-medium text-white">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={8}
                  placeholder="Tell me about your project or question"
                  value={formData.message}
                  onChange={handleChange}
                  className="block w-full px-4 py-2 mb-1 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
                  required
                />
              </div>

              <div>
                <button
                  type="submit"
                  disabled={submitting}
                  className={`px-4 py-2 text-white bg-orange-500 font-semibold rounded-md hover:brightness-90 transition-all ${submitting ? 'opacity-60 cursor-not-allowed' : ''}`}
                >
                  {submitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      </main>

      <Footer />
    </div>
  );
};

export default Contact;
