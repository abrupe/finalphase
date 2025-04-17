import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center px-4"
      style={{
        backgroundImage: `url('/paulo-bg.jpg')`,
      }}
    >
      {/* Overlay suave pra dar contraste ao texto */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Conteúdo da página */}
      <div className="relative z-10 bg-white/80 backdrop-blur-md p-10 rounded-2xl shadow-xl text-center max-w-sm w-full">
        <h1 className="text-4xl font-extrabold text-purple-700 mb-4">BORA PAULO!</h1>
        <p className="text-gray-700 mb-6">Você chegou até aqui, agora é hora de brilhar. 💪</p>
        <Link to="/">
          <button className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition">
            Voltar
          </button>
        </Link>
      </div>
    </div>
  );
}
