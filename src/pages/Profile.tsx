<<<<<<< HEAD
import PersonalProfile from "@/components/WebPages/Perfil/PersonalProfile";
const Profile = () => {
  return (
    <PersonalProfile />
=======
import { Roboto } from "@next/font/google";
import Menu from "@/components/communs/menu";

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const Profile = () => {
  return (
    <div className={`${roboto.className} flex h-screen bg-amber-50`}>
      <Menu />
      <div className="flex-1 p-8 overflow-y-auto">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-amber-900 mb-8">Perfil</h1>
          <div className="flex flex-col md:flex-row gap-8">
            {/* Informações do Perfil */}
            <div className="w-full md:w-1/3">
              <div className="bg-white rounded-xl shadow-md p-6">
                <div className="flex flex-col items-center">
                  <div className="relative">
                    <img
                      src="/profile.svg"
                      alt="Foto do Perfil"
                      className="w-32 h-32 rounded-full mb-4"
                    />
                    <button className="absolute bottom-2 right-2 bg-amber-500 text-white p-2 rounded-full hover:bg-amber-600 transition-colors">
                      <img src="/edit.svg" alt="Editar" className="w-4 h-4" />
                    </button>
                  </div>
                  <h2 className="text-2xl font-bold text-amber-900">
                    Kaique Pereira
                  </h2>
                  <p className="text-amber-600">kaiquepereira@gmail.com</p>
                  <div className="mt-4 w-full">
                    <button className="w-full bg-amber-500 text-white py-2 rounded-lg hover:bg-amber-600 transition-colors">
                      Editar Perfil
                    </button>
                  </div>
                </div>
              </div>

              {/* Estatísticas Pessoais */}
              <div className="bg-white rounded-xl shadow-md p-6 mt-6">
                <h3 className="text-xl font-bold text-amber-900 mb-4">
                  Estatísticas
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-amber-600">Tempo Total Focado</span>
                    <span className="font-bold text-amber-900">45h 30m</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-amber-600">Tarefas Concluídas</span>
                    <span className="font-bold text-amber-900">156</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-amber-600">Produtividade Média</span>
                    <span className="font-bold text-amber-900">82%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Configurações e Preferências */}
            <div className="w-full md:w-2/3">
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-bold text-amber-900 mb-6">
                  Configurações
                </h3>

                {/* Notificações */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-amber-900 mb-4">
                    Notificações
                  </h4>
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
                          defaultChecked
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
                          defaultChecked
                        />
                        <div className="w-11 h-6 bg-amber-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-amber-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-amber-500"></div>
                      </label>
                    </div>
                  </div>
                </div>

                {/* Preferências de Timer */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-amber-900 mb-4">
                    Preferências de Timer
                  </h4>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-amber-900 mb-2">
                        Duração do Pomodoro (minutos)
                      </label>
                      <input
                        type="number"
                        defaultValue="25"
                        className="w-full p-2 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-amber-900 mb-2">
                        Duração do Intervalo (minutos)
                      </label>
                      <input
                        type="number"
                        defaultValue="5"
                        className="w-full p-2 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
>>>>>>> 46c41461b1218c19ee9854a2147a5cce4af68f4c
  );
};
export default Profile;
