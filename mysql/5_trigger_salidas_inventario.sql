DELIMITER //

CREATE TRIGGER actualizar_inventario_salida
AFTER INSERT ON salidas
FOR EACH ROW
BEGIN
    UPDATE inventario
    SET cantidad = cantidad - NEW.cantidad
    WHERE producto_id = NEW.producto_id;
END //

DELIMITER ;