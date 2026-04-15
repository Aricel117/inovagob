import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="bg-white text-gray-800">
      <Navbar/>
      {/* HERO */}
      <section className="bg-slate-900 text-white p-20 text-center">
  <h1 className="text-4xl md:text-5xl font-bold text-gray-100">
    Soluciones estratégicas para gobiernos eficientes y transparentes
  </h1>

  <p className="mt-4 text-lg text-gray-600">
    Impulsamos la gestión pública en Tlaxiaco mediante innovación, transparencia y desarrollo sostenible.
  </p>

  <button className="mt-8 bg-white text-slate-900 px-6 py-3 rounded font-semibold hover:bg-gray-200">
    Solicitar asesoría
  </button>
</section>

      {/* SERVICIOS */}
      <section className="py-20 px-6 bg-gray-50">
  <div className="max-w-6xl mx-auto text-center">
    
    <h2 className="text-3xl font-bold mb-10 text-gray-800">
      Nuestros Servicios
    </h2>

    <div className="grid md:grid-cols-3 gap-8">

      <div className="bg-white p-6 rounded-xl shadow">
        <h3 className="text-xl font-semibold mb-2">
          Gestión Pública Eficiente
        </h3>
        <p className="text-gray-600">
          Optimizamos procesos administrativos para mejorar el desempeño institucional.
        </p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow">
        <h3 className="text-xl font-semibold mb-2">
          Transparencia y Rendición
        </h3>
        <p className="text-gray-600">
          Implementamos estrategias que fortalecen la confianza ciudadana.
        </p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow">
        <h3 className="text-xl font-semibold mb-2">
          Desarrollo Sostenible
        </h3>
        <p className="text-gray-600">
          Impulsamos proyectos que generan impacto social y bienestar.
        </p>
      </div>

    </div>

  </div>
</section>

      {/* CONTACTO */}
      <section className="p-12">
        <h2 className="text-2xl font-semibold">Contacto</h2>
        <p className="mt-4">
          Contáctanos para modernizar la gestión de tu institución.
        </p>
      </section>

      <section className="p-16 text-center">
  <h2 className="text-2xl font-semibold">
    ¿Listo para modernizar tu institución?
  </h2>

  <p className="mt-4">
    Contáctanos y recibe asesoría especializada.
  </p>

  <a
    href="/contacto"
    className="inline-block mt-6 bg-slate-900 text-white px-6 py-3 rounded hover:bg-slate-800"
  >
    Ir a contacto
  </a>
</section>

    </main>
  );
}