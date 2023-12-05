const { json } = require("express");
const connection = require("../database");

function verRedes(request, response) {
  const usuario = request.params.id_usuario;
  connection.query(
    `SELECT * FROM redes WHERE usuario_id = ?`,
    [usuario],
    (error, results) => {
      if (error) {
        console.error("Error al obtener los datos:", error);
        response.status(500).json({ error: "Error" });
      } else {
        const flatResults = results[0];

        response.status(200).json(flatResults);
      }
    }
  );
}

// async function crearRedes(request, response) {
//     class Usuario {
//       constructor(
//           id_usuario,
//       ) {
//       this.id_usuario = id_usuario;
        
//       }
//     }
  
//     const usuario = new Usuario(
//       request.body.id_usuario,
  
//     );
    
//     // Validación de datos
//     for (let key in usuario) {
//       if (!usuario[key]) {
//         response.status(400).json({ error: `Falta el campo ${key} del usuario` });
//         return;
//       }
//     }
  
//     try {
//       // Hash de la contraseña
//       // const hashedPassword = await bcrypt.hash(usuario.contrasena, 10);
//       // Inserción en la base de datos
//       connection.query(
//         `INSERT INTO redes (usuario_id) VALUES (?)`,
//         [usuario.id_usuario],
//         (error, result) => {
//           if (error) {
//             console.error("Error al agregar usuario:", error);
//             response.status(500).json({ error: "Error interno del servidor" });
//           } else {
//             response.status(200).json({ mensaje: "Usuario agregado correctamente" });
//           }
//         }
//       );
//     } catch (error) {
//       console.error("Error al agregar usuario:", error);
//       response.status(500).json({ error: "Error interno del servidor" });
//     }
//   }

// function facebook(request, response) {
//   class Usuario {
//     constructor(id_usuario,id_receta) {
//       this.id_usuario = id_usuario; 
//     }
//   }

//   const usuario = new Usuario(request.body.id_usuario,request.body.id_receta);
 
//   // Validación de datos

//   connection.query(
//     `UPDATE redes
//         SET facebook = 1
//         WHERE usuario_id = ?;`,
//     [usuario.id_usuario],
//     (error, result) => {
//       if (error) {
//         console.error("Error al Actualizar estatus:", error);
//         response.status(500).json({ error: "Error interno del servidor" });
//       } else {
//         response
//           .status(200)
//           .json({ mensaje: "Estatus actualizado correctamente" });
//       }
//     }
//   );
// }


// function tiktok(request, response) {
//   class Usuario {
//     constructor(id_usuario,id_receta) {
//       this.id_usuario = id_usuario; 
//     }
//   }

//   const usuario = new Usuario(request.body.id_usuario,request.body.id_receta);
 
//   // Validación de datos

//   connection.query(
//     `UPDATE redes
//         SET tiktok = 1
//         WHERE usuario_id = ?;`,
//     [usuario.id_usuario],
//     (error, result) => {
//       if (error) {
//         console.error("Error al Actualizar estatus:", error);
//         response.status(500).json({ error: "Error interno del servidor" });
//       } else {
//         response
//           .status(200)
//           .json({ mensaje: "Estatus actualizado correctamente" });
//       }
//     }
//   );
// }


module.exports = {
  // crearRedes,
  // facebook,
  // tiktok,
  verRedes,
};