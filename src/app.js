const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const conectarDB = require("./config/db");

dotenv.config();
conectarDB();

const app = express();
app.use(cors());
app.use(express.json());

// Rutas
app.use("/api/polizas", require("./routes/polizaRoutes"));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en el puerto ${PORT}`);
});
