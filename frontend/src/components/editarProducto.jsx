"use client";

import Link from "next/link";

const EditarProducto = ({ id }) => {
    return (
        <Link 
            href={`/productos/modificar/${id}`} 
            className="link"
        >
            Editar
        </Link>
    );
};

export default EditarProducto;