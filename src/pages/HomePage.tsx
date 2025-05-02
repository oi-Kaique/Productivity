import Head from "next/head";
<<<<<<< HEAD
import Home from "@/components/WebPages/Home";

=======
import { Roboto } from "@next/font/google";
import Menu from "@/components/communs/menu";
import Link from "next/link";

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
});
>>>>>>> 46c41461b1218c19ee9854a2147a5cce4af68f4c

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
<<<<<<< HEAD
      <Home />
=======
      <div className={`${roboto.className} flex h-screen bg-amber-50`}>
        <Menu />
        <div className="flex-1 p-8 overflow-y-auto">
          <div className="max-w-7xl mx-auto">
            {/* Estatísticas Rápidas */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-amber-600">Tempo Focado</p>
                    <h3 className="text-2xl font-bold text-amber-900">
                      2h 30m
                    </h3>
                  </div>
                  <div className="bg-amber-100 p-3 rounded-full">
                    <img src="/timer.svg" alt="Timer" className="h-6 w-6" />
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-amber-600">Tarefas Concluídas</p>
                    <h3 className="text-2xl font-bold text-amber-900">12/15</h3>
                  </div>
                  <div className="bg-amber-100 p-3 rounded-full">
                    <img src="/list.svg" alt="Check" className="h-6 w-6" />
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-amber-600">Produtividade</p>
                    <h3 className="text-2xl font-bold text-amber-900">85%</h3>
                  </div>
                  <div className="bg-amber-100 p-3 rounded-full">
                    <img
                      src="/produtividade.svg"
                      alt="Chart"
                      className="h-6 w-6"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Título e Cards */}
            <h1 className="text-3xl font-bold text-amber-900 mb-8">
              Dashboard
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Card Timer */}
              <Link
                href="/Timer"
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-amber-100 p-3 rounded-full mr-3">
                    <img src="/timer.svg" alt="Timer" className="h-8 w-8" />
                  </div>
                  <h2 className="text-xl font-bold text-amber-900">Timer</h2>
                </div>
                <p className="text-amber-700">
                  Gerencie seu tempo com nosso timer personalizado.
                </p>
              </Link>

              {/* Card Analyst */}
              <Link
                href="/Analyst"
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-amber-100 p-3 rounded-full mr-3">
                    <img src="/Analyst.svg" alt="Analyst" className="h-8 w-8" />
                  </div>
                  <h2 className="text-xl font-bold text-amber-900">Analista</h2>
                </div>
                <p className="text-amber-700">
                  Analise seus dados e melhore sua produtividade.
                </p>
              </Link>

              {/* Card Profile */}
              <Link
                href="/Profile"
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-amber-100 p-3 rounded-full mr-3">
                    <img src="/profile.svg" alt="Profile" className="h-8 w-8" />
                  </div>
                  <h2 className="text-xl font-bold text-amber-900">Perfil</h2>
                </div>
                <p className="text-amber-700">
                  Gerencie suas informações pessoais.
                </p>
              </Link>

              {/* Card Settings */}
              <Link
                href="/Settings"
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-amber-100 p-3 rounded-full mr-3">
                    <img
                      src="/settings.svg"
                      alt="Settings"
                      className="h-8 w-8"
                    />
                  </div>
                  <h2 className="text-xl font-bold text-amber-900">
                    Configurações
                  </h2>
                </div>
                <p className="text-amber-700">Personalize sua experiência.</p>
              </Link>
            </div>

            {/* Atividades Recentes */}
            <div className="mt-8">
              <h2 className="text-2xl font-bold text-amber-900 mb-4">
                Atividades Recentes
              </h2>
              <div className="bg-white rounded-xl shadow-md p-6">
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="bg-amber-100 p-2 rounded-full mr-4">
                      <img src="/list.svg" alt="Check" className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium text-amber-900">
                        Tarefa concluída
                      </p>
                      <p className="text-sm text-amber-600">
                        Estudar React - 2h
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-amber-100 p-2 rounded-full mr-4">
                      <img src="/timer.svg" alt="Timer" className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium text-amber-900">
                        Sessão de foco
                      </p>
                      <p className="text-sm text-amber-600">
                        25 minutos de concentração
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
>>>>>>> 46c41461b1218c19ee9854a2147a5cce4af68f4c
    </>
  );
};

export default HomePage;
