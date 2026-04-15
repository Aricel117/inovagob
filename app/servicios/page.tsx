import Navbar from "../components/Navbar";
import Link from "next/link";
import { servicios } from "../data/serviciosData";

export default function Servicios() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-10">

      <Navbar />

      <h1 className="text-3xl font-bold mb-10">
        Servicios
      </h1>

      <div className="grid md:grid-cols-2 gap-8">

        {servicios.map((servicio, index) => {

          const Icon = servicio.icon;

          return (

            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow hover:shadow-xl hover:-translate-y-1 transition"
            >

              <Icon className="text-3xl text-slate-800 mb-4" />

              <h3 className="text-xl font-semibold mb-2">
                {servicio.title}
              </h3>

              <p className="text-gray-600 mb-6">
                {servicio.description}
              </p>

              <Link href={`/servicios/${servicio.slug}`}>
                <button className="w-full bg-slate-900 text-white py-3 rounded-lg hover:bg-slate-700 transition">
                  Ver servicio
                </button>
              </Link>

            </div>

          );
        })}

      </div>

    </main>
  );
}