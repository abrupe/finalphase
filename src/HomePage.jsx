import React from "react";
import { SparklesIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function HomePage() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <div className="min-h-screen bg-white text-gray-800">
            {/* TOP NAVBAR */}
            <header className="w-full fixed top-0 left-0 z-50 bg-white/70 backdrop-blur-md border-b border-gray-200 px-6 py-4 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <SparklesIcon className="w-6 h-6 text-purple-600 animate-pulse" />
                    <span className="text-xl font-bold text-purple-800">FinalPhase</span>
                </div>

                {/* Menu desktop */}
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

                {/* Menu mobile toggle */}
                <div className="md:hidden">
                    <button onClick={() => setMenuOpen(!menuOpen)} className="text-purple-700">
                        {menuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
                    </button>
                </div>

                {/* Mobile menu dropdown */}
                {menuOpen && (
                    <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center gap-4 py-6 md:hidden z-50">
                        <a href="#about" className="text-purple-700 hover:text-purple-900" onClick={() => setMenuOpen(false)}>About</a>
                        <a href="#services" className="text-purple-700 hover:text-purple-900" onClick={() => setMenuOpen(false)}>Services</a>
                        <a href="#contact" className="text-purple-700 hover:text-purple-900" onClick={() => setMenuOpen(false)}>Contact</a>
                        <Link to="/login">
                            <button className="bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700 transition">
                                Login
                            </button>
                        </Link>
                    </div>
                )}
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
            <section id="contact" className="py-20 px-6 bg-white text-center">
  <div className="max-w-2xl mx-auto">
    <h2 className="text-4xl font-bold text-purple-700 mb-4">Get in Touch</h2>
    <p className="text-gray-600 mb-8 text-lg">
      Do you want to book a service with us? Send a Message!@
    </p>

    <form
  name="contact"
  method="POST"
  data-netlify="true"
  onSubmit={(e) => {
    e.preventDefault();
    const form = e.target;
    
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(new FormData(form)).toString(),
    })
      .then(() => {
        alert("Mensagem enviada com sucesso! ✨");
        form.reset(); // limpa os campos!
      })
      .catch((error) => alert("Erro ao enviar: " + error));
  }}
  className="space-y-4"
>
  <input type="hidden" name="form-name" value="contact" />
  
  <input
    type="text"
    name="name"
    placeholder="Seu nome"
    required
    className="w-full px-4 py-2 border border-gray-300 rounded-md"
  />

  <input
    type="email"
    name="email"
    placeholder="Seu e-mail"
    required
    className="w-full px-4 py-2 border border-gray-300 rounded-md"
  />

  <textarea
    name="message"
    placeholder="Sua mensagem"
    required
    className="w-full px-4 py-2 border border-gray-300 rounded-md"
  />

  <button
    type="submit"
    className="bg-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-purple-700 transition"
  >
    Enviar
  </button>
</form>

  </div>
</section>


            {/* FOOTER */}
            <footer className="bg-white border-t border-gray-200 py-6 text-center text-sm text-gray-500">
                &copy; {new Date().getFullYear()} FinalPhase. All rights reserved.
            </footer>
        </div>
    );
}
