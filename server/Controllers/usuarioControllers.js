const { json } = require("express");
const connection = require("../database");
// const bcrypt = require("bcrypt");

async function agregarUsuario(request, response) {
  class Usuario {
    constructor(
        id_usuario,
      nombre_usuario,
      correo_electronico,
      imagen
    ) {
    this.id_usuario = id_usuario;
      this.nombre_usuario = nombre_usuario;
      this.correo_electronico = correo_electronico;
      this.imagen = imagen;
    }
  }

  const usuario = new Usuario(
    request.body.id_usuario,
    request.body.nombre_usuario,
    request.body.correo_electronico,
    request.body.imagen
  );
  
  // Validación de datos
  for (let key in usuario) {
    if (!usuario[key]) {
      response.status(400).json({ error: `Falta el campo ${key} del usuario` });
      return;
    }
  }

  try {
    // Hash de la contraseña
    // const hashedPassword = await bcrypt.hash(usuario.contrasena, 10);

    // Inserción en la base de datos
    connection.query(
      `INSERT INTO usuario (id_usuario, nombre,correo, imagen) VALUES (?, ?, ?,?)`,
      [usuario.id_usuario,usuario.nombre_usuario, usuario.correo_electronico, usuario.imagen],
      (error, result) => {
        if (error) {
          console.error("Error al agregar usuario:", error);
          response.status(500).json({ error: "Error interno del servidor" });
        } else {
          response.status(200).json({ mensaje: "Usuario agregado correctamente" });
        }
      }
    );
  } catch (error) {
    console.error("Error al agregar usuario:", error);
    response.status(500).json({ error: "Error interno del servidor" });
  }
}


module.exports = {
  agregarUsuario,
};