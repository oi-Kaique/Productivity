import { useState, useEffect } from 'react';

/**
 * Renders a digital clock component that displays the current time and date.
 * 
 * The component updates the time every second and shows the current time in HH:MM:SS format
 * along with the full date in Brazilian Portuguese locale.
 * 
 * @returns {JSX.Element} A div containing the current time and date
 */
export default function Clock() {
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      const seconds = now.getSeconds().toString().padStart(2, '0');
      setTime(`${hours}:${minutes}:${seconds}`);
    };

    // Atualiza imediatamente
    updateTime();
    
    // Configura o intervalo para atualizar a cada segundo
    const intervalId = setInterval(updateTime, 1000);

    // Limpa o intervalo quando o componente é desmontado
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex flex-col items-center">
      <div className="text-4xl font-bold text-amber-900 dark:text-amber-900">
        {time}
      </div>
      <div className="text-sm text-amber-900 dark:text-amber-900 mt-1">
        {new Date().toLocaleDateString('pt-BR', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })}
      </div>
    </div>
  );
}