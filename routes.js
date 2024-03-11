const express = require("express");
const router = express.Router();
const controllers = require("./controllers");

router.get("/entradas", controllers.getEntradas);
router.post("/entradas", controllers.createEntrada);
router.put("/entradas/:id", controllers.updateEntrada);
router.delete("/entradas/:id", controllers.deleteEntrada);

router.post("/salidas", controllers.createSalida);
router.get("/inventario", controllers.getInventario);
router.get("/articulos", controllers.getArticulos);
router.get("/sp", controllers.callSP);

module.exports = router;
