"use client";

import Link from "next/link";

const EditarVentaLink = ({ id }) => {
    return (
        <Link 
            href={`/ventas/modificar/${id}`} 
            className="link"
        >
            Editar Venta
        </Link>
    );
};

export default EditarVentaLink;