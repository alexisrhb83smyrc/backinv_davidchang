DELIMITER //

CREATE TRIGGER create_inventario_on_product
AFTER INSERT ON productos
FOR EACH ROW
BEGIN
    INSERT INTO inventario (producto_id, cantidad)
    VALUES (NEW.id, 0);
END //

DELIMITER ;