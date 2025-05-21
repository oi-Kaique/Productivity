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