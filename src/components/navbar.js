import React from "react";
import './Css/boton.css';
import firebase from 'firebase/compat/app';
import { Link, useNavigate } from 'react-router-dom';


export default function Navbar() {
  const navigate = useNavigate();
  const id_usuario = window.location.href.split("/")[4].toString();


  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around'
  };
  const handleLogout = async () => {
    try {
      await firebase.auth().signOut(); // Cerrar sesión en Firebase
      // Limpiar la información del usuario en tu estado local
      // Recargar la página después de cerrar sesión
      navigate(`/`);
      window.location.reload();
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  };

  return (
    <div style={containerStyle}>
      <button className="button">Añadir Más Redes Sociales</button>
      <Link to={`/myProfile/${id_usuario}`}>
      <button className="button" >Mi Perfil</button>
      </Link>
      <Link to={`/agregarRedes/${id_usuario}`}>
      <button className="button" onClick={handleLogout}>Cerrar Sesión</button>
      </Link>
    </div>
  );
}
