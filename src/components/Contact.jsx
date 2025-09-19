import React from "react";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    setSuccess("");

    emailjs
      .sendForm("service_2r0grzi", "template_w6dfc0l", form.current, {
        publicKey: "m3sz4neaiuPw4bf92",
      })
      .then(
        () => {
          setName("");
          setEmail("");
          setMessage("");
          setSuccess("Message Sent Succesfully!");
          setIsSending(false);
        },
        (error) => {
          console.log("FAILED...", error.text);
          setSuccess("Failed to send. Please try again.");
          setIsSending(false);
        }
      );
  };

  return (
    <section id="contact" className="px-6 py-20 text-white bg-black md:px-12">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="mb-6 text-4xl font-bold text-green-500">Contact Me</h2>
        <p className="mb-12 text-gray-400">
          Got a question, idea, or opportunity? Drop a message below!
        </p>

        <p className="mb-2 text-2xl text-white">{success}</p>

        <form
          action="https://formspree.io/f/YOUR_FORMSPREE_ID"
          method="POST"
          className="space-y-6"
          ref={form}
          onSubmit={sendEmail}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full px-4 py-3 text-white bg-gray-900 border border-gray-700 rounded focus:outline-none focus:border-green-500"
            value={name}
            onChange={handleName}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full px-4 py-3 text-white bg-gray-900 border border-gray-700 rounded focus:outline-none focus:border-green-500"
            value={email}
            onChange={handleEmail}
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            className="w-full px-4 py-3 text-white bg-gray-900 border border-gray-700 rounded focus:outline-none focus:border-green-500"
            value={message}
            onChange={handleMessage}
          />
          <button
            type="submit"
            disabled={isSending}
            className={`px-6 py-3 font-semibold text-white rounded-lg transition ${
              isSending
                ? "bg-green-300 cursor-not-allowed"
                : "bg-green-500 hover:bg-green-600"
            }`}
          >
            {isSending ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
