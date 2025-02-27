"use client";

import Link from "next/link";
import axios from "axios";
import '../../estilos.css';
import BorrarProducto from "@/components/borrarProducto";
import EditarProducto from "@/components/editarProducto";

const getProductos = async (searchTerm) => {
    const url = "http://localhost:3000/productos";
    const productos = await axios.get(url);
    
    return searchTerm 
        ? productos.data.filter(producto => 
            producto.nombre.toLowerCase().includes(searchTerm.toLowerCase())
        )
        : productos.data;
};

export default async function Productos({ searchParams }) {
    const searchTerm = searchParams.search || "";
    const productos = await getProductos(searchTerm);

    return (
        <div className="container"> 
            <h1 className="titulo">Productos</h1> 
            <table className="table"> 
                <thead>
                    <tr>
                        <th className="table-header">Id</th> 
                        <th className="table-header">Nombre producto</th>
                        <th className="table-header">Precio</th>
                        <th className="table-header">Cantidad</th>
                        <th className="table-header">Editar / Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {productos.map((producto, i) => (
                        <tr key={i}>
                            <td className="table-data">{i + 1}</td>
                            <td className="table-data">{producto.nombre}</td>
                            <td className="table-data">${producto.precio}</td>
                            <td className="table-data">{producto.cantidad}</td>
                            <td className="table-data">
                                <EditarProducto id={producto.id} /> / <BorrarProducto id={producto.id} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Link href="/productos/nuevo" className="link">Agregar Producto</Link>
        </div>
    );
}