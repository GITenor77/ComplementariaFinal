"use client";

import Link from "next/link";

const EditarUsuario = ({ id }) => {
    return (
        <Link 
            href={`/usuarios/modificar/${id}`} 
            className="link"
        >
            Editar
        </Link>
    );
};

export default EditarUsuario;