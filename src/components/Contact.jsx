import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Calendar,
  MessageSquare,
} from "lucide-react";
import { PERSONAL_INFO, SOCIAL_LINKS } from "../utils/constants";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission (replace with actual form handling)
    setTimeout(() => {
      setSubmitStatus("success");
      setIsSubmitting(false);
      setFormData({ name: "", email: "", subject: "", message: "" });

      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus(null), 3000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 px-6 bg-slate-800/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">
          Let's Build Something Amazing
        </h2>
        <p className="text-slate-400 text-center mb-16 max-w-2xl mx-auto">
          Ready to take on challenging projects and contribute to innovative
          teams. Let's discuss how we can create exceptional software solutions
          together.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold mb-8">Get In Touch</h3>
            
            <div className="space-y-6 mb-8">
              {/* email */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mr-4">
                  <Mail className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <p className="text-slate-400 text-sm">Email</p>
                  <a
                    href={SOCIAL_LINKS.email}
                    className="text-white hover:text-blue-400 transition-colors"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>

              {/* TODO: No need to give phone number */}
              {/* <div className="flex items-center">
                <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center mr-4">
                  <Phone className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <p className="text-slate-400 text-sm">Phone</p>
                  <a
                    href={`tel:${PERSONAL_INFO.phone}`}
                    className="text-white hover:text-purple-400 transition-colors"
                  >
                    {PERSONAL_INFO.phone}
                  </a>
                </div>
              </div> */}

              {/* location */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-pink-600/20 rounded-lg flex items-center justify-center mr-4">
                  <MapPin className="w-6 h-6 text-pink-400" />
                </div>
                <div>
                  <p className="text-slate-400 text-sm">Location</p>
                  <p className="text-white">{PERSONAL_INFO.location}</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold mb-4 text-slate-300">
                Connect With Me
              </h4>
              
              <div className="flex space-x-4">
                <a
                  href={SOCIAL_LINKS.github}
                  className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center hover:bg-slate-600 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-6 h-6 text-white" />
                </a>
                <a
                  href={SOCIAL_LINKS.linkedin}
                  className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center hover:bg-slate-600 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-6 h-6 text-white" />
                </a>
                {/* <a
                  href={SOCIAL_LINKS.calendly}
                  className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center hover:bg-slate-600 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Calendar className="w-6 h-6 text-white" />
                </a> */}
                <a
                  href={SOCIAL_LINKS.email}
                  className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center hover:bg-slate-600 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Mail className="w-6 h-6 text-white" />
                </a>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-4">
              {/* TODO: connect to Gmeet */}
              {/* <a
                href={SOCIAL_LINKS.calendly}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all flex items-center justify-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Schedule a Call
              </a> */}
              <a
                href={PERSONAL_INFO.resume}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all flex items-center justify-center"
                download
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Download Resume
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold mb-8">Send Me a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-slate-300 mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-slate-300 mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-slate-300 mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-slate-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  placeholder="Tell me about your project, opportunity, or just say hello!"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-6 py-3 rounded-lg font-semibold transition-all flex items-center justify-center ${
                  isSubmitting
                    ? "bg-slate-600 cursor-not-allowed"
                    : "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                }`}
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                ) : (
                  <Send className="w-5 h-5 mr-2" />
                )}
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

              {submitStatus === "success" && (
                <div className="p-4 bg-green-600/20 border border-green-500/50 rounded-lg">
                  <p className="text-green-400 text-sm">
                    ✓ Message sent successfully! I'll get back to you soon.
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Call-to-Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl p-8 border border-slate-700">
            <h3 className="text-2xl font-bold mb-4">Ready to Work Together?</h3>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              I'm always interested in discussing new opportunities, challenging
              projects, and innovative ideas. Let's connect and explore how we
              can create something exceptional.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={SOCIAL_LINKS.email}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all flex items-center justify-center"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Me
              </a>
              <a
                href={SOCIAL_LINKS.calendly}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all flex items-center justify-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Meeting
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
