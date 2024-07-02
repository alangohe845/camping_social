import "./login.css";

export default function Login() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">CampingSocial</h3>
          <span className="loginDesc">
            Conecta con los amantes del camping.
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Email" className="loginInput" />
            <input placeholder="Password" className="loginInput" />
            <button className="loginButton">Iniciar</button>
            <span className="loginForgot">¿Olvidaste contraseña?</span>
            <button className="loginRegisterButton">
              Crear cuenta nueva
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
