import { Suspense } from "react";
import ContactoClient from "./ContactoClient";

export const dynamic = "force-dynamic";

export default function Page() {
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <ContactoClient />
    </Suspense>
  );
}