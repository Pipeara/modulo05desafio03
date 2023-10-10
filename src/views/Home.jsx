
import React from "react";
import descargar from "../assets/descargar.png"; // Asegúrate de que la ruta sea correcta



export default function Home() {

  return (
    <>
      <div className="row g-0 text-center mt-5">
      <h3>Bienvenido .... Pokemones</h3>
        <div className=" col-12 col-md-12">
          <img src={descargar} className="img-fluid mx-auto d-block" alt="Pikachu" />
        </div>
      </div>
    </>
  );
}