import React from "react";
import '../../styles/replikasiv.css';

function Replikasi() {
    return (
        <div className="replikasi-container">
            <h1 className="replikasi-title">Halaman Replikasi</h1>
            <p className="replikasi-paragraph">
                Selamat datang di halaman replikasi! Halaman ini digunakan untuk mendemonstrasikan pembuatan komponen di React.
            </p>
            <div className="replikasi-image-container">
                <img
                    src="https://via.placeholder.com/150"
                    alt="Contoh Gambar"
                    className="replikasi-image"
                />
            </div>
        </div>
    );
};

export default Replikasi;