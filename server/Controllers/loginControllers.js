const { json } = require("express");
const connection = require("../database");

function Login(request, response) {
  const id_usuario = request.body.id_usuario;

  connection.query(
    `SELECT * FROM usuario WHERE id_usuario = ?`,
    [id_usuario],
    (error, result) => {
      if (result.length === 0) {
        response.status(200).json({
          respuesta: "No se encontró un usuario con esos datos",
          status: false,
        });
      } else {
        const userId = result[0].id_usuario;
        response.status(200).json({
          respuesta: userId,
          status: true,
        });
      }
    }
  );
}



function verUsuario(request, response) {
  const usuario = request.params.id_usuario;
  connection.query(
    `SELECT * FROM usuario WHERE id_usuario = ?`,
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

module.exports = {
  Login,
  verUsuario,
};