DELIMITER //

CREATE TRIGGER actualizar_inventario_entrada
AFTER INSERT ON entradas
FOR EACH ROW
BEGIN
    UPDATE inventario
    SET cantidad = cantidad + NEW.cantidad
    WHERE producto_id = NEW.producto_id;
END //

DELIMITER ;