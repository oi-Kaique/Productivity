import { Roboto } from "@next/font/google";
import Menu from "@/components/communs/menu";
import { useState } from "react";

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const Settings = () => {
  const [theme, setTheme] = useState("light");
  const [notifications, setNotifications] = useState({
    email: true,
    tasks: true,
    focus: true,
  });

  const [timerSettings, setTimerSettings] = useState({
    pomodoro: 25,
    shortBreak: 5,
    longBreak: 15,
  });

  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme);
    // Aqui você pode adicionar a lógica para mudar o tema da aplicação
  };

  const handleNotificationChange = (type: string) => {
    setNotifications((prev) => ({
      ...prev,
      [type]: !prev[type as keyof typeof notifications],
    }));
  };

  const handleTimerChange = (type: string, value: number) => {
    setTimerSettings((prev) => ({
      ...prev,
      [type]: value,
    }));
  };

  return (
    <div className={`${roboto.className} flex h-screen bg-amber-50`}>
      <Menu />
      <div className="flex-1 p-8 overflow-y-auto">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-amber-900 mb-8">
            Configurações
          </h1>
          {/* Notificações */}
          <div className="bg-white rounded-xl shadow-md p-6 mb-6">
            <h2 className="text-xl font-bold text-amber-900 mb-4">
              Notificações
            </h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-amber-900">
                    Notificações por Email
                  </p>
                  <p className="text-sm text-amber-600">
                    Receba atualizações por email
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={notifications.email}
                    onChange={() => handleNotificationChange("email")}
                  />
                  <div className="w-11 h-6 bg-amber-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-amber-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-amber-500"></div>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-amber-900">
                    Lembretes de Tarefas
                  </p>
                  <p className="text-sm text-amber-600">
                    Receba lembretes de tarefas pendentes
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={notifications.tasks}
                    onChange={() => handleNotificationChange("tasks")}
                  />
                  <div className="w-11 h-6 bg-amber-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-amber-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-amber-500"></div>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-amber-900">
                    Lembretes de Foco
                  </p>
                  <p className="text-sm text-amber-600">
                    Receba lembretes para manter o foco
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={notifications.focus}
                    onChange={() => handleNotificationChange("focus")}
                  />
                  <div className="w-11 h-6 bg-amber-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-amber-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-amber-500"></div>
                </label>
              </div>
            </div>
          </div>

          {/* Configurações do Timer */}
          <div className="bg-white rounded-xl shadow-md p-6 mb-6">
            <h2 className="text-xl font-bold text-amber-900 mb-4">
              Configurações do Timer
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-amber-900 mb-2">
                  Duração do Pomodoro (minutos)
                </label>
                <input
                  type="number"
                  value={timerSettings.pomodoro}
                  onChange={(e) =>
                    handleTimerChange("pomodoro", parseInt(e.target.value))
                  }
                  className="w-full p-2 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                  min="1"
                  max="60"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-amber-900 mb-2">
                  Duração do Intervalo Curto (minutos)
                </label>
                <input
                  type="number"
                  value={timerSettings.shortBreak}
                  onChange={(e) =>
                    handleTimerChange("shortBreak", parseInt(e.target.value))
                  }
                  className="w-full p-2 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                  min="1"
                  max="15"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-amber-900 mb-2">
                  Duração do Intervalo Longo (minutos)
                </label>
                <input
                  type="number"
                  value={timerSettings.longBreak}
                  onChange={(e) =>
                    handleTimerChange("longBreak", parseInt(e.target.value))
                  }
                  className="w-full p-2 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                  min="1"
                  max="30"
                />
              </div>
            </div>
          </div>

          {/* Configurações de Privacidade */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-bold text-amber-900 mb-4">
              Privacidade
            </h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-amber-900">
                    Compartilhar Estatísticas
                  </p>
                  <p className="text-sm text-amber-600">
                    Permitir que outros vejam suas estatísticas
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    defaultChecked
                  />
                  <div className="w-11 h-6 bg-amber-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-amber-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-amber-500"></div>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-amber-900">Perfil Público</p>
                  <p className="text-sm text-amber-600">
                    Tornar seu perfil visível para outros usuários
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    defaultChecked
                  />
                  <div className="w-11 h-6 bg-amber-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-amber-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-amber-500"></div>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
