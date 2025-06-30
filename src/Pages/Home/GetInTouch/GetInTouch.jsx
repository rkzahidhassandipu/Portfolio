import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";

const GetInTouch = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      id="contact"
      className="bg-gradient-to-r from-purple-900 to-purple-700 text-white py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-pink-300 mb-2">
          Get in Touch
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-pink-400 to-blue-400 mx-auto mb-12 rounded-full" />

        {/* Contact Info and Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div
            className="bg-white/10 border border-white/20 p-6 rounded-xl backdrop-blur-md shadow-md"
            data-aos="fade-right"
          >
            <h3 className="text-xl font-semibold text-pink-300 mb-4">
              Contact Information
            </h3>

            <div className="space-y-4">
              {[
                {
                  icon: <FaEnvelope />,
                  label: "Email",
                  value: "rkrazzkhan01731@gmail.com",
                  subtitle: "Send me an email anytime",
                },
                {
                  icon: <FaPhoneAlt />,
                  label: "Phone",
                  value: "+60 (115) 111-0711",
                  subtitle: "Feel free to call during business hours",
                },
                {
                  icon: <FaWhatsapp />,
                  label: "WhatsApp",
                  value: "+60 (115) 111-0711",
                  subtitle: "Quick replies on WhatsApp",
                },
                {
                  icon: <FaMapMarkerAlt />,
                  label: "Location",
                  value: "Jessore, Bangladesh",
                  subtitle: "Available for remote work worldwide",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  data-aos="fade-up"
                  data-aos-delay={i * 100}
                  className="flex items-start gap-4 p-4 bg-white/5 border border-white/10 rounded-lg backdrop-blur-sm"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-pink-400 to-purple-500 text-white text-lg">
                    {item.icon}
                  </div>
                  <div className="text-sm text-purple-100">
                    <div className="font-semibold text-white mb-0.5">
                      {item.label}
                    </div>
                    <div>{item.value}</div>
                    <div className="text-xs text-purple-300 mt-1">
                      {item.subtitle}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Send Message Form */}
          <div
            className="bg-white/10 border border-white/20 p-6 rounded-xl backdrop-blur-md shadow-md"
            data-aos="fade-left"
          >
            <h3 className="text-xl font-semibold text-pink-300 mb-4">
              Send a Message
            </h3>
            <form
              className="space-y-4"
              action="https://formspree.io/f/xknldwlr"
              method="POST"
            >
              <div>
                <label className="block text-sm mb-1 text-purple-100">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-2 rounded bg-purple-900/20 border border-white/20 text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm mb-1 text-purple-100">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 rounded bg-purple-900/20 border border-white/20 text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-sm mb-1 text-purple-100">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  required
                  className="w-full px-4 py-2 rounded bg-purple-900/20 border border-white/20 text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
                  placeholder="Let's work together"
                />
              </div>
              <div>
                <label className="block text-sm mb-1 text-purple-100">
                  Message
                </label>
                <textarea
                  name="message"
                  rows="4"
                  required
                  className="w-full px-4 py-2 rounded bg-purple-900/20 border border-white/20 text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
                  placeholder="Type your message..."
                />
              </div>
              <button
                type="submit"
                className="bg-gradient-to-r from-pink-500 to-purple-500 px-6 py-2 rounded-full text-white font-semibold hover:opacity-90 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Collaboration Card */}
        <div
          className="mt-12 bg-white/10 border border-white/20 rounded-xl p-6 text-center backdrop-blur-md shadow-md max-w-4xl mx-auto"
          data-aos="zoom-in"
        >
          <h4 className="text-pink-300 font-semibold mb-2 text-lg">
            Let's Build Something Amazing Together
          </h4>
          <p className="text-purple-100 text-sm sm:text-base leading-relaxed">
            Whether you have a project in mind, need technical consultation, or
            just want to connect with a fellow developer, I'd love to hear from
            you. Let's turn your ideas into reality!
          </p>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
