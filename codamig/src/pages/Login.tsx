import "../view/styles/login.scss";
import logo_codamig from "../view/assets/logo_codamig.png";

function Login() {
  return (
    <div className="min-h-screen bg-purple-soft flex-col">
      {/* <div className="min-h-screen bg-slate-100 flex flex-col justify-center items-center p-4">
        O "card" do formulário: Largura máxima definida, fundo branco, bordas arredondadas,
          sombra suave e um padding interno generoso. */}
      {/* Seção do Logo: Centralizado e com uma margem inferior para separar do formulário. */}
      <div className="w-full max-w-md h-80 bg-black shadow-lg p-8">
        <div className="flex justify-center mb-8">
          <img
            src={logo_codamig}
            alt="Logo do CodAmig@ - um texugo rosa, azul e lilás com fundo preto"
            className="w-48" // Define uma largura para o logo
          />
        </div>
      </div>
      <div className="w-full max-w-md bg-purple-soft p-8">
        {/* rounded-xl shadow-lg */}
        <form>
          {/* Campo de Usuário */}
          <div className="mb-4">
            {" "}
            {/* Margem inferior para espaçamento */}
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
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Digite a senha"
              className="w-full px-3 py-2 border border-gray-300 rounded-xl shadow-sm font-bold
                         focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
            />
            <div className="text-right text-sm mt-2">
              <a
                href="#"
                className="font-semibold text-black text-base hover:text-violet-600"
              >
                Esqueceu sua senha?
              </a>
            </div>
          </div>

          <div className="flex justify-center items-center">
            {/* Botão de Entrar */}
            <button
              type="submit" // Botões em formulários devem ter um tipo
              className="w-32 bg-pink-imposing text-white text-xl font-black py-3 px-8 rounded-xl
                        hover:bg-violet-700 focus:outline-none focus:ring-2
                        focus:ring-offset-2 focus:ring-violet-500 transition-colors duration-300"
            >
              Entrar
            </button>
          </div>
        </form>
      </div>

      {/* Texto de Cadastro, posicionado fora do card principal. */}
      <div className="text-center text-base font-semibold text-black mt-6">
        <p>
          Não tem uma conta?
          <a
            href="#"
            className="text-base font-bold text-pink-imposing hover:text-violet-500 ml-1"
          >
            Cadastre-se
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;
