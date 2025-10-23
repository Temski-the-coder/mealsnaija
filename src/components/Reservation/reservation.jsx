import "./reservation.css";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import toast, { Toaster } from "react-hot-toast";

const ReservationForm = () => {
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
          toast.success("Reservation request sent successfully!", {
            position: "top-right",
          });
          e.target.reset();
        },
        (error) => {
          console.error(error.text);
          toast.error("Failed to send reservation request. Please try again.", {
            position: "top-right",
          });
        }
      );
  };

  return (
    <section className="relative w-full flex justify-center items-center z-30">
      <Toaster position="top-right" reverseOrder={false} />
      <div className="bg-white border-b-[3px] border-orange-500 rounded-[3rem_3rem_3rem_0] shadow-lg w-full max-w-2xl flex flex-col items-center text-center">
        <h1 className="text-gray-800 text-xl md:text-2xl font-semibold mb-2">
          Book Me
        </h1>

        <form ref={form} onSubmit={sendEmail} className="w-full flex flex-col">
          {/* Input fields */}
          <div className="flex flex-col sm:flex-row justify-between gap-4">
            <input
              type="text"
              name="user_name"
              placeholder="Enter Name"
              required
              className="flex-1 border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <input
              type="email"
              name="user_email"
              required
              placeholder="Enter Email"
              className="flex-1 border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <input
              type="tel"
              name="user_phone"
              placeholder="Enter Phone"
              required
              className="flex-1 border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          {/* Date and Time */}
          <div className="flex flex-col sm:flex-row justify-between gap-2">
            <input
              type="date"
              name="reservation_date"
              required
              className="flex-1 border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
              defaultValue="2025-10-17"
            />
            <select required name="reservation_time" className="flex-1 border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-400">
              <option>Choose Time</option>
              <option>6:00 PM</option>
              <option>7:00 PM</option>
              <option>8:00 PM</option>
            </select>
          </div>

          <button type="submit" className="reserve-button text-white w-[400px] py-2 rounded">Book Now</button>
        </form>
      </div>
    </section>
  );
};

export default ReservationForm;