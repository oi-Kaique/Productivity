import React, { useState, useEffect } from 'react';

const WaterTracker: React.FC = () => {
  const [liters, setLiters] = useState<string>(''); // Inicializa com string vazia
  const [cupSizesInput, setCupSizesInput] = useState<string>('');
  const [cups, setCups] = useState<{ size: number; count: number }[]>([]);
  const [remainingMl, setRemainingMl] = useState<number>(0);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

  const handleCalculate = () => {
    const litersValue = parseFloat(liters);

    if (isNaN(litersValue) || litersValue < 2) {
      setLiters(''); // Reseta o valor inválido
      alert('Por favor, insira uma quantidade válida de litros (mínimo 2).');
      return;
    }

    const cupSizes = cupSizesInput
      .split(',')
      .map((size) => parseInt(size.trim()))
      .filter((size) => !isNaN(size) && size > 0);

    if (cupSizes.length === 1 && cupSizes[0] === 0) {
      setCupSizesInput('');
      alert('Por favor, insira tamanhos válidos de copos.');
      return;
    }

    const totalMl = litersValue * 1000;
    const calculatedCups: { size: number; count: number }[] = [];

    let remainingMl = totalMl;

    for (const size of cupSizes) {
      const count = Math.floor(remainingMl / size);
      if (count > 0) {
        calculatedCups.push({ size, count });
        remainingMl -= count * size;
      }
    }

    setCups(calculatedCups);
    setRemainingMl(totalMl);

    if (intervalId) {
      clearInterval(intervalId);
    }

    const id = setInterval(() => {
      alert('Hora de beber água!');
    }, 60 * 60 * 1000); // Notifica a cada 1 hora
    setIntervalId(id);
  };

  const handleDrink = (ml: number) => {
    setRemainingMl((prev) => Math.max(prev - ml, 0));
  };

  useEffect(() => {
    if (remainingMl === 0 && intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
      alert('Parabéns! Você atingiu sua meta de consumo de água.');
    }
  }, [remainingMl, intervalId]);

  return (
    <div className="min-h-screen bg-amber-100 flex flex-col items-center justify-center p-6 space-y-8">
      <button
        className="absolute top-5 left-5 w-10 h-10 flex items-center justify-center transition-transform transform hover:scale-110"
        onClick={() => window.location.href = '/HomePage'}
      >
        <img src="house.svg" alt="home" className="w-full h-full" />
      </button>
      <h1 className="text-3xl font-extrabold text-amber-600">
        Rastreador de Consumo de Água
      </h1>
      <div className="w-full max-w-lg bg-amber-50 p-6 rounded-lg shadow-lg space-y-6">
        <label className="flex flex-col space-y-2">
          <span className="text-lg font-medium text-gray-700">
            Quantos litros de água você quer beber?
          </span>
          <input
            type="number"
            value={liters}
            onChange={(e) => setLiters(e.target.value)}
            placeholder="Ex: 2.5"
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
          />
        </label>
        <label className="flex flex-col space-y-2">
          <span className="text-lg font-medium text-gray-700">
            Insira os tamanhos dos copos (em ml), separados por vírgulas:
          </span>
          <input
            type="text"
            value={cupSizesInput}
            onChange={(e) => setCupSizesInput(e.target.value)}
            placeholder="Ex: 500, 300, 200"
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
          />
        </label>
        <button
          onClick={handleCalculate}
          className="w-full bg-amber-600 text-white py-3 rounded-lg shadow-md hover:bg-amber-700 transition"
        >
          Calcular
        </button>
      </div>

      {cups.length > 0 && (
        <div className="w-full max-w-lg bg-amber-50 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">
            Você precisará de:
          </h2>
          <ul className="list-none space-y-2">
            {cups.map((cup, index) => (
              <li key={index} className="text-gray-700 text-center">
                {cup.count} copo(s) de {cup.size}ml{' '}
                <button
                  onClick={() => handleDrink(cup.size)}
                  className="ml-2 text-amber-600 underline"
                >
                  Beber
                </button>
              </li>
            ))}
          </ul>
          <p className="text-center text-gray-700 mt-4">
            Restam {remainingMl}ml para atingir sua meta.
          </p>
        </div>
      )}
    </div>
  );
};
export default WaterTracker;