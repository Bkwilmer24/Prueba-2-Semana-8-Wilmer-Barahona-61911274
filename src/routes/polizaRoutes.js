const express = require("express");
const router = express.Router();
const Poliza = require("../models/poliza");


// Crear póliza
router.post("/", async (req, res) => {
  try {
    const nuevaPoliza = new Poliza(req.body);
    await nuevaPoliza.save();
    res.status(201).json(nuevaPoliza);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Leer todas
router.get("/", async (req, res) => {
  const polizas = await Poliza.find();
  res.json(polizas);
});

// Leer por número de póliza
router.get("/:id", async (req, res) => {
  try {
    const poliza = await Poliza.findById(req.params.id);
    if (!poliza) return res.status(404).json({ mensaje: "No encontrada" });
    res.json(poliza);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Actualizar
router.put("/:id", async (req, res) => {
  try {
    const poliza = await Poliza.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(poliza);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Eliminar
router.delete("/:id", async (req, res) => {
  try {
    await Poliza.findByIdAndDelete(req.params.id);
    res.json({ mensaje: "Póliza eliminada" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
