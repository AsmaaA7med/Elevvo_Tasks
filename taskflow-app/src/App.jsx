import { useState } from "react";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark bg-gray-900 text-white" : "bg-white text-gray-900"}>
      {/* Navbar */}
      <nav className="fixed w-full flex justify-between items-center px-8 py-4 shadow-md bg-white/70 dark:bg-gray-900/70 backdrop-blur-md z-50">
        <h1 className="text-2xl font-bold">TaskFlow</h1>
        <ul className="flex space-x-6 font-medium">
          <li><a href="#home" className="hover:text-blue-500">Home</a></li>
          <li><a href="#features" className="hover:text-blue-500">Features</a></li>
          <li><a href="#pricing" className="hover:text-blue-500">Pricing</a></li>
          <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
        </ul>
        <button 
          onClick={() => setDarkMode(!darkMode)} 
          className="p-2 rounded-full border dark:border-gray-600"
        >
          {darkMode ? <Sun className="w-5 h-5"/> : <Moon className="w-5 h-5"/>}
        </button>
      </nav>

      {/* Hero Section */}
      <section id="home" className="h-screen flex flex-col justify-center items-center text-center px-6">
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-extrabold mb-6"
        >
          Organize your tasks and boost productivity 🚀
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-lg mb-8"
        >
          TaskFlow helps you manage tasks, collaborate, and stay productive.
        </motion.p>
        <a href="#features" className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition">
          Get Started
        </a>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-10 text-center">
        <h2 className="text-3xl font-bold mb-12">Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {["Task Management", "Collaboration", "Boost Productivity"].map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="p-6 bg-gray-100 dark:bg-gray-800 rounded-2xl shadow"
            >
              <h3 className="text-xl font-semibold mb-4">{feature}</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-10 text-center bg-gray-50 dark:bg-gray-900">
        <h2 className="text-3xl font-bold mb-12">Pricing</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Free", price: "$0 / month" },
            { title: "Pro", price: "$9 / month" },
            { title: "Team", price: "$19 / month" }
          ].map((plan, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow"
            >
              <h3 className="text-xl font-semibold mb-4">{plan.title}</h3>
              <p className="text-lg mb-6">{plan.price}</p>
              <button className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Choose
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-10 text-center">
        <h2 className="text-3xl font-bold mb-12">Contact Us</h2>
        <motion.form 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-lg mx-auto grid gap-4"
        >
          <input type="text" placeholder="Your Name" className="p-3 rounded-md border dark:bg-gray-800" />
          <input type="email" placeholder="Your Email" className="p-3 rounded-md border dark:bg-gray-800" />
          <textarea placeholder="Your Message" className="p-3 rounded-md border dark:bg-gray-800 h-32"></textarea>
          <button className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700">
            Send Message
          </button>
        </motion.form>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center bg-gray-100 dark:bg-gray-800">
        <p>© 2025 TaskFlow. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
