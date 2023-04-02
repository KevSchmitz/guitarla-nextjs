import Layout from "@/components/layout";
import Image from "next/image";
import { useState } from "react";
import styles from "../../styles/guitarras.module.css";

// export async function getServerSideProps({ query: { url } }) {
//   const respuesta = await fetch(
//     `${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`
//   );
//   const { data } = await respuesta.json();

//   return {
//     props: {
//       guitarra: data[0],
//       url,
//     },
//   };
// }

export async function getStaticPaths() {
  const respuesta = await fetch(`${process.env.API_URL}/guitarras`);
  const { data } = await respuesta.json();

  const paths = data.map((guitarra) => ({
    params: {
      url: guitarra.attributes.url,
    },
  }));

  return {
    paths,
    fallback: false /* te da el error automáticamente del 404 el objeto no fue encontrado */,
  };
}

export async function getStaticProps({ params: { url } }) {
  const respuesta = await fetch(
    `${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`
  );
  const { data } = await respuesta.json();

  return {
    props: {
      guitarra: data[0],
      url,
    },
  };
}

const Producto = ({ guitarra, agregarCarrito }) => {
  const [cantidad, setCantidad] = useState(0);
  const { nombre, descripcion, imagen, precio } = guitarra.attributes;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (cantidad < 1) {
      alert("Debe ingresar una cantidad mayor a cero");
      return;
    }

    // Construyendo el objeto
    const guitarraSeleccionada = {
      id: guitarra.id,
      imagen: imagen.data.attributes.url,
      nombre,
      precio,
      cantidad,
    };

    // Pasando el objeto a Context
    agregarCarrito(guitarraSeleccionada);
  };

  return (
    <Layout
      title={`Guitarra ${nombre}`}
      description={`Venta de guitarra, guitarra, ${nombre}`}
    >
      <div className={styles.guitarra}>
        <Image
          src={imagen.data.attributes.url}
          width={300}
          height={400}
          alt={`Guitarra ${nombre}`}
        />
        <div className={styles.contenido}>
          <h3>{nombre}</h3>
          <p className={styles.descripcion}>{descripcion}</p>
          <p className={styles.precio}>${precio}</p>

          <form className={styles.formulario} onSubmit={handleSubmit}>
            <label htmlFor="cantidad">Cantidad:</label>

            <select
              id="cantidad"
              onChange={(e) => setCantidad(Number(e.target.value))}
            >
              <option value="0">--Seleccione--</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>

            <input type="submit" value={"Agregar al carrito"} />
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Producto;
