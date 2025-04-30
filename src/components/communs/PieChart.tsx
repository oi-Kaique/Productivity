import React from "react";

interface PieChartProps {
  data: Array<{
    name: string;
    value: number;
    description?: string;
  }>;
  colors: string[];
  title: string;
  description?: string;
}

export default function PieChart({
  data,
  colors,
  title,
  description,
}: PieChartProps) {
  // Calcula o total para porcentagens
  const total = data.reduce((sum, item) => sum + item.value, 0);

  // Ordena os dados por valor (do maior para o menor)
  const sortedData = [...data].sort((a, b) => b.value - a.value);

  // Configurações do SVG
  const width = 300;
  const height = 300;
  const radius = Math.min(width, height) / 2;
  const centerX = width / 2;
  const centerY = height / 2;

  // Calcula os ângulos para cada fatia
  let startAngle = 0;
  const slices = sortedData.map((item, index) => {
    const percentage = (item.value / total) * 100;
    const angle = (percentage / 100) * 360;
    const endAngle = startAngle + angle;
    const midAngle = (startAngle + endAngle) / 2;

    // Calcula as coordenadas do arco
    const startX =
      centerX + radius * Math.cos(((startAngle - 90) * Math.PI) / 180);
    const startY =
      centerY + radius * Math.sin(((startAngle - 90) * Math.PI) / 180);
    const endX = centerX + radius * Math.cos(((endAngle - 90) * Math.PI) / 180);
    const endY = centerY + radius * Math.sin(((endAngle - 90) * Math.PI) / 180);

    // Calcula a posição do texto
    const textRadius = radius * 0.6;
    const textX =
      centerX + textRadius * Math.cos(((midAngle - 90) * Math.PI) / 180);
    const textY =
      centerY + textRadius * Math.sin(((midAngle - 90) * Math.PI) / 180);

    // Determina se o arco é maior que 180 graus
    const largeArcFlag = angle > 180 ? 1 : 0;

    const path = `M ${centerX} ${centerY} L ${startX} ${startY} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${endX} ${endY} Z`;

    startAngle = endAngle;

    return {
      path,
      percentage,
      color: colors[index % colors.length],
      name: item.name,
      description: item.description,
      textX,
      textY,
      midAngle,
    };
  });

  return (
    <div className="space-y-6">
      {/* Cabeçalho com título e descrição */}
      <div className="space-y-2">
        <h2 className="text-xl font-semibold text-amber-900">{title}</h2>
        {description && <p className="text-amber-600 text-sm">{description}</p>}
      </div>

      {/* Gráfico de Pizza */}
      <div className="flex flex-col items-center">
        <svg width={width} height={height} className="mb-4">
          {slices.map((slice, index) => (
            <g key={index}>
              <path
                d={slice.path}
                fill={slice.color}
                stroke="white"
                strokeWidth="2"
                className="transition-all duration-300 hover:opacity-80"
              />
              {/* Texto dentro do gráfico */}
              <text
                x={slice.textX}
                y={slice.textY}
                textAnchor="middle"
                dominantBaseline="middle"
                className="text-xs font-medium fill-amber-900"
                transform={`rotate(${slice.midAngle}, ${slice.textX}, ${slice.textY})`}
              >
                {slice.name}
                <tspan x={slice.textX} dy="1.2em" className="text-xs">
                  {slice.percentage.toFixed(1)}%
                </tspan>
              </text>
            </g>
          ))}
        </svg>

        {/* Legenda */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {slices.map((slice, index) => (
            <div key={index} className="flex items-center space-x-2">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: slice.color }}
              />
              <div>
                <span className="text-amber-900 font-medium">{slice.name}</span>
                <span className="text-amber-600 text-sm ml-2">
                  {slice.percentage.toFixed(1)}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
