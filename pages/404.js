import Layout from "@/components/layout";
import Link from "next/link";
import React from "react";

const Pagina404 = () => {
  return (
    <Layout title="Página No Encontrada">
      <p className="error">Página no encontrada</p>
      <Link href="/" className="error-enlace">
        Volver a la página de inicio
      </Link>
    </Layout>
  );
};

export default Pagina404;
