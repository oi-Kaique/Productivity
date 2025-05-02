import Head from "next/head";
import Home from "@/components/WebPages/Home";


const HomePage = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Home />
    </>
  );
};

export default HomePage;
