import React, { useState } from "react";
import { Roboto } from "@next/font/google";
import Link from "next/link";

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const Forgot = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setError("Por favor, insira seu email");
      return;
    }
    if (!email.includes("@")) {
      setError("Por favor, insira um email válido");
      return;
    }
    // Aqui você pode adicionar a lógica para enviar o email de recuperação
    setIsSubmitted(true);
    setError("");
  };
  return (
    <div className={`${roboto.className}flex-1 p-8 overflow-y-auto`}>
      <div className="max-w-md mx-auto">
        <div className="bg-amber-50/30 rounded-xl shadow-md p-8">
          <h1 className="text-2xl font-bold text-amber-900 mb-2">
            Recuperar Senha
          </h1>
          <p className="text-amber-600 mb-6">
            Digite seu email para receber as instruções de recuperação de senha
          </p>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-amber-900 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="seu@email.com"
                />
                {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
              </div>

              <button
                type="submit"
                className="w-full bg-amber-500 text-white py-3 rounded-lg hover:bg-amber-600 transition-colors font-medium"
              >
                Enviar Instruções
              </button>

              <div className="text-center">
                <Link
                  href="/ProductivityLoginPage"
                  className="text-amber-600 hover:text-amber-700 text-sm"
                >
                  Voltar para o login
                </Link>
              </div>
            </form>
          ) : (
            <div className="text-center space-y-6">
              <div className="bg-amber-100 p-4 rounded-lg">
                <p className="text-amber-900">
                  Enviamos um email com as instruções para recuperar sua senha.
                  Por favor, verifique sua caixa de entrada.
                </p>
              </div>
              <Link
                href="/ProductivityLoginPage"
                className="inline-block bg-amber-500 text-white py-3 px-6 rounded-lg hover:bg-amber-600 transition-colors font-medium"
              >
                Voltar para o login
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Forgot;
