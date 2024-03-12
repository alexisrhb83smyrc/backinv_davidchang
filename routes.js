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

/**
 * @swagger
 * /entradas:
 *   get:
 *     summary: Obtener la lista de entradas
 *     responses:
 *       200:
 *         description: Lista de entradas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   producto_id:
 *                     type: integer
 *                   cantidad:
 *                     type: integer
 *                   fecha:
 *                     type: string
 *                     format: date-time
 */

/**
 * @swagger
 * /entradas:
 *   post:
 *     summary: Crear una nueva entrada
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               producto_id:
 *                 type: integer
 *               cantidad:
 *                 type: integer
 *               fecha:
 *                 type: string
 *                 format: date-time
 *                 example: "2024-03-11 17:25:34"
 *     responses:
 *       200:
 *         description: Entrada creada correctamente
 */

/**
 * @swagger
 * /entradas/{id}:
 *   put:
 *     summary: Actualizar una entrada existente
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la entrada a actualizar
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               producto_id:
 *                 type: integer
 *               cantidad:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Entrada actualizada correctamente
 */

/**
 * @swagger
 * /entradas/{id}:
 *   delete:
 *     summary: Eliminar una entrada existente
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la entrada a eliminar
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Entrada eliminada correctamente
 */

/**
 * @swagger
 * /salidas:
 *   post:
 *     summary: Crear una nueva salida
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               producto_id:
 *                 type: integer
 *               cantidad:
 *                 type: integer
 *               fecha:
 *                 type: string
 *                 format: date-time
 *                 example: "2024-03-11 17:25:34"
 *     responses:
 *       200:
 *         description: Salida creada correctamente
 */

/**
 * @swagger
 * /inventario:
 *   get:
 *     summary: Obtener el inventario actual
 *     responses:
 *       200:
 *         description: Lista de productos en inventario
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   producto_id:
 *                     type: integer
 *                   stock_actual:
 *                     type: integer
 */

/**
 * @swagger
 * /articulos:
 *   get:
 *     summary: Obtener la lista de artículos disponibles
 *     responses:
 *       200:
 *         description: Lista de artículos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   nombre:
 *                     type: string
 *                   descripcion:
 *                     type: string
 *                   precio:
 *                     type: number
 */

/**
 * @swagger
 * /sp:
 *   get:
 *     summary: Llama la SP que hace uso de la vista creada
 *     responses:
 *       200:
 *         description: Storage procedure
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   nombre:
 *                     type: string
 *                   descripcion:
 *                     type: string
 *                   precio:
 *                     type: number
 */
