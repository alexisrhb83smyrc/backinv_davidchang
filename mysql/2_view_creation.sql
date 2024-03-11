CREATE VIEW vista_inventario AS
SELECT 
    i.id AS inventario_id,
    p.id AS producto_id,
    p.nombre AS producto_nombre,
    p.precio AS producto_precio,
    i.cantidad AS inventario_cantidad
FROM 
    inventario i
JOIN 
    productos p ON i.producto_id = p.id;