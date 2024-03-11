const express = require("express");
const router = express.Router();
const controllers = require("./controllers");

router.post("/entradas", controllers.createEntrada);
router.post("/salidas", controllers.createSalida);
router.get("/inventario", controllers.getInventario);
router.get("/articulos", controllers.getArticulos);
router.get("/entradas", controllers.getEntradas); // Agregamos esta línea

module.exports = router;
