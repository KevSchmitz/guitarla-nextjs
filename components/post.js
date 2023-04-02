import { formatearFecha } from "@/utils/helpers";
import Image from "next/image";
import Link from "next/link";
import styles from '../styles/blog.module.css'

const post = ({post}) => {
  const {titulo, contenido, imagen, url, publishedAt} = post;
  
  return (
    <article>
      <Image src={imagen.data.attributes.formats.medium.url} width={600} height={400} alt={`imagen blog ${titulo}`}></Image>
      <div className={styles.contenido}>
        <h3>{titulo}</h3>
        <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
        <p className={styles.resumen}>{contenido}</p>
        <Link className={styles.enlace} href={`/blog/${url}`}>
        Leer Post</Link>

      </div>
    </article>
  )
}

export default post