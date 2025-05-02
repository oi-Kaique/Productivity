import Head from "next/head";
import ProductivityLoginPage from "./ProductivityLoginPage";

const Home = () => {
  return (
    <>
      <Head>
        <title>Sobre Nós | Doc</title>
        <meta name="description" content="Somos um site que ajudamos a você a gerenciar seu dia e sua vida com o melhor de nós" />
      </Head>
        <ProductivityLoginPage/>
    </>
  );
}

export default Home;