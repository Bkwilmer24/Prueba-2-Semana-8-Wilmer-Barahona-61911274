const mongoose = require("mongoose");

const polizaSchema = new mongoose.Schema({
  numeroPoliza: { type: String, unique: true, required: true },
  tipoSeguro: {
    type: String,
    enum: ["Auto", "Vida", "Hogar", "Salud"],
    required: true,
  },
  titular: { type: String, required: true },
  monto: { type: Number, required: true },
});

module.exports = mongoose.model("Poliza", polizaSchema);
