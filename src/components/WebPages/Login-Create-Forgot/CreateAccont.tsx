import React, { useState } from 'react';
import { Roboto } from '@next/font/google';
import Link from 'next/link';

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
});
const CreateAccount = () => { 
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = () => {
        console.log("Register:", { name, email, password });
    };
    return (
      
        <div
        className={`${roboto.className} flex h-screen bg-amber-50 items-center justify-center`}
      >
        <div className="w-full max-w-md p-8">
          <div className="mb-10 text-center">
            <div className="bg-amber-200 inline-flex p-3 rounded-full mb-4">
              <img
                src="/doc.svg"
                alt="doc"
                className="h-8 w-8 text-amber-800"
              />
            </div>
            <h1 className="text-3xl font-bold text-amber-900">
              Crie sua conta
            </h1>
            <p className="text-amber-700 mt-2">
              Preencha os dados abaixo para começar
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-amber-800 mb-1">
                Nome completo
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="pl-5 w-full py-3 border border-amber-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                placeholder="Seu nome"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-amber-800 mb-1">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-5 w-full py-3 border border-amber-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                placeholder="seu@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-amber-800 mb-1">
                Senha
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pl-5 w-full py-3 border border-amber-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                placeholder="Crie uma senha"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-amber-800 mb-1">
                Confirme sua senha
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pl-5 w-full py-3 border border-amber-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                placeholder="Confirme sua senha"
              />
            </div>

            <button
              onClick={handleRegister}
              className="w-full bg-amber-600 text-white py-3 rounded-lg font-medium shadow-md hover:bg-amber-700 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
            >
              Criar conta
            </button>

            <p className="text-center text-amber-700 mt-4">
              Já tem uma conta?{" "}
              <Link
                href="/"
                className="text-amber-600 font-medium hover:text-amber-800"
              >
                Entrar
              </Link>
            </p>
          </div>
        </div>
      </div>
    );
};

export default CreateAccount;