import React, { useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
const Form = () => {
    const form = useRef();
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm("service_nd2wkra", "template_x0dx68t", form.current, {
          publicKey: "s6wMILZMNjUON6OUQ",
        })
        .then(
          (result) => {
            console.log(result.text);
            console.log("SUCCESS!");
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    };
  
  return (
    <div
    className="bg-[#0000006e] rounded shadow-2xl p-7 sm:p-10"
    // data-aos="fade-up"
    // data-aos-duration="2000"
    // data-aos-delay="500"
  >
    <form ref={form} onSubmit={sendEmail}>
      <div className="mb-1 sm:mb-2">
        <label className="inline-block mb-1 text-white font-medium">
          Name
        </label>
        <input
          placeholder="Anand"
          required
          className="flex-grow text-white w-full h-12 px-4 mb-2 transition duration-200 bg-[#0000006e] border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
          type="text"
          name="user_name"
        />
      </div>
      <div className="mb-1 sm:mb-2">
        <label className="inline-block mb-1 text-white font-medium">
          E-mail
        </label>
        <input
          placeholder="anand.doe@example.org"
          required
          className="flex-grow w-full text-white h-12 px-4 mb-2 transition duration-200 bg-[#0000006e] border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
          type="email"
          name="user_email"
        />
      </div>
      <div className="mb-1 sm:mb-2">
        <label className="inline-block mb-1 text-white font-medium">
          Message
        </label>
        <textarea
          rows={7}
          cols="5"
          placeholder="message"
          required
          type="text"
          className="flex-grow w-full text-white px-4 mb-2 transition duration-200 bg-[#0000006e] border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
          name="message"
        />
      </div>
      <div className="mt-4 mb-2 sm:mb-4">
        <button
          type="submit"
          value="Send"
          className="inline-flex items-center border border-gray-300 justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
        >
          Send
        </button>
      </div>
    </form>
  </div>
  )
}

export default Form