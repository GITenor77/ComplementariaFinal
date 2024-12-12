"use client";

export default function Cargando() {
    const containerStyle = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#0A192F",
        fontFamily: "Arial, Helvetica, sans-serif"
    };

    const spinnerStyle = {
        width: "70px",
        height: "70px",
        border: "6px solid transparent",
        borderTop: "6px solid #64FFDA",
        borderRight: "6px solid #64FFDA",
        borderRadius: "50%",
        animation: "pulse-spinner 1.5s cubic-bezier(0.68, -0.55, 0.27, 1.55) infinite",
        marginBottom: "30px"
    };

    const textStyle = {
        fontSize: "2em",
        color: "#64FFDA",
        fontWeight: "bold",
        letterSpacing: "2px"
    };

    return (
        <div style={containerStyle}>
            <div style={spinnerStyle}></div>
            <h1 style={textStyle}>Cargando...</h1>

            <style jsx>{`
                @keyframes pulse-spinner {
                    0% { 
                        transform: rotate(0deg) scale(0.8);
                    }
                    50% { 
                        transform: rotate(180deg) scale(1.2);
                    }
                    100% { 
                        transform: rotate(360deg) scale(0.8);
                    }
                }
            `}</style>
        </div>
    );
}