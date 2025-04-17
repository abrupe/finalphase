import React from "react";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* TOP NAVBAR */}
      <header className="w-full fixed top-0 left-0 z-50 flex justify-between items-center px-6 py-4 bg-white/70 backdrop-blur-md border-b border-gray-200">
  <div className="flex items-center gap-2">
    <SparklesIcon className="w-6 h-6 text-purple-600 animate-pulse" />
    <span className="text-xl font-bold text-purple-800">FinalPhase</span>
  </div>

  <nav className="hidden md:flex gap-6 items-center text-sm font-medium text-gray-700">
    <a href="#about" className="hover:text-purple-600 transition">About</a>
    <a href="#services" className="hover:text-purple-600 transition">Services</a>
    <a href="#contact" className="hover:text-purple-600 transition">Contact</a>
    <Link to="/login">
  <button className="bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700 transition">
    Login
  </button>
</Link>
  </nav>
</header>


      {/* HERO SECTION */}
      <section
  className="relative w-full min-h-screen bg-cover bg-center flex items-center justify-center"
  style={{
    backgroundImage: `url('/bg-cleanup.jpg')`,
  }}
>
  {/* opcional, remove se quiser fundo mais vivo */}
  {/* <div className="absolute inset-0 bg-black/10"></div> */}

  <div className="text-center px-4 z-10">
  <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)]">
  Precision. Cleanliness.
</h1>
    <p className="text-gray-600 text-lg drop-shadow-sm">
      Construction cleanup done right.
    </p>
  </div>
</section>




      {/* ABOUT */}
      <section id="about" className="py-16 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-purple-700 mb-4">About Us</h2>
        <p className="text-gray-600">
            Bora Paulo, Agiliza Isso Ai, Aguento mais lavar bosta nao!

          FinalPhase was born from the vision of bringing excellence to post-construction spaces. 
          This project is about finishing strong and honoring what comes after.
        </p>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-purple-50 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-purple-700 mb-10">Our Services</h2>
          <div className="grid gap-8 md:grid-cols-3 text-left">
            <div>
              <h3 className="text-xl font-semibold text-purple-800 mb-2">🧹 Debris Removal</h3>
              <p className="text-gray-600">We handle leftover dust, scraps, and mess with care and precision.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-purple-800 mb-2">🧽 Detailed Cleaning</h3>
              <p className="text-gray-600">We go deep — windows, floors, and every corner gets that clean finish.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-purple-800 mb-2">✨ Final Touch</h3>
              <p className="text-gray-600">We polish, sanitize, and leave the space move-in ready. Like magic.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-16 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-purple-700 mb-4">Get in Touch</h2>
        <p className="text-gray-600 mb-6">Want to work with us or request a quote? Let’s make your space shine.</p>
        <button className="bg-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-purple-700 transition">
          Contact Us
        </button>
      </section>

      {/* FOOTER */}
      <footer className="bg-white border-t border-gray-200 py-6 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} FinalPhase. All rights reserved.
      </footer>
    </div>
  );
}
