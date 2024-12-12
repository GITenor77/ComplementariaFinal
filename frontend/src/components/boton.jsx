"use client";

const Boton = () => {
    const handleNewNotice = () => {
        console.log("Nueva noticia");
    };

    return (
        <button onClick={handleNewNotice}>
            Nueva noticia
        </button>
    );
};

export default Boton;