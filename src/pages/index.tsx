import Head from "next/head";
import ProductivityLoginPage from "./ProductivityLoginPage";

const Home = () => {
  return (
    <>
      <Head>
        <title>Sobre mim | Kaique</title>
        <meta name="description" content="Sou um desenvolvedor Front-End apaixonado por criar interfaces e ajudar outros devs" />
      </Head>
        <ProductivityLoginPage/>
    </>
  );
}

export default Home;