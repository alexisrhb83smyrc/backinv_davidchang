const db = require("./db");

exports.createEntrada = (req, res) => {
  const { producto_id, cantidad } = req.body;
  db.query(
    "INSERT INTO entradas (producto_id, cantidad) VALUES (?, ?)",
    [producto_id, cantidad],
    (err, result) => {
      if (err) throw err;
      res.send("Entrada creada correctamente");
    }
  );
};

exports.updateEntrada = (req, res) => {
  const { id } = req.params;
  const { producto_id, cantidad } = req.body;
  db.query(
    "UPDATE entradas SET producto_id = ?, cantidad = ? WHERE id = ?",
    [producto_id, cantidad, id],
    (err, result) => {
      if (err) throw err;
      res.send("Entrada actualizada correctamente");
    }
  );
};

exports.deleteEntrada = (req, res) => {
  const { id } = req.params;
  db.query("DELETE FROM entradas WHERE id = ?", [id], (err, result) => {
    if (err) throw err;
    res.send("Entrada eliminada correctamente");
  });
};

exports.createSalida = (req, res) => {
  const { producto_id, cantidad } = req.body;
  db.query(
    "INSERT INTO salidas (producto_id, cantidad) VALUES (?, ?)",
    [producto_id, cantidad],
    (err, result) => {
      if (err) throw err;
      res.send("Salida creada correctamente");
    }
  );
};

exports.getInventario = (req, res) => {
  db.query("SELECT * FROM inventario", (err, result) => {
    if (err) throw err;
    res.json(result);
  });
};

exports.getArticulos = (req, res) => {
  db.query("SELECT * FROM articulos", (err, result) => {
    if (err) throw err;
    res.json(result);
  });
};

exports.getEntradas = (req, res) => {
  db.query("SELECT * FROM entradas", (err, result) => {
    if (err) throw err;
    res.json(result);
  });
};

exports.callSP = (req, res) => {
  db.query("CALL obtener_vista_inventario()", (error, results, fields) => {
    if (error) {
      console.error("Error al llamar al procedimiento almacenado:", error);
      res.status(500).send("Error al llamar al procedimiento almacenado");
      return;
    }
    res.json(results);
  });
};
