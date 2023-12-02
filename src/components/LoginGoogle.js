import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import './Login.css';
// import logoImage from '../img/logo.png';
import firebase from 'firebase/compat/app';
import { auth } from './BD/firebase';
import axios from 'axios';

const googleButtonImageUrl = 'https://1000marcas.net/wp-content/uploads/2020/02/logo-Google.png';

function LoginGoogle() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  let id_user = null;

  const handleGoogleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth
      .signInWithPopup(provider)
      .then((result) => {
        setUser(result.additionalUserInfo.profile);
        id_user = result.additionalUserInfo.profile.id;
        Login();
      })
      .catch((error) => {
        console.error('Error al iniciar sesión con Google:', error);
      });
  };
  const Login = async () => {
    try {
      console.log(id_user)
      const response = await axios.post("http://localhost:4001/login", {
        id_usuario: id_user,
      });

      if (response.data.status) {
        
        navigate(`/home/${id_user}`);
        window.location.reload();


      } else {
        alert('Aun no te has Registrado con ese correo');
      }
    } catch (error) {
      console.error("Error al autenticar el usuario:", error);
    }
  };

  const extractInitial = (name) => {
    const initials = name.split(' ').map((word) => word[0]);

    return initials.join('').toUpperCase();
  };

  return (
    <div className="login-container">
      <div className='login-card'>
        <div className="logo">
        </div>

        <img
          src={googleButtonImageUrl}
          alt="Iniciar sesión con Google"
          onClick={handleGoogleSignIn}
          style={{ cursor: 'pointer', width: '150px', height: '80px' }}
        />

        {user && user.name && (
          <div className="user-initial-circle">
            {extractInitial(user.name)}
          </div>
        )}
      </div>
    </div>
  );
}

export default LoginGoogle;