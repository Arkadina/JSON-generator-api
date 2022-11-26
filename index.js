const express = require("express");
const app = express();
const PORT = 3000;
const Router = require("./src/routes/router");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/", Router);

app.listen(PORT, console.log("Servidor inicializado."));
