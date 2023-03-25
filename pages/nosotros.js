import Layout from "@/components/layout";
import Image from "next/image";
import styles from "../styles/nosotros.module.css";

const Nosotros = () => {
  return (
    <Layout
      title={"Nosotros"}
      description="Sobre nosotros, GuitarLA, tienda de música"
    >
      <main className="contenedor">
        <h2 className="heading">Nosotros</h2>
        <div className={styles.contenido}>
          <Image
            src="/img/nosotros.jpg"
            alt="Imagen sobre nosotros"
            width={1000}
            height={800}
          />
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              impedit non, neque odio odit quasi voluptatibus temporibus dolorem
              aspernatur quos vitae harum amet repellendus, laboriosam ad!
              Corrupti laborum sunt unde odit laudantium excepturi reprehenderit
              dolores molestias repudiandae ducimus qui deleniti, corporis
              doloremque fuga atque repellat praesentium asperiores enim
              molestiae a. Fugiat accusamus, beatae sapiente labore
              reprehenderit dolor, esse, doloribus rem numquam unde aut ut
              error.
            </p>
            <p>
              Non molestias laboriosam earum blanditiis mollitia explicabo
              voluptas? Assumenda, ipsa? Commodi nemo molestias minus quia qui
              reiciendis ab iusto corrupti explicabo dolore ex ipsa laudantium
              facere velit, magni natus autem ut dolorum? Labore voluptatum sit
              cupiditate obcaecati similique assumenda hic praesentium quis
              voluptatibus, aut repellat magnam dolores voluptates aperiam
              accusantium nisi et neque reprehenderit.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Nosotros;
