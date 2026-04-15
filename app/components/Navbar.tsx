import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-slate-900 text-white px-10 py-4 flex justify-between">
      <h1 className="font-bold text-lg">INOVAGOB</h1>

      <div className="space-x-6">
        <Link href="/">Inicio</Link>
        <Link href="/servicios">Servicios</Link>
        <Link href="/contacto">Contacto</Link>
      </div>
    </nav>
  );
}