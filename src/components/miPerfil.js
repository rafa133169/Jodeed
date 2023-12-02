/**
 * v0 by Vercel.
 * @see https://v0.dev/t/YCXjMGmJSp5
 */
// import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./Css/miPerfil.css";
import styles from './Css/miPerfil.css';

// import "font-awesome/css/font-awesome.min.css";

export default function MyProfile() {
  const id_usuario = window.location.href.split("/")[4].toString();
  const [usuario, setUsuario] = useState([]);
  let img;

 useEffect(() => {
    async function fetchUser() {
      try {
        const response = await axios.get(
          `http://localhost:4001/login/${id_usuario}`
        );
        if (Array.isArray(response.data)) {
          setUsuario(response.data);
        } else {
          console.error(
            "La respuesta de la API no es un array:",
            response.data,
            setUsuario(response.data)

          );
        }
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    }
    fetchUser();
    console.log(usuario);
    
  },[]);
  console.log(img)

  return (
    <>
    
      <div className="container mt-4 mb-4 p-3 d-flex justify-content-center">
        <div className="card p-4">
          <div className=" image d-flex flex-column justify-content-center align-items-center">
            <button className="btn btn-secondary">
              <img
                src={usuario.imagen}
                height={100}
                width={100}
              />
            </button>
            <span className="name mt-3">{usuario.nombre}</span>
            <span className="idd">{usuario.correo}</span>
            <div className="d-flex flex-row justify-content-center align-items-center gap-2">
              <span className="idd1">Oxc4c16a645_b21a</span>
              {""}
              <span>
                <i className="fa fa-copy" />
              </span>
            </div>
            {""}
            <div className="d-flex flex-row justify-content-center align-items-center mt-3">
              <span className="number">
                1069 <span className="follow">Followers</span>
              </span>
            </div>
            {""}
            <div className=" d-flex mt-2">{""}</div>
            {""}
            <button className="btn1 btn-dark">Edit Profile</button>
            <div className="text mt-3">
              {""}
              <span>
                Eleanor Pena is a creator of minimalistic x bold graphics and
                digital artwork.Artist/ Creative Director by Day #NFT minting@
                with FND night.
                {""}
              </span>
            </div>
            {""}
            <div className="gap-3 mt-3 icons d-flex flex-row justify-content-center align-items-center">
              <span>
                <i className="fa fa-twitter" />
              </span>
              {""}
              <span>
                <i className="fa fa-facebook-f" />
              </span>
              <span>
                <i className="fa fa-instagram" />
              </span>
              {""}
              <span>
                <i className="fa fa-linkedin" />
              </span>
            </div>
            {""}
            <div className=" px-2 rounded mt-4 date ">
              {""}
              <span className="join">01/12/2023</span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Button variant="outline-success">Success</Button>{' '}
        <Button variant="outline-warning">Success</Button>{' '}

      </div>
    </>
  );
}
