import React, { useState } from "react";
// import './Login.css';
// import logoImage from '../img/logo.png';
import firebase from "firebase/compat/app";
import { auth } from "./BD/firebase";
import axios from "axios";
import { useNavigate } from 'react-router-dom';


const googleButtonImageUrl =
  "https://1000marcas.net/wp-content/uploads/2020/02/logo-Google.png";

function RegistroGoogle() {
    const navigate = useNavigate();

  const [user, setUser] = useState(null);
  let id_user = 0;
  let email = null,
    name = null,
    img = null;

  const handleGoogleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth
      .signInWithPopup(provider)
      .then((result) => {
        setUser(result.additionalUserInfo.profile);
        id_user = result.additionalUserInfo.profile.id;
        email = result.additionalUserInfo.profile.email;
        name = result.additionalUserInfo.profile.name;
        img = result.additionalUserInfo.profile.picture;
        RegistroRedes();
        Registro();
      })
      .catch((error) => {
        console.error("Error al iniciar sesión con Google:", error);
      });
  };

  const extractInitial = (name) => {
    const initials = name.split(" ").map((word) => word[0]);

    return initials.join("").toUpperCase();
  };

  const Registro = async () => {
    const response = await axios.post("http://localhost:4001/newUser", {
      id_usuario: id_user,
      nombre_usuario: name,
      correo_electronico: email,
      imagen: img,
    });
    if (response.data) {
    
      alert("Usuario agregado correctamente, Ya puedes iniciar sesion con el mismo metodo");
      navigate(`/`);
      window.location.reload();
    } else {
      console.log("Fallo en agregar usuario");
    }
  };

  
  const RegistroRedes = async () => {
    const response = await axios.post("http://localhost:4001/redes/", {
      id_usuario: id_user,
    });
    if (response.data) {  
      console.log("Todo bien en el registro")
    } else {
      console.log("Fallo en agregar usuario");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="logo"></div>

        <img
          src={googleButtonImageUrl}
          alt="Iniciar sesión con Google"
          onClick={handleGoogleSignIn}
          style={{ cursor: "pointer", width: "150px", height: "80px" }}
        />

        {user && user.name && (
          <div className="user-initial-circle">{extractInitial(user.name)}</div>
        )}
      </div>
    </div>
  );
}

export default RegistroGoogle;
