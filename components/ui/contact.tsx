"use client";

import React, { useEffect, useState } from "react";
import emailjs from "emailjs-com";

function Contact() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;

    emailjs.sendForm("service_8k911lh", "template_2ppq2rl", form, "4XWwEJ6KI5Rmy3bq7")
      .then((result) => {
          console.log(result.text);
          alert("Message sent successfully!");
      }, (error) => {
          console.log(error.text);
          alert("An error occurred, please try again.");
      });

    form.reset();
  };

  if (!isClient) {
    return null; // Avoid rendering on the server
  }

  return (
    <div className="flex flex-col items-center mt-[52px] px-4">
      <h1 className="text-center text-2xl mb-6 font-bold">Contact</h1>
      <form onSubmit={sendEmail} className="w-full max-w-lg bg-white p-8 shadow-lg rounded-lg">
        <div className="mb-4">
          <label htmlFor="name" className="block text-black text-sm font-bold mb-2">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full border rounded p-2"
            placeholder="Your name"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-black text-sm font-bold mb-2">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full border rounded p-2"
            placeholder="Your email"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-black text-sm font-bold mb-2">
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            className="w-full border rounded p-2"
            placeholder="Your message"
            rows={5}
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-black text-white p-2 rounded hover:text-black hover:bg-white"
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default Contact;