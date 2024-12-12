"use client";

import Link from "next/link";
import axios from "axios";

const BorrarUsuario = ({ id }) => {
    const handleDelete = async () => {
        try {
            const url = `http://localhost:3000/borrarUsuario/${id}`;
            await axios.delete(url);
            window.location.replace("/usuarios/mostrar");
        } catch (error) {
            console.error("Error al borrar usuario:", error);
        }
    };

    return (
        <Link 
            href="" 
            className="link" 
            onClick={handleDelete}
        >
            Borrar
        </Link>
    );
};

export default BorrarUsuario;