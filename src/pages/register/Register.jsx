import "./register.css";

export default function Register() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">CampingSocial</h3>
          <span className="loginDesc">
            Conecta con amantes del camping.
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Username" className="loginInput" />
            <input placeholder="Email" className="loginInput" />
            <input placeholder="Password" className="loginInput" />
            <input placeholder="Password Again" className="loginInput" />
            <button className="loginButton">Registrar</button>
            <button className="loginRegisterButton">
              Iniciar con mi cuenta
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
