import React from "react";

const Contact = () => {
  return (
    <section>
      <div className="py-4 lg:py-8 px-6 lg:px-12 mx-3 lg:mx-auto max-w-screen-md  shadow-lg my-4 lg:my-8">
        <h2 className="mb-4 text-xl lg:text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white uppercase">
          Contact Us
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
          Should you have any inquiries or feedback, feel free to reach out to
          us via this form. We are here to support you with a range of services,
          including tailored promotional tools and complimentary hosting.
          Remember, no question is insignificant, so do not hesitate to ask!
        </p>

        {/* Contact form */}
        <form className="space-y-8">
          {/* Name section */}
          <div>
            <label
              for="name"
              className="block mb-2 text-base lg:text-lg font-medium text-gray-900 uppercase"
            >
              Your name
            </label>
            <input
              type="text"
              id="name"
              className="block p-3 w-full text-base text-gray-900 bg-gray-300 focus:bg-gray-50 duration-700 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 outline-none"
              placeholder="Enter your name"
              required
            />
          </div>
          {/* Email section */}
          <div>
            <label
              for="email"
              className="block mb-2 text-base lg:text-lg font-medium text-gray-900 dark:text-gray-300 uppercase"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm bg-gray-300 focus:bg-gray-50 duration-700 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 outline-none"
              placeholder="name@flowbite.com"
              required
            />
          </div>
          {/* Message section */}
          <div className="sm:col-span-2">
            <label
              for="message"
              className="block mb-2 text-base lg:text-lg font-medium text-gray-900 dark:text-gray-400 uppercase"
            >
              Your message
            </label>
            <textarea
              id="message"
              rows="6"
              className="block p-2.5 w-full text-base text-gray-900 bg-gray-300 focus:bg-gray-50 duration-700 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 outline-none"
              placeholder="Leave a comment..."
            ></textarea>
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="text-sm lg:text-base px-6 lg:px-12 py-2 lg:py-3 rounded-md font-medium text-center text-white bg-lime-800 hover:scale-90 active:scale-105 transition duration-300 uppercase rounded-lg sm:w-fit"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
