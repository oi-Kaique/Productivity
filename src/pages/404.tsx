import Head from "next/head";
import Link from "next/link";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ['latin'],
  weight: '500',
});

const NotFound = () => {
  return (
    <>
      <Head>
        <title>404 | Kaique</title>
      </Head>
      <div className=" flex flex-col items-center text-center mt-12 md:mt-24 gap-8 md:gap-4 px-6 md:px-32">
        <h1 className=" text-5xl sm:text-7xl font-bold">404</h1>

        <p className="flex flex-col gap-8 md:gap-4 ">
          <span>
          Óps,Página não encontrada😥
          </span>
          <span>
            Clique no botão abaixo para ser redirecionado á Página Inicial
          </span>
        </p>
        <Link href ="/" className={`${roboto.className} p-5 py-4 bg-amber-600 text-white rounded-lg font-medium shadow-md hover:bg-amber-700 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 rounded-xl text-black mt-5 md:mt-12 w-fit `}>Página Inicial </Link>
        </div>

    </>
  );
}
export default NotFound;