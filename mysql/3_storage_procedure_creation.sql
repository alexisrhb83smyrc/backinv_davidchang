DELIMITER //

CREATE PROCEDURE obtener_vista_inventario()
BEGIN
    SELECT * FROM vista_inventario;
END //

DELIMITER ;