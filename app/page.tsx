"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const images = [
    "/images/Inovagob.jpg",
    "/images/captura gubernamental..jpg",
    "/images/Sin título-1.jpg",
    "/images/Sin título.jpg",
    "/images/Sin título222.jpg",
    "/images/1233.jpg",
  ];

  const [index, setIndex] = useState(0);

  // 🔁 Cambio automático
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000); // cada 4 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="bg-white text-gray-800">
      
      <Navbar />

      {/* HERO SLIDER */}
      <section className="relative h-[85vh] flex items-center justify-center text-center text-white overflow-hidden">

        {/* IMÁGENES CON ANIMACIÓN */}
        <AnimatePresence>
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <Image
              src={images[index]}
              alt="Slide"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </AnimatePresence>


        {/* OVERLAY */}
        <div className="absolute inset-0 bg-slate-900/70"></div>

        {/* CONTENIDO */}
        <div className="relative z-10 max-w-3xl px-6">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Soluciones estratégicas para gobiernos eficientes
          </h1>

          <p className="text-lg md:text-xl text-slate-300 mb-8">
            Impulsamos la gestión pública mediante innovación,
            transparencia y desarrollo tecnológico.
          </p>

          <Link
            href="/contacto"
            className="inline-block bg-white text-slate-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
          >
            Solicitar asesoría
          </Link>
        </div>
      </section>

      {/* SERVICIOS MEJORADOS */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Nuestros Servicios
          </h2>

          <p className="text-gray-500 mb-12">
            Soluciones diseñadas para transformar la gestión pública
          </p>

          <div className="grid md:grid-cols-3 gap-8">

            {/* CARD */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition hover:-translate-y-1">
              <h3 className="text-xl font-semibold mb-3">
                Gestión Pública Eficiente
              </h3>
              <p className="text-gray-600">
                Optimizamos procesos administrativos para mejorar el desempeño institucional.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition hover:-translate-y-1">
              <h3 className="text-xl font-semibold mb-3">
                Transparencia y Rendición
              </h3>
              <p className="text-gray-600">
                Implementamos estrategias que fortalecen la confianza ciudadana.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition hover:-translate-y-1">
              <h3 className="text-xl font-semibold mb-3">
                Desarrollo Sostenible
              </h3>
              <p className="text-gray-600">
                Impulsamos proyectos que generan impacto social y bienestar.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA FINAL PROFESIONAL */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto bg-slate-900 text-white rounded-2xl p-12 text-center shadow-lg">
          
          <h2 className="text-3xl font-semibold mb-4">
            ¿Listo para modernizar tu institución?
          </h2>

          <p className="text-slate-300 mb-8">
            Contáctanos y recibe asesoría especializada para transformar tu gestión pública.
          </p>

          <Link
            href="/contacto"
            className="inline-block bg-white text-slate-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
          >
            Ir a contacto
          </Link>

        </div>
      </section>

    </main>
  );
}