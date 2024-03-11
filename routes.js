const express = require("express");
const router = express.Router();
const connection = require("./db");

// Rutas para entradas/salidas, inventario y artículos
// Ejemplo:
router.get("/entradas", (req, res) => {
  connection.query("SELECT * FROM entradas", (err, results) => {
    if (err) {
      console.error("Error al obtener las entradas: ", err);
      res.status(500).send("Error al obtener las entradas");
      return;
    }
    res.json(results);
  });
});

module.exports = router;
