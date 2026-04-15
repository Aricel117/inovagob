"use client";
export const dynamic = "force-dynamic";


import Navbar from "../components/Navbar";
import ContactForm from "../components/ContactForm";
import { useSearchParams } from "next/navigation";

export default function ContactoClient() {
  const searchParams = useSearchParams();
  const servicio = searchParams.get("servicio");
  return (
    <main>
      <Navbar />

      <div className="p-12">

        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Contáctanos
        </h1>

        <p className="text-gray-600 mb-6">
          Estamos para apoyar a instituciones públicas en la mejora de su gestión.
        </p>

        {/* 👇 NUEVO: mostrar servicio */}
        {servicio && (
          <div className="bg-slate-100 border border-slate-300 p-4 rounded-lg mb-8">
            <p className="text-slate-700">
              Estás solicitando el servicio:
            </p>
            <p className="font-semibold text-slate-900">
              {servicio}
            </p>
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-10">

          {/* Información */}
          <div className="bg-white p-6 rounded-2xl shadow">
            <h2 className="text-xl font-semibold mb-4">Información</h2>

            <p className="mb-2">
              📍 José Domingo Vásquez 4b-local 8, Centro, Tlaxiaco, Oaxaca
            </p>

            <p className="mb-2">
              📞 +52 953 552 0183
            </p>

            <p className="mb-2">
              🏢 Atención a gobiernos e instituciones públicas
            </p>
          </div>

          {/* Mapa */}
          <div className="w-full h-[350px]">
            <iframe
              className="w-full h-full rounded-2xl"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3809.9978882306614!2d-97.68199180127866!3d17.26733710913936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85c62fe4b7267bb5%3A0x1950c1637d84e558!2sINOVAGOB%20CONSULTORES!5e0!3m2!1ses-419!2smx!4v1772565484028!5m2!1ses-419!2smx"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>

      </div>

      <ContactForm servicio={servicio || undefined} /> {/* 👈 opcional (muy recomendado) */}

    </main>
  );
}