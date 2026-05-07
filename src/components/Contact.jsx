import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkedAlt } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const response = await fetch(
        "https://formspree.io/f/xwvybyyz",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setStatus("✅ Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("❌ Failed to send message.");
      }
    } catch (error) {
      console.error(error);
      setStatus("❌ Error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-slate-900 text-white py-20 mt-12" id="contact">
      <div className="container mx-auto px-6 md:px-16 lg:px-24 max-w-6xl">
        
        <h2 className="text-3xl font-bold text-center mb-12">Contact Me</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          
          {/* Left Side */}
          <div className="p-5">
            <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mt-8 mb-4">
              Let’s Talk
            </h3>

            <p className="text-gray-300 mb-8">
              I’m open to discussing web development projects, collaboration
              opportunities, or just sharing ideas. Let’s connect!
            </p>

            <div className="space-y-4">
              <div className="flex items-center">
                <FaEnvelope className="text-green-400 text-xl mr-3" />
                <a href="mailto:shrinathrmateti@gmail.com" className="hover:underline">
                  shrinathrmateti@gmail.com
                </a>
              </div>

              <div className="flex items-center">
                <FaPhone className="text-green-400 text-xl mr-3" />
                <span>+91 9834714191</span>
              </div>

              <div className="flex items-center">
                <FaMapMarkedAlt className="text-green-400 text-xl mr-3" />
                <span>India</span>
              </div>
            </div>
          </div>

          {/* Right Side Form */}
          <div>
            {status && (
              <p className="text-center mb-4 font-medium">{status}</p>
            )}

            <form
              onSubmit={handleSubmit}
              className="bg-gray-900 p-6 rounded-2xl shadow-lg space-y-4"
            >
              <div>
                <label className="block mb-2 text-gray-300">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                  className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-green-400"
                />
              </div>

              <div>
                <label className="block mb-2 text-gray-300">Your Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-green-400"
                />
              </div>

              <div>
                <label className="block mb-2 text-gray-300">Message</label>
                <textarea
                  rows="4"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Enter your message"
                  required
                  className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-green-400"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-green-400 to-blue-500 text-white transform transition-transform duration-300 hover:scale-105 px-6 py-3 rounded-full font-medium disabled:opacity-50"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;