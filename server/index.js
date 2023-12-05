const express = require("express");
const cors = require("cors");


const login = require('./Router/loginRouter')
const newUser = require('./Router/usuarioRouter');
// const redes = require('./Router/redesRouter')



const app = express();
app.use(express.json());
app.use(cors());

app.use("/login", login);
app.use("/newUser", newUser);
// app.use("/redes", redes);



app.listen(4001, () => {
  console.log("Escuchando en el puerto 4001...");
});