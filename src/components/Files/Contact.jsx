import React from "react";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
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
      <div className=" md:w-1/2 p-8">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label
                htmlFor="first-name"
                className="block text-sm font-semibold text-white"
              >
                First Name
              </label>
              <input
                type="text"
                id="first-name"
                className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your first name"
              />
            </div>
            <div>
              <label
                htmlFor="last-name"
                className="block text-sm font-semibold text-white"
              >
                Last Name
              </label>
              <input
                type="text"
                id="last-name"
                className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your last name"
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-white"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your email address"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-sm font-semibold text-white"
            >
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your message"
            />
          </div>
          <button
            type="submit"
            className="bg-indigo-800 text-white px-4 py-2 font-bold rounded-md hover:bg-gray-600 hover:scale-105 transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
