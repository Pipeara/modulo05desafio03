import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Pokemones() {
  const [selectedPokemon, setSelectedPokemon] = useState("");
  const [pokemonList, setPokemonList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showLoadingMessage, setShowLoadingMessage] = useState(false);
  const navigate = useNavigate();

  const handleSelectChange = (e) => {
    setSelectedPokemon(e.target.value);
    setShowLoadingMessage(true);
  }

  const handleViewDetail = (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (selectedPokemon) {
      navigate(`/pokemones/${selectedPokemon}`);
    }
  }

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=50`)
      .then(response => response.json())
      .then(data => {
        setPokemonList(data.results);
      })
      .catch(error => {
        console.error("Error fetching Pokemon data:", error);
      });
  }, []);

  return (
    <form className="mt-4 text-center">
      <h4 className="mb-4">Selecciona un Pokémon</h4>
      <div className="form-group">
        <select className="form-select-lg" onChange={handleSelectChange} value={selectedPokemon}>
          <option value="">Pokémon</option>
          {pokemonList.map(pokemon => (
            <option key={pokemon.name} value={pokemon.name}>
              {pokemon.name}
            </option>
          ))}
        </select>
      </div>
      {showLoadingMessage && (
        <div className="d-flex justify-content-center align-content-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Cargando...</span>
          </div>
          <p>Cargando Pokémon...</p>
        </div>
      )}
      <button type="submit" className="btn btn-primary mt-4" onClick={handleViewDetail}>
        Ver Detalle porfa
      </button>
    </form>
  );
}
