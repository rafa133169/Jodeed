const express = require("express");
const redesControllers = require("../Controllers/redesControllers");
const router = express.Router();

// router.post("/", redesControllers.crearRedes);
// router.put("/", redesControllers.actualizarRedes);
router.get("/:id_usuario", redesControllers.verRedes);


module.exports = router