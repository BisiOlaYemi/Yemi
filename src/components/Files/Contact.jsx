import React, { useState } from "react";
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import yemi from '../../assets/yemi.png';

const Contact = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("https://getform.io/f/cfa37ff6-ad1b-4704-bc7b-03ddb734a155", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          console.log("Form submission successful!");
          alert("Thank you for Contacting Yemi, Your Message is sent!");
        } else {
          console.log("Form submission failed.");
          alert("Form submission failed. Please try again later.");
        }
      })
      .catch((error) => {
        console.log("Error occurred while submitting the form:", error);
        alert("An error occurred while submitting the form. Please try again later.");
      });
  };

  return (
    <div className="flex flex-col md:flex-row h-fit mt-12">
      <Link to="/" className="ml-4 lg:ml-32">
          <img 
            src={logo} 
            alt="Yemi" 
            className="w-[100px] h-auto"
          />
        </Link>
      <div className="md:w-1/2 p-8">
      <img
          src={yemi}
          alt=""
          className="w-full h-full lg:mt-16 rounded-xl hover:scale-105 transition-all duration-300"
      />
      </div>
      <div className="md:w-1/2 p-8 lg:mt-24">
        <form onSubmit={handleSubmit}>
          <label htmlFor="user_name" className="block mb-2 font-medium text-white">
            Name
          </label>
          <input
            type="text"
            id="user_name"
            name="user_name"
            value={formData.user_name}
            onChange={handleChange}
            className="block w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
          <label htmlFor="user_email" className="block mb-2 font-medium text-white">
            Email
          </label>
          <input
            type="email"
            id="user_email"
            name="user_email"
            value={formData.user_email}
            onChange={handleChange}
            className="block w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
          <label htmlFor="message" className="block mb-2 font-medium text-white">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={8}
            value={formData.message}
            onChange={handleChange}
            className="block w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
          <button
            type="submit"
            className="px-4 py-2 text-white bg-indigo-800 font-semibold rounded-md hover:bg-green-800 focus:outline-none focus:border-indigo-800"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
