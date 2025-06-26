//import "../view/styles/login.scss";
import { useState } from "react";
import logo_codamig from "../assets/logo_codamig.png";
import { EyeOpenIcon, EyeClosedIcon } from "../components/AuthIcons";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="min-h-screen bg-purple-soft flex-col">
      <div className="w-full max-w-md h-80 bg-dark-app-black shadow-lg p-8 flex flex-col justify-center items-center">
        <img
          src={logo_codamig}
          alt="Logo do CodAmig@ - um texugo rosa, azul e lilás com fundo preto"
          className="w-48" // Define uma largura para o logo
        />
      </div>
      <div className="w-full max-w-md bg-purple-soft p-8">
        <form>
          {/* Campo de Usuário */}
          <div className="mb-4">
            <label
              htmlFor="user"
              className="block text-lg font-bold text-black mb-1"
            >
              Usuário:
            </label>
            <input
              type="text" // 'user' não é um tipo válido, usamos 'text'
              id="user"
              name="user"
              placeholder="Digite o seu login"
              className="w-full px-3 py-2 border border-gray-300 rounded-xl shadow-sm font-bold
                         focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
            />
          </div>

          {/* Campo de Senha */}
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-lg font-bold text-black mb-1"
            >
              Senha:
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                placeholder="Digite a senha"
                className="w-full px-3 py-2 border border-gray-300 rounded-xl shadow-sm font-bold
                          focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)} // Inverte o estado ao ser clicado
                className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-600 hover:text-violet-600"
              >
                {showPassword ? <EyeOpenIcon /> : <EyeClosedIcon />}
              </button>
            </div>
            <div className="text-right text-sm mt-2">
              <a
                href="#"
                className="font-medium text-black text-base hover:text-violet-600"
              >
                Esqueceu sua senha?
              </a>
            </div>
          </div>

          <div className="flex justify-center items-center">
            {/* Botão de Entrar */}
            <button
              type="submit" // Botões em formulários devem ter um tipo
              className="w-32 bg-pink-imposing text-white text-xl font-bold py-3 px-8 rounded-xl
                        hover:bg-pink-soft focus:outline-none focus:ring-2
                        focus:ring-offset-2 focus:ring-pink-soft transition-colors duration-600"
            >
              Entrar
            </button>
          </div>
        </form>
      </div>

      {/* Texto de Cadastro. */}
      <div className="text-center text-base font-medium text-black mt-6">
        <p>
          Não tem uma conta?
          <a
            href="#"
            className="text-base font-semibold text-pink-imposing hover:text-pink-soft ml-1"
          >
            Cadastre-se
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;
