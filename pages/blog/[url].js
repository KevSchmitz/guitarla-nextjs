import Layout from "@/components/layout";
import { formatearFecha } from "@/utils/helpers";
import Image from "next/image";
import styles from "../../styles/blog.module.css";

export async function getServerSideProps({ params: { url } }) {
  const respuesta = await fetch(
    `${process.env.API_URL}/posts?filters[url]=${url}&populate=imagen`
  );
  const { data: post } = await respuesta.json();

  return {
    props: {
      post,
    },
  };
}

const Post = ({ post }) => {
  const { titulo, contenido, imagen, publishedAt } = post[0].attributes;
  return (
    <Layout title={titulo}>
      <article className={`${styles.post} ${styles["mt-3"]}`}>
        {" "}
        {/* Al tener un guión hay que usar la otra forma de acceder a un objeto y colocar strings para el 'mt-3' */}
        <Image
          src={imagen.data.attributes.url}
          width={1000}
          height={400}
          alt={`imagen blog ${titulo}`}
        ></Image>
        <div className={styles.contenido}>
          <h3>{titulo}</h3>
          <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
          <p className={styles.texto}>{contenido}</p>
        </div>
      </article>
    </Layout>
  );
};

export default Post;
