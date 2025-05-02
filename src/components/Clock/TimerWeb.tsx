import { NextPage } from 'next';
import Head from 'next/head';
import Clock from './Index'; 
import Link from 'next/link';

const TimerWeb: NextPage = () => {
  return (
    <div className="min-h-screen bg-amber-50">
      <Head>
        <title>Productivity Timer</title>
        <meta name="description" content="Aplicativo de produtividade pessoal" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container mx-auto px-4 py-8">
        <header className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-amber-900 mb-2">
            Productivity Timer
          </h1>
          <p className="text-amber-700">
            Gerencie seu tempo e tarefas de forma eficiente
          </p>
        </header>

        {/* Relógio como elemento central */}
        <section className="flex justify-center items-center mb-16 py-10">
          <div className="bg-white rounded-xl shadow-lg p-8 transform hover:scale-105 transition-transform duration-300 border border-amber-200">
            <Clock />
          </div>
        </section>

        {/* Botões de ação rápida */}
        <section className="flex flex-wrap justify-center gap-4 mb-12">
          <button className="px-6 py-3 bg-amber-600 text-white rounded-lg shadow-md hover:bg-amber-700 transition-colors">
            Nova Tarefa
          </button>
          <button className="px-6 py-3 bg-amber-500 text-white rounded-lg shadow-md hover:bg-amber-600 transition-colors">
            Iniciar Foco
          </button>
          <button className="px-6 py-3 bg-amber-400 text-amber-900 rounded-lg shadow-md hover:bg-amber-500 hover:text-white transition-colors">
            <Link href="/Analyst">
              Ver Estatísticas
            </Link>
          </button>

          <button className="px-6 py-3 bg-amber-300 text-amber-900 rounded-lg shadow-md hover:bg-amber-400 hover:text-white transition-colors">
            <Link href="/HomePage">
              Pagina Inicial
            </Link>
          </button>
        </section>

        {/* Seção de Funcionalidades */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-amber-400">
            <h2 className="text-xl font-semibold text-amber-800 mb-3">
              Gerenciamento de Tarefas
            </h2>
            <p className="text-amber-700">
              Organize suas tarefas diárias e acompanhe seu progresso.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-amber-500">
            <h2 className="text-xl font-semibold text-amber-800 mb-3">
              Foco e Produtividade
            </h2>
            <p className="text-amber-700">
              Técnicas e ferramentas para melhorar seu foco e produtividade.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-amber-600">
            <h2 className="text-xl font-semibold text-amber-800 mb-3">
              Estatísticas Pessoais
            </h2>
            <p className="text-amber-700">
              Acompanhe seu desempenho e identifique padrões para melhorar.
            </p>
          </div>
        </section>
      </main>

      <footer className="mt-12 py-6 border-t border-amber-200">
        <div className="container mx-auto px-4 text-center text-amber-700">
          <p>© {new Date().getFullYear()} Productivity App. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default TimerWeb;
