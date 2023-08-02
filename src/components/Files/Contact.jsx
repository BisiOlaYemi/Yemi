import React from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = React.useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_lkbqj2r", "template_sq1kmw3", form.current, "f_PU0PzBn9OomU0oW")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="flex flex-col md:flex-row h-fit mt-12">
      <div className="md:w-1/2 p-8">
        <img
          src="https://img.freepik.com/free-vector/emails-concept-illustration_114360-1355.jpg?size=626&ext=jpg&ga=GA1.2.149556823.1683788678&semt=sph"
          alt=""
          className="w-full h-full rounded-xl hover:scale-105 transition-all duration-300"
        />
      </div>
      <div className="md:w-1/2 p-8">
        <form ref={form} onSubmit={sendEmail}>
          <label htmlFor="user_name" className="block mb-2 font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="user_name"
            name="user_name"
            className="block w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
          <label htmlFor="user_email" className="block mb-2 font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="user_email"
            name="user_email"
            className="block w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
          <label htmlFor="message" className="block mb-2 font-medium text-gray-700">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={8}
            className="block w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
          <button
            type="submit"
            className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
