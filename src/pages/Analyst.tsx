import Head from "next/head";
import { Roboto } from "@next/font/google";
import Menu from "@/components/communs/menu";
import Charts from "@/components/communs/Charts";
import PieChart from "@/components/communs/PieChart";

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
});

// Dados de exemplo para análise Fibonacci
const fibonacciData = [
  {
    name: "1",
    value: 1,
    description: "Tarefas muito simples e rápidas de serem realizadas",
    example: "Responder um e-mail, fazer uma ligação rápida",
  },
  {
    name: "2",
    value: 1,
    description: "Tarefas simples, mas que requerem um pouco mais de atenção",
    example: "Revisar um documento, preparar uma apresentação simples",
  },
  {
    name: "3",
    value: 2,
    description: "Tarefas de complexidade média, com algumas dependências",
    example: "Desenvolver uma funcionalidade básica, escrever um relatório",
  },
  {
    name: "5",
    value: 3,
    description: "Tarefas que requerem mais tempo e planejamento",
    example: "Implementar uma nova feature, organizar um evento pequeno",
  },
  {
    name: "8",
    value: 5,
    description: "Tarefas complexas, com múltiplas etapas e dependências",
    example: "Desenvolver um módulo completo, gerenciar um projeto médio",
  },
  {
    name: "13",
    value: 8,
    description:
      "Tarefas muito complexas, que podem ser divididas em subtarefas",
    example: "Criar um novo produto, implementar uma grande funcionalidade",
  },
  {
    name: "21",
    value: 13,
    description:
      "Tarefas extremamente complexas, que requerem equipe e planejamento extenso",
    example: "Desenvolver um sistema completo, gerenciar um projeto grande",
  },
];

// Dados de exemplo para distribuição de tempo
const timeDistributionData = [
  {
    name: "Trabalho",
    value: 40,
    description: "Tempo dedicado a atividades profissionais e projetos",
    tips: [
      "Priorize tarefas importantes",
      "Faça pausas regulares",
      "Mantenha o foco",
    ],
  },
  {
    name: "Estudos",
    value: 30,
    description: "Tempo investido em aprendizado e desenvolvimento pessoal",
    tips: [
      "Estabeleça metas claras",
      "Pratique regularmente",
      "Revise o conteúdo",
    ],
  },
  {
    name: "Lazer",
    value: 20,
    description: "Tempo para relaxamento e atividades recreativas",
    tips: ["Descanse adequadamente", "Pratique exercícios", "Mantenha hobbies"],
  },
  {
    name: "Outros",
    value: 10,
    description: "Tempo para atividades diversas e imprevistos",
    tips: [
      "Mantenha flexibilidade",
      "Planeje com antecedência",
      "Ajuste conforme necessário",
    ],
  },
];

const COLORS = [
  "#D97706",
  "#F59E0B",
  "#FCD34D",
  "#FDE68A",
  "#FEF3C7",
  "#FFFBEB",
  "#FEF9C3",
];

const Analyst = () => {
  return (
    <>
      <Head>
        <title>Análise de Produtividade</title>
      </Head>
      <div
        className={`${roboto.className} flex min-h-screen bg-gradient-to-br from-amber-50 to-amber-100`}
      >
        <Menu />
        <div className="flex-1 p-4 sm:p-6 md:p-8 overflow-y-auto">
          <div className="max-w-7xl mx-auto space-y-12">
            {/* Cabeçalho */}
            <div className="mb-12 text-center">
              <h1 className="text-3xl sm:text-4xl font-bold text-amber-900 bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent">
                Análise de Produtividade
              </h1>
              <p className="text-amber-600 mt-4 max-w-2xl mx-auto text-base sm:text-lg">
                Visualize e otimize seu tempo de forma eficiente. Acompanhe sua
                produtividade e descubra novas formas de melhorar seu
                desempenho.
              </p>
            </div>

            {/* Seção Principal */}
            <div className="space-y-12">
              {/* Análise Fibonacci */}
              <section className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden border border-amber-100">
                <div className="p-6 sm:p-8 border-b border-amber-100 bg-gradient-to-r from-amber-50 to-amber-100">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold text-amber-900">
                        Análise Fibonacci
                      </h2>
                      <p className="text-amber-600 text-sm mt-2">
                        Estime a complexidade das suas tarefas usando a
                        sequência de Fibonacci
                      </p>
                    </div>
                    <div className="hidden sm:block">
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                        Método Ágil
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-6 sm:p-8">
                  <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-4 sm:gap-6">
                    {fibonacciData.map((item, index) => (
                      <div
                        key={index}
                        className="group bg-white p-4 sm:p-5 rounded-xl text-center transition-all duration-300 hover:shadow-lg hover:scale-105 border border-amber-100 flex flex-col justify-between min-h-[180px]"
                      >
                        <div className="transform group-hover:scale-110 transition-transform duration-300 space-y-3">
                          <div className="flex flex-col items-center">
                            <span className="text-amber-900 font-bold text-2xl mb-1">
                              {item.name}
                            </span>
                            <span className="text-amber-600 text-sm bg-amber-50 px-2 py-1 rounded-full">
                              {item.value}
                            </span>
                          </div>
                          <div className="space-y-2">
                            <p className="text-amber-500 text-xs leading-relaxed">
                              {item.description}
                            </p>
                            <p className="text-amber-400 text-xs italic leading-relaxed">
                              {item.example}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Distribuição de Tempo */}
              <section className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden border border-amber-100">
                <div className="p-6 sm:p-8 border-b border-amber-100 bg-gradient-to-r from-amber-50 to-amber-100">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold text-amber-900">
                        Distribuição de Tempo
                      </h2>
                      <p className="text-amber-600 text-sm mt-2">
                        Veja como seu tempo está distribuído e receba dicas para
                        otimização
                      </p>
                    </div>
                    <div className="hidden sm:block">
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                        Análise Semanal
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-6 sm:p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <Charts
                      data={timeDistributionData}
                      colors={COLORS}
                      title="Distribuição de Tempo"
                      description="Este gráfico mostra como seu tempo está distribuído entre diferentes atividades. Passe o mouse sobre cada seção para ver mais detalhes."
                    />
                    <PieChart
                      data={timeDistributionData}
                      colors={COLORS}
                      title="Distribuição de Tempo (Grafico)"
                      description="Visualização alternativa da distribuição do seu tempo em formato de pizza."
                    />
                  </div>

                  {/* Dicas por Categoria */}
                  <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {timeDistributionData.map((item, index) => (
                      <div
                        key={index}
                        className="group bg-white p-5 sm:p-6 rounded-xl transition-all duration-300 hover:shadow-lg border border-amber-100"
                      >
                        <div className="flex items-center space-x-3 mb-4">
                          <div
                            className="w-4 h-4 rounded-full shadow-sm"
                            style={{ backgroundColor: COLORS[index] }}
                          />
                          <h3 className="text-amber-900 font-semibold text-lg">
                            {item.name}
                          </h3>
                        </div>
                        <p className="text-amber-600 text-sm mb-4">
                          {item.description}
                        </p>
                        <ul className="space-y-3">
                          {item.tips?.map((tip, tipIndex) => (
                            <li
                              key={tipIndex}
                              className="text-amber-600 text-sm flex items-start group-hover:text-amber-800 transition-colors duration-300"
                            >
                              <span className="text-amber-400 mr-2">•</span>
                              {tip}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Rodapé Informativo */}
              <div className="text-center text-amber-600 text-sm mt-12">
                <p className="mb-2">
                  Dados atualizados em tempo real • Última atualização:{" "}
                  {new Date().toLocaleDateString()}
                </p>
                <p>
                  Use estas análises para melhorar sua produtividade e alcançar
                  seus objetivos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Analyst;
