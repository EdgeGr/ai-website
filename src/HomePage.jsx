import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useState } from "react";
import emailjs from "emailjs-com";

export default function HomePage() {
  // State to store form values
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Use EmailJS to send the email
    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",  // Replace with your service ID
        "YOUR_TEMPLATE_ID",  // Replace with your template ID
        e.target,            // Form reference
        "YOUR_USER_ID"       // Replace with your user ID
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          console.log(result.text);
        },
        (error) => {
          alert("Error: Message not sent.");
          console.log(error.text);
        }
      );
    
    // Clear form after submission
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="bg-black text-gray-100 font-sans">

export default function HomePage() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <div className="bg-black text-gray-100 font-sans">
      {/* Global Background with shiny dark effect */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage:
            "url('https://cdn.pixabay.com/photo/2022/05/01/09/16/digital-7175743_1280.jpg')", // Dark, futuristic tech
        }}
      ></div>

      {/* Overlay Glow */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      {/* Header */}
      <header className="sticky top-0 flex justify-between items-center px-8 py-6 bg-black/80 backdrop-blur-md text-white shadow-lg z-50">
        <h1 className="text-3xl font-extrabold text-blue-500">
          Effective AI Solutions
        </h1>
        <nav className="space-x-8 text-lg">
          <a
            href="#about"
            className="text-gray-300 hover:text-blue-400 transition"
          >
            About
          </a>
          <a
            href="#services"
            className="text-gray-300 hover:text-blue-400 transition"
          >
            Services
          </a>
          <a
            href="#impact"
            className="text-gray-300 hover:text-blue-400 transition"
          >
            Impact
          </a>
          <a
            href="#contact"
            className="text-gray-300 hover:text-blue-400 transition"
          >
            Contact
          </a>
        </nav>
      </header>

      {/* Hero Section with Shiny Dark Background */}
      <main
        className="relative flex flex-col items-center justify-center h-screen text-center px-6 overflow-hidden z-10"
        style={{
          backgroundImage:
            "url('https://plus.unsplash.com/premium_photo-1683120966127-14162cdd0935?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/70 z-0" />
        <div className="relative z-10">
          <h2 className="text-5xl font-extrabold text-white mb-6 leading-tight">
            Unlock the Power of AI for Your Business
          </h2>
          <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
            At Effective AI Solutions, we create AI strategies that simplify
            complex tasks and scale with your needs.
          </p>
          <a href="#contact">
            <button className="px-10 py-4 bg-blue-600 text-white text-xl font-semibold rounded-full hover:bg-blue-700 hover:scale-105 transform transition duration-300 shadow-lg hover:shadow-2xl">
              Get Started
            </button>
          </a>
        </div>
      </main>
      {/* About Section */}
      <section
        id="about"
        className="relative py-20 px-8 bg-black text-white z-10"
      >
        <div className="max-w-5xl mx-auto text-center" data-aos="fade-up">
          <h3 className="text-3xl font-bold text-blue-500 mb-6">
            What Sets Us Apart
          </h3>
          <img
            src="https://media.istockphoto.com/id/1075599562/photo/programmer-working-with-program-code.jpg?s=612x612&w=0&k=20&c=n3Vw5SMbMCWW1YGG6lnTfrwndNQ8B_R4Vw-BN7LkqpA="
            alt="AI Brain Illustration"
            className="w-full max-w-xl mx-auto mb-8 animate-fade-in rounded-2xl shadow-2xl"
          />
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-10">
            What makes us different isn’t just our technical skills — it’s our
            commitment to blending innovation with impact. Here’s how we stand
            apart in a crowded field:
          </p>
        </div>
      </section>

      <section
        id="services"
        className="relative py-20 px-8 bg-black text-white z-10"
      >
        <div className="max-w-5xl mx-auto text-center" data-aos="fade-up">
          <h3 className="text-3xl font-bold text-blue-500 mb-6">
            Our Services
          </h3>
          <p className="text-lg text-gray-300 mb-10 max-w-3xl mx-auto">
            From AI consulting to full-scale deployment, we offer end-to-end
            services to turn your data into actionable intelligence.
          </p>

          {/* Updated Grid Layout */}
          <div className="grid gap-10 md:grid-cols-4">
            {[
              {
                title: "Expert Guidance",
                icon: "🤖",
                hoverClass: "hover:bg-gray-400 hover:text-white",
                desc: "We provide strategic AI consulting to navigate complex challenges.",
              },
              {
                title: "Tailored Tools",
                icon: "🧠",
                hoverClass: "hover:bg-gray-400 hover:text-white",
                desc: "Custom AI tools designed to meet the unique needs of your business.",
              },
              {
                title: "Reliable Support",
                icon: "🔧",
                hoverClass: "hover:bg-gray-400 hover:text-white",
                desc: "Comprehensive support to ensure long-term success of your AI solutions.",
              },
              {
                icon: "⚡",
                title: "Rapid Prototyping",
                desc: "From idea to MVP, we move fast and validate early to ensure results.",
                hoverClass: "hover:bg-gray-400 hover:text-white",
              },
            ].map(
              ({
                title,
                icon,
                hoverClass,
                desc = "We deliver scalable, intelligent systems tailored to your goals.",
              }) => (
                <div
                  key={title}
                  className={`bg-gray-800 rounded-xl p-6 transition transform hover:-translate-y-2 hover:shadow-2xl border-2 border-gray-600 ${hoverClass}`}
                >
                  <div className="text-5xl mb-4">{icon}</div>
                  <h4 className="text-xl font-semibold text-blue-500 mb-2">
                    {title}
                  </h4>
                  <p className="text-sm text-gray-300">{desc}</p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        id="testimonials"
        className="bg-black py-20 px-8 text-center text-white z-10"
      >
        <h3 className="text-3xl font-bold text-blue-500 mb-10">
          What Our Clients Say
        </h3>
        <div className="flex flex-col md:flex-row justify-center gap-8">
          {/* Testimonial 1 */}
          <div
            className="bg-gray-800 p-10 rounded-xl shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:bg-gray-700 border-2 border-gray-600 z-10"
            data-aos="fade-up"
          >
            <div className="flex items-center justify-center mb-6">
              <img
                src="https://randomuser.me/api/portraits/women/1.jpg"
                alt="Client 1"
                className="w-20 h-20 rounded-full object-cover mr-4"
              />
              <div>
                <p className="text-lg text-gray-300 mb-2">
                  "Effective AI Solutions helped us streamline our processes and
                  integrate advanced automation, making our business more
                  efficient and scalable."
                </p>
                <p className="font-semibold text-blue-500">Jane Doe</p>
                <p className="text-sm text-gray-400">CEO, TechInnovators</p>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div
            className="bg-gray-800 p-10 rounded-xl shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:bg-gray-700 border-2 border-gray-600"
            data-aos="fade-up"
          >
            <div className="flex items-center justify-center mb-6">
              <img
                src="https://randomuser.me/api/portraits/men/1.jpg"
                alt="Client 2"
                className="w-20 h-20 rounded-full object-cover mr-4"
              />
              <div>
                <p className="text-lg text-gray-300 mb-2">
                  "The team at Effective AI Solutions delivered tailored AI
                  tools that perfectly fit our business needs, enabling us to
                  make data-driven decisions."
                </p>
                <p className="font-semibold text-blue-500">John Smith</p>
                <p className="text-sm text-gray-400">COO, DataSmart</p>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div
            className="bg-gray-800 p-10 rounded-xl shadow-lg  duration-300 ease-in-out transform hover:scale-105  hover:shadow-2xl hover:bg-gray-700 border-2 border-gray-600"
            data-aos="fade-up"
          >
            <div className="flex items-center justify-center mb-6">
              <img
                src="https://randomuser.me/api/portraits/women/2.jpg"
                alt="Client 3"
                className="w-20 h-20 rounded-full object-cover mr-4"
              />
              <div>
                <p className="text-lg text-gray-300 mb-2">
                  "The AI solutions provided by this company are top-notch, and
                  the support has been exceptional throughout our journey."
                </p>
                <p className="font-semibold text-blue-500">Alice Johnson</p>
                <p className="text-sm text-gray-400">Founder, InnovateTech</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section
        id="impact"
        className="bg-black py-20 px-8 text-white text-center z-10"
      >
        <h3 className="text-3xl font-bold text-blue-500 mb-10">
          Proven Results with AI
        </h3>
        <p className="text-lg text-gray-300 mb-10 max-w-3xl mx-auto">
          We’re proud to have helped numerous clients unlock the potential of AI
          to improve efficiency, save costs, and drive results. Here’s a
          snapshot of how we’ve made a tangible difference:
        </p>

        <h3 className="text-3xl font-bold text-blue-500 mb-6">
          Growth in AI Efficiency
        </h3>
        <p className="text-lg text-gray-300 mb-10 max-w-3xl mx-auto">
          See how our AI solutions have improved efficiency and results across
          real client use cases.
        </p>

        <div className="w-full max-w-4xl mx-auto bg-gray-900 p-6 rounded-xl shadow-xl border border-gray-700">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart
              data={[
                { month: "Jan", accuracy: 68 },
                { month: "Feb", accuracy: 72 },
                { month: "Mar", accuracy: 78 },
                { month: "Apr", accuracy: 85 },
                { month: "May", accuracy: 91 },
              ]}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" stroke="#ccc" />
              <YAxis domain={[60, 100]} stroke="#ccc" />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="accuracy"
                stroke="#3b82f6"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Success Stats */}
        <div className="flex flex-col md:flex-row justify-center gap-10 mt-10">
          {/* Stat 1 */}
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg border-2 border-gray-600">
            <h4 className="text-4xl font-extrabold text-blue-400 mb-2">85%</h4>
            <p className="text-gray-300">Automation Efficiency Gain</p>
          </div>

          {/* Stat 2 */}
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg border-2 border-gray-600">
            <h4 className="text-4xl font-extrabold text-blue-400 mb-2">
              300K+
            </h4>
            <p className="text-gray-300">Data Points Analyzed</p>
          </div>

          {/* Stat 3 */}
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg border-2 border-gray-600">
            <h4 className="text-4xl font-extrabold text-blue-400 mb-2">95%</h4>
            <p className="text-gray-300">Client Satisfaction</p>
          </div>
        </div>

        {/* Client Success Stories */}
        <h3 className="text-3xl font-bold text-blue-500 mb-6 mt-16">
          Real Stories from Our Clients
        </h3>
        <div className="flex flex-wrap justify-center gap-12">
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg max-w-md hover:scale-105 transition-all hover:bg-gray-500">
            <h4 className="text-xl font-bold text-blue-500 mb-4">
              TechInnovators
            </h4>
            <p className="text-gray-300 mb-4">
              "Effective AI Solutions helped streamline our processes with
              intelligent automation, leading to a significant boost in
              productivity and cost savings."
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl shadow-lg max-w-md hover:scale-105 transition-all hover:bg-gray-500">
            <h4 className="text-xl font-bold text-blue-500 mb-4">DataSmart</h4>
            <p className="text-gray-300 mb-4">
              "With AI-driven insights, we optimized our data strategy,
              resulting in more informed decisions and improved business
              performance."
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl shadow-lg max-w-md hover:scale-105 transition-all hover:bg-gray-500">
            <h4 className="text-xl font-bold text-blue-500 mb-4">
              InnovateTech
            </h4>
            <p className="text-gray-300 mb-4">
              "The custom AI tools created for our business allowed us to focus
              on innovation, while AI handled routine tasks efficiently."
            </p>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
       <section
        id="contact"
        className="min-h-screen flex flex-col justify-center items-center bg-black text-white z-10"
        data-aos="fade-up"
      >
        <h2 className="text-3xl font-bold text-blue-500 mb-6">Get in Touch</h2>
        <p className="text-lg mb-8 max-w-2xl text-center mx-auto">
          Have any questions or ready to take the next step? We’d love to hear
          from you and discuss how we can help elevate your business with AI.
          Fill out the form below, and a member of our team will get back to you
          as soon as possible.
        </p>
        <form
          className="max-w-xl mx-auto space-y-6 text-left w-full"
          data-aos="fade-up"
          data-aos-delay="100"
          onSubmit={handleSubmit} // Attach the form submission handler
        >
          <div>
            <label className="block text-white mb-1">Name</label>
            <input
              type="text"
              placeholder="Your name"
              name="name" // This should match the form field's name in the state
              value={formData.name} // Bind input value to state
              onChange={handleInputChange} // Handle input changes
              className="w-full p-3 rounded-lg bg-white text-black"
            />
          </div>
          <div>
            <label className="block text-white mb-1">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              name="email" // This should match the form field's name in the state
              value={formData.email} // Bind input value to state
              onChange={handleInputChange} // Handle input changes
              className="w-full p-3 rounded-lg bg-white text-black"
            />
          </div>
          <div>
            <label className="block text-white mb-1">Message</label>
            <textarea
              rows={4}
              placeholder="How can we help you?"
              name="message" // This should match the form field's name in the state
              value={formData.message} // Bind input value to state
              onChange={handleInputChange} // Handle input changes
              className="w-full p-3 rounded-lg bg-white text-black"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-white text-blue-700 font-bold rounded-full hover:bg-blue-100 transition duration-300 shadow-lg hover:scale-105"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 bg-black text-white z-10">
        <p>
          &copy; {new Date().getFullYear()} Effective AI Solutions. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
}
