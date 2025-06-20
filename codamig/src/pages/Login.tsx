import logo_codamig from "../view/assets/logo_codamig.png";

function Login() {
  return (
    <div className="p-login">
      <div className="p-login__logo">
        <img
          src={logo_codamig}
          alt="Logo do CodAmig@ - um texugo rosa, azul e lilás com fundo preto"
        />
      </div>
      <div className="p-login__main">
        <label htmlFor="user">Usuário</label>
        <input
          type="user"
          id="user"
          name="user"
          placeholder="Digite o seu login"
        />

        <label htmlFor="password">Senha</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Digite a senha"
        />

        <div className="text-forgot">
          <a href="#" className="forgot-password">
            Esqueceu sua senha?
          </a>
        </div>

        <button className="login-button">Entrar</button>
      </div>

      <div className="text-no-register">
        <p>
          Não tem uma conta?
          <a className="no-register" href="#">
            Cadastre-se
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;
