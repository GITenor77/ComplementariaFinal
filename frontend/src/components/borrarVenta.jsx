"use client";

import Link from "next/link";
import axios from "axios";

const BorrarVenta = ({ id }) => {
    const handleCancelSale = async () => {
        try {
            const url = `http://localhost:3000/ventas/cancelarVenta/${id}`;
            await axios.patch(url);
            window.location.replace("/ventas/mostrar");
        } catch (error) {
            console.error("Error al cancelar venta:", error);
        }
    };

    return (
        <Link 
            href="" 
            className="link" 
            onClick={handleCancelSale}
        >
            Cancelar Venta
        </Link>
    );
};

export default BorrarVenta;