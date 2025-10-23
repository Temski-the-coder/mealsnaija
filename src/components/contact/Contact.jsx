import { useRef } from "react";
import { FaPhoneAlt, FaEnvelope, FaWhatsapp, FaInstagram, FaTiktok } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_nms0aei", // EmailJS service ID
        "template_d5xm0xt", // EmailJS template ID
        form.current,
        "HGny4mUp_TrG9mVcf" // EmailJS public key
      )
      .then(
        (result) => {
            console.log(result.text);
          toast.success("Message sent successfully!", {
            position: "top-right",
          });
          e.target.reset();
        },
        (error) => {
          console.error(error.text);
          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
          });
        }
      );
    };
  return (
    <section id="contact" className="py-20 px-6 sm:px-10 md:px-20 lg:px-32">
        <Toaster position="top-right" reverseOrder={false} />
      {/* Heading */}
      <div className="max-w-7xl mx-auto text-center mb-15">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          Get In Touch With <span className="text-orange-500">MealsNaija</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Contact us to experience top-notch luxury meals.
        </p>
      </div>

      {/* Contact Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center pt-8">
        {/* Left: Contact Info */}
        <div className="flex flex-col text-center md:text-left gap-4">
          <ul className="flex flex-col text-base text-gray-700 gap-6">
            <li className="flex items-center justify-center md:justify-start gap-3">
              <FaPhoneAlt className="text-orange-500" />
              <span>+234-816-520-3325</span>
            </li>
            <li className="flex items-center justify-center md:justify-start gap-3">
              <FaEnvelope className="text-orange-500" />
              <span>Mealsnaija@gmail.com</span>
            </li>
          </ul>

          {/* Social Media */}
          <div className="flex flex-col justify-center md:justify-start gap-6">
            <a
              href="https://wa.me/2348165203325"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 text-2xl hover:scale-110 transition-transform"
            >
              <FaWhatsapp />
              <span>08165203325</span>
            </a>
            <a
              href="https://www.instagram.com/mealsnaija?igsh=MTdvaWx4ZTMzcGJreA%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 text-2xl hover:scale-110 transition-transform"
            >
              <FaInstagram />
              <span>MealsNaija</span>
            </a>
            <a
              href="https://www.tiktok.com/@mealsnaija?_t=ZS-90m7spHVLng&_r=1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black text-2xl hover:scale-110 transition-transform"
            >
              <FaTiktok />
              <span>MealsNaija</span>
            </a>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="bg-white shadow-lg rounded-2xl p-8">
          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Message
              </label>
              <textarea
                placeholder="Write your message here..."
                rows="4"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="min-w-full button justify-center items-center text-center text-white font-semibold py-3 rounded-lg transition-all"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
