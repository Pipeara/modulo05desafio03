import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./views/Home";
import Pokemones from "./views/Pokemones";
import PokemonDetails from "./views/PokemonesDetails";
import "./app.css"
function App() {
  return (

    <BrowserRouter>
      <NavBar/>
      <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemones" element={<Pokemones />} />
        <Route path="/pokemones/:name" element={<PokemonDetails />} />
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;