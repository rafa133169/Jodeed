import React from "react";
import "./CSS/Login.css";
import { Link } from "react-router-dom";
import RegistroGoogle from "../components/RegistroGoogle";

export default function Login() {
  const handleReload = () => {
    window.location.href('/');
    window.location.reload();
  };
  const Regis = () =>{
    alert("Usuario Registrado correctamente!!!")
  }
  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Login y Registro</title>
      <main>
        <div className="contenedor_todo">
          <div className="caja_trasera">
            <div className="caja_trasera_login">
              <h3>¿Ya tienes una cuenta?</h3>
              <p>Inicia sesion para acceder a la aplicacion</p>
              <Link to="/" onClick={handleReload}>
                <button id="btn-iniciar-sesion">Iniciar Sesion</button>
              </Link>
            </div>
            <div className="caja_trasera_registro">
              <h3>¿Aun no tienes una cuenta?</h3>
              <p>Registrate para que puedas iniciar sesion</p>
              <button id="btn-registrarse">Registrarse</button>
            </div>
          </div>
          {/* formulario de login y registro */}
          <div className="contenedor_login-registro">
            <form className="formulario_registro">
              <h2>Registrarse</h2>
              <RegistroGoogle></RegistroGoogle>
              <input
                type="text"
                placeholder="Nombre Completo"
                
              />
              <input type="text" placeholder="Usuario" name="usuario" />
              <input
                type="email"
                placeholder="Correo Electronico"
                
              />
              <input
                type="password"
                placeholder="Contraseña"
                
              />
              <Link to={'/'}>
              <button onClick={Regis}>Registrarse</button>
              </Link>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}
