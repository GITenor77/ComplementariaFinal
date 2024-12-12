"use client";

import Link from "next/link";
import axios from "axios";

const BorrarProducto = ({ id }) => {
    const handleDeleteProduct = async () => {
        try {
            const url = `http://localhost:3000/productos/borrarProducto/${id}`;
            await axios.delete(url);
            window.location.replace("/productos/mostrar");
        } catch (error) {
            console.error("Error al borrar producto:", error);
        }
    };

    return (
        <Link 
            href="" 
            className="link" 
            onClick={handleDeleteProduct}
        >
            Borrar Producto
        </Link>
    );
};

export default BorrarProducto;