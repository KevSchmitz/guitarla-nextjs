import Layout from "@/components/layout";
import Image from "next/image";
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

const Producto = ({ guitarra }) => {
  const { nombre, descripcion, imagen, precio } = guitarra.attributes;

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
        </div>
      </div>
    </Layout>
  );
};

export default Producto;
