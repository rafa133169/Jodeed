// import React, { useEffect, useState } from "react";
// import axios from "axios";

// export default function agregarRedesSociales() {
//   const [redes, setRedes] = useState([]);
//   const id_user = window.location.href.split("/")[4].toString();

//   useEffect(() => {
//     async function fetchUser() {
//       try {
//         const response = await axios.get(
//           `http://localhost:4001/redes/${id_user}`
//         );
//         if (Array.isArray(response.data)) {
//           setRedes(response.data);
//         } else {
//           console.error(
//             "La respuesta de la API no es un array:",
//             response.data,
//             setRedes(response.data)
//           );
//         }
//       } catch (error) {
//         console.error("Error al obtener los datos:", error);
//       }
//     }
//     fetchUser();
//     console.log(redes);
//   }, [redes]);
//   return (
//     <>
//       <div className="container mt-4">
//         <Navbar></Navbar>
//         <br></br>
//         <div className="row">
//           {redes.youtube === 0 ? (
//             <div className="col-md-6">
//               <br />
//               <YouTubeCard />
//             </div>
//           ) : null}

//           {redes.facebook === 0 ? (
//             <div className="col-md-6">
//               <br />
//              {/*-------------------- aqui hiria la imagen o boton de facebook  ----------------*/}
//             </div>
//           ) : null}

//           {redes.tiktok === 0 ? (
//             <div className="col-md-6">
//               <br />
//              {/*-------------------- aqui hiria la imagen o boton de tiktok  ----------------*/}
//              </div>
//           ) : null}

//           {redes.twitter === 0 ? (
//             <div className="col-md-6">
//               <br />
//              {/*-------------------- aqui hiria la imagen o boton twitter   ----------------*/}
//              </div>
//           ) : null}
//           {redes.instagram === 0 ? (
//             <div className="col-md-6">
//               <br />
//              {/*-------------------- aqui hiria la imagen o boton Instagram  ----------------*/}
//              </div>
//           ) : null}
//           {redes.tumblr === 0 ? (
//             <div className="col-md-6">
//               <br />
//              {/*-------------------- aqui hiria la imagen o boton Tumblr  ----------------*/}
//              </div>
//           ) : null}
//         </div>
//       </div>
//     </>
//   );
// }
