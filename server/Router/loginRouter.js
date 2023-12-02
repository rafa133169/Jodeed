const express = require("express");
const loginControllers = require("../Controllers/loginControllers");
const router = express.Router();

router.post("/", loginControllers.Login);
router.get("/:id_usuario", loginControllers.verUsuario);


module.exports = router