"use client";

import React from "react";

type ChartData = {
  name: string;
  value: number;
  description?: string;
};

type ChartsProps = {
  data: ChartData[];
  colors: string[];
  title: string;
  description: string;
};

export default function Charts({
  data,
  colors,
  title,
  description,
}: ChartsProps) {
  // Calcula o total para porcentagens
  const total = data.reduce((sum, item) => sum + item.value, 0);

  // Ordena os dados por valor (do maior para o menor)
  const sortedData = [...data].sort((a, b) => b.value - a.value);

  return (
    <div className="space-y-6">
      {/* Cabeçalho com título e descrição */}
      <div className="space-y-2">
        <h2 className="text-xl font-semibold text-amber-900">{title}</h2>
        <p className="text-amber-600 text-sm">{description}</p>
      </div>

      {/* Lista de itens */}
      <div className="space-y-4">
        {sortedData.map((item, index) => {
          const percentage = (item.value / total) * 100;
          const color = colors[index % colors.length];

          return (
            <div key={index} className="space-y-2">
              {/* Cabeçalho do item */}
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: color }}
                  />
                  <span className="font-medium text-amber-900">
                    {item.name}
                  </span>
                </div>
                <span className="text-amber-600 font-medium">
                  {percentage.toFixed(1)}%
                </span>
              </div>

              {/* Barra de progresso */}
              <div className="w-full bg-amber-100 rounded-full h-3 overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-500"
                  style={{
                    width: `${percentage}%`,
                    backgroundColor: color,
                  }}
                />
              </div>

              {/* Descrição (se existir) */}
              {item.description && (
                <p className="text-amber-500 text-sm pl-5">
                  {item.description}
                </p>
              )}
            </div>
          );
        })}
      </div>

      {/* Legenda de cores */}
      <div className="mt-4 pt-4 border-t border-amber-200">
        <p className="text-amber-600 text-sm mb-2">Legenda:</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {sortedData.map((item, index) => (
            <div key={index} className="flex items-center space-x-2">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: colors[index % colors.length] }}
              />
              <span className="text-amber-600 text-sm">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
