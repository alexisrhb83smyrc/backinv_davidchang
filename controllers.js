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
  // Controlador para obtener las entradas
  db.query("SELECT * FROM entradas", (err, result) => {
    if (err) throw err;
    res.json(result);
  });
};

exports.callSP = (req, res) => {
  // Controlador para obtener las entradas
  db.query("SELECT * FROM entradas", (err, result) => {
    if (err) throw err;
    res.json(result);
  });
};
