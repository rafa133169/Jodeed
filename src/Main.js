import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import YouTubeCard from "./components/youtube";
import FacebookCard from "./components/facebook";
import TwitterCard from "./components/twitter";
import Navbar from "./components/navbar";
import TiktokCard from "./components/tiktok";
import InstagramCard from "./components/instagra";
import TumblrCard from "./components/tumblr";
import axios from "axios";

const Main = () => {
  const [redes, setRedes] = useState([]);
  const id_user = window.location.href.split("/")[4].toString();

  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await axios.get(
          `http://localhost:4001/redes/${id_user}`
        );
        if (Array.isArray(response.data)) {
          setRedes(response.data);
        } else {
          console.error(
            "La respuesta de la API no es un array:",
            response.data,
            setRedes(response.data)
          );
        }
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    }
    fetchUser();
    console.log(redes);
  }, [redes]);
  return (
    <div className="container mt-4">
      <Navbar></Navbar>
      <br></br>
      <div className="row">
        {redes.youtube === 1 ? (
          <div className="col-md-6">
            <br />
            <YouTubeCard />
          </div>
        ) : null}

        {redes.facebook === 1 ? (
          <div className="col-md-6">
            <br />
            <FacebookCard />
          </div>
        ) : null}

        {redes.tiktok === 1 ? (
          <div className="col-md-6">
            <br />
            <TiktokCard />
          </div>
        ) : null}

        {redes.twitter === 1 ? (
          <div className="col-md-6">
            <br />
            <TwitterCard />
          </div>
        ) : null}
        {redes.instagram === 1 ? (
          <div className="col-md-6">
            <br />
            <InstagramCard />
          </div>
        ) : null}
        {redes.tumblr === 1 ? (
          <div className="col-md-6">
            <br />
            <TumblrCard />
          </div>
        ) : null}
        
      </div>
    </div>
  );
};

export default Main;
