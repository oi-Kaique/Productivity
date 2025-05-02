<<<<<<< HEAD
import Login from '@/components/WebPages/Login-Create-Forgot/Login'
export default function ProductivityLoginPage() {

    return (
        <Login />
    )
=======
import { useState } from "react";
import { Roboto } from '@next/font/google'
import Link from "next/link";

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
})

export default function ProductivityLoginPage() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
    
    const handleLogin = () => {
      console.log("Login:", { email, password, rememberMe });
    };
  
    return (
      <div className={`${roboto.className} flex h-screen bg-amber-50 `}>  {/* Lado da imagem - Ocupa 50% em telas grandes, oculto em telas pequenas */}
        <div className="hidden md:block md:w-1/2 bg-amber-100">
          <div className="flex items-center justify-center h-full p-8">
            <div className="relative w-full h-full">
              {/* Placeholder para a imagem de produtividade */}
              <img 
                src="/productivity.jpg" 
                alt="Produtividade" 
                className="object-cover rounded-xl h-full w-full shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-amber-500/30 to-transparent rounded-xl"></div>
              <div className="absolute -bottom-8 left-8 text-amber-900 bg-opacity-50">
                <h2 className="text-3xl font-bold">Organize seu dia</h2>
                <p className="text-lg">Aumente sua produtividade com nossa ferramenta.</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Formulário */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-8">
          <div className="w-full max-w-md">
            <div className="mb-10 text-center">
              <div className="bg-amber-200 inline-flex p-3 rounded-full mb-4">
                <img src="/doc.svg" alt="doc" className="h-8 w-8 text-amber-800" />
              </div>
              <h1 className="text-3xl font-bold text-amber-900">Bem-vindo de volta!</h1>
              <p className="text-amber-700 mt-2">Entre na sua conta para continuar</p>
            </div>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-amber-800 mb-1">Email</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  </div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-5 w-full py-3 border border-amber-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <label className="block text-sm font-medium text-amber-800">Senha</label>
                  <Link href="/ForgotPassword" className="text-sm text-amber-600 hover:text-amber-800">Esqueceu a senha?</Link>
                </div>
                <div className="relative">
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-5 w-full py-3 border border-amber-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                    placeholder="••••••••"
                  />
                </div>
              </div>
              
              <div className="flex items-center">
                <input
                  id="remember-me"
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="h-4 w-4 text-amber-600 focus:ring-amber-500 border-amber-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-amber-700">
                  Lembrar de mim
                </label>
              </div>
              
              <button
                onClick={handleLogin}
                className="w-full bg-amber-600 text-white py-3 rounded-lg font-medium shadow-md hover:bg-amber-700 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
              >
                Entrar
              </button>
              
              <div className="relative my-4">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-amber-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-amber-50 text-amber-600">ou continue com</span>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-3">
                <button className="py-2 px-4 border border-amber-300 rounded-md shadow-sm bg-white hover:bg-amber-50 transition-colors">
                  <img src="/facebook.svg" alt="facebook" className="h-5 w-5 mx-auto" />
                </button>
                <button className="py-2 px-4 border border-amber-300 rounded-md shadow-sm bg-white hover:bg-amber-50 transition-colors">
                  <img src="/google.svg" alt="google" className="h-5 w-5 mx-auto" />
                </button>
                <button className="py-2 px-4 border border-amber-300 rounded-md shadow-sm bg-white hover:bg-amber-50 transition-colors">
                  <img src="/github.svg" alt="github" className="h-6 w-6 mx-auto bg-black rounded-full" />
                </button>
              </div>
              
              <p className="text-center text-amber-700 mt-4">
                Não tem uma conta?{" "}
                <Link href="/CreateAccount" className="text-amber-600 font-medium hover:text-amber-800">
                  Registre-se
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
>>>>>>> 46c41461b1218c19ee9854a2147a5cce4af68f4c
  }
