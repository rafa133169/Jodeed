import React from "react";
import "./CSS/Login.css";
// import { GoogleLogin } from "react-google-login";
import { Link } from "react-router-dom";
import LoginGoogle from "../components/LoginGoogle";

export default function Login() {
  const id = 0;

  // const responseGoogle = (response) => {
  //   console.log(response);

  //   // Verifica si la autenticación con Google fue exitosa
  //   if (response && response.profileObj) {
  //     // Puedes acceder a la información del perfil a través de response.profileObj

  //     // Luego, realiza la navegación a la página deseada
  //     window.location.href = (`/home`);
  //   }
  // };

  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Login y Registro</title>
      <main>
        <div className="contenedor_todo">
          <div className="caja_trasera">
            <div className="caja_trasera_login"> </div>
            <div className="caja_trasera_login"></div>
            <div className="caja_trasera_login"> </div>
            <div className="caja_trasera_login"> </div>

            <div className="caja_trasera_registro">
              <h3>¿Aun no tienes una cuenta?</h3>
              <p>Registrate para que puedas iniciar sesion</p>
              <Link to={"/registro"}>
                <button id="btn-registrarse">Registrarse</button>
              </Link>
            </div>
          </div>
          {/* formulario de login y registro */}
          <div className="contenedor_login-registro">
            <form action="" className="formulario_login">
              <h2>Iniciar Sesion</h2>
              <LoginGoogle></LoginGoogle>
              {console.log(id)}
              <input type="email" placeholder="Correo Electronico" />
              <input type="password" placeholder="Contraseña" />
              <Link to={'/home/26659565956351551'}>
                <button>Entrar</button>
              </Link>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}
