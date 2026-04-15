import Navbar from "../../components/Navbar";
import Link from "next/link";
import { servicios } from "../../data/serviciosData";
import ContactForm from "../../components/ContactForm";

export default async function ServicioPage({ params }: any) {
const resolvedParams = await params;
const slug = resolvedParams.servicio;


  const servicioData = servicios.find(
    (s) => s.slug.trim().toLowerCase() === slug?.trim().toLowerCase()
  );
  console.log("Slug recibido:", slug);
  if (!servicioData) {
    return (
      <main className="max-w-5xl mx-auto py-10 px-6">
        <h1>Servicio no encontrado</h1>
        <p>Slug recibido: {slug}</p>
      </main>
    );
  }

  const Icon = servicioData.icon;

  return (
    <main className="max-w-5xl mx-auto py-10 px-6">
      <Navbar />
    {/* ENCABEZADO CON EL TITULO */}
        <Icon className="text-5xl text-slate-800 mb-6" />
        <div className="max-w-4xl mx-auto">
        {/* TÍTULO */}
        <h1 className="text-4xl font-bold text-center text-slate-900 mb-4">
        {servicioData.title}
       </h1>

    {/* DESCRIPCIÓN */}
        <p className="text-center text-gray-600 mb-12">
       {servicioData.description}
       </p>
      </div>


{/* BENEFICIOS (EN TARJETAS) */}
<h2 className="text-2xl font-semibold mb-6">
          Beneficios del servicio
        </h2>

<div className="grid sm:grid-cols-2 gap-6 mb-16">
  {servicioData.beneficios.map((beneficio, i) => (
    <div
      key={i}
      className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition">
      <p className="text-slate-700 font-medium">
        ✔ {beneficio}
      </p>
    </div>
  ))}
</div>

<div className="mb-16">
  <h2 className="text-2xl font-semibold text-center mb-6">
    Nuestro proceso
  </h2>
  <div className="space-y-3 text-center">
    {servicioData.proceso.map((paso, i) => (
      <p key={i} className="text-gray-600">
        {i + 1}. {paso}
      </p>
    ))}
  </div>
</div>

      <div className="mb-12">

{/* Apartado de solicitar asesoria */}
<div className="bg-slate-900 text-white p-10 rounded-xl text-center">
        <h2 className="text-2xl font-semibold mb-4">
          ¿Necesitas este servicio?
        </h2>
        <p className="mb-6 text-slate-300">
          Podemos ayudarte a implementar soluciones tecnológicas
          para tu institución.
        </p> 
        <Link
          href={`/contacto?servicio=${servicioData.slug}`}
          className="bg-white text-slate-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition">
          Solicitar asesoría
        </Link>
      </div>
      
      
      </div>
    </main>
  );
}