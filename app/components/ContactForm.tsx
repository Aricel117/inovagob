"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

emailjs.init("LBHEAUS5rYGwqAIHw");

export default function ContactForm({ servicio }: { servicio?: string }) {
    
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    servicio: servicio || "Consulta general",
  });

  const [sent, setSent] = useState(false);

  const handleChange = (e: any) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .send(
        "service_wm7ch9c",
        "template_huft748",
        form,
        "LBHEAUS5rYGwqAIHw"
      )
      .then(() => {
        setSent(true);
        setForm({
          name: "",
          email: "",
          message: "",
          servicio: servicio || "Consulta general",
        });
      })
      .catch((error) => {
        console.error(error);
        alert("Error al enviar mensaje");
      });
  };

  return (
    <form onSubmit={sendEmail} className="mt-8 space-y-4 max-w-xl">

      {/* Mostrar servicio seleccionado */}
      {servicio && (
        <div className="bg-blue-50 border border-blue-200 text-blue-800 p-3 rounded-lg">
          Servicio solicitado: <strong>{servicio.replace("-", " ")}</strong>
        </div>
      )}

      {/* Campo oculto para enviar el servicio */}
      <input
        type="hidden"
        name="servicio"
        value={servicio || "Consulta general"}
      />

      <input
        type="text"
        name="name"
        placeholder="Nombre completo"
        value={form.name}
        onChange={handleChange}
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-700 transition"
        required
      />

      <input
        type="email"
        name="email"
        placeholder="Correo electrónico"
        value={form.email}
        onChange={handleChange}
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-700 transition"
        required
      />

      <textarea
        name="message"
        placeholder="Escribe tu mensaje..."
        value={form.message}
        onChange={handleChange}
        rows={5}
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-700 transition"
        required
      />

      <button
        type="submit"
        className="w-full bg-slate-900 text-white py-3 rounded-lg font-medium hover:bg-slate-700 transition duration-300"
      >
        Enviar mensaje
      </button>

      {sent && (
        <div className="bg-green-50 border border-green-200 text-green-700 p-3 rounded-lg">
          ✅ Mensaje enviado correctamente. Nos pondremos en contacto contigo.
        </div>
      )}

    </form>
  );
}