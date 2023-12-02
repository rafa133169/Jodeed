import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Registro from "./pages/Registro";
import Main from "./Main";
import MyProfile from "./components/miPerfil";
import agregarRedesSociales from "./components/AgregarRedSocial";

function Rutas() {
  return (
    <>
      
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/home/:id_usuario" element={<Main />} />
        <Route path="/myProfile/:id_usuario" element={<MyProfile />} />
        <Route path="/agregarRedes/:id_usuario" element={< agregarRedesSociales/>} />





        
           
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Rutas;