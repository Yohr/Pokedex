
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PokémonCard from './components/PokémonCard'
import { useState } from "react";
import NavBar from './components/NavBar';

const pokemonList = [

  {

    name: "Méga-Ectoplasma",

    imgSrc:

      "https://www.pokepedia.fr/images/thumb/9/9e/M%C3%A9ga-Ectoplasma-XY.png/250px-M%C3%A9ga-Ectoplasma-XY.png",

  },
  {

    name: "Ossatueur d'Alola",

    imgSrc:

      "https://www.pokepedia.fr/images/thumb/3/33/Ossatueur_d%27Alola-SL.png/250px-Ossatueur_d%27Alola-SL.png",

  },

  {

    name: "Darkrai",

    imgSrc:

      "https://www.pokepedia.fr/images/thumb/1/17/Darkrai-DEPS.png/250px-Darkrai-DEPS.png",

  },


  {

    name: " Mega Alakazam",

    imgSrc: "https://www.pokepedia.fr/images/thumb/9/96/M%C3%A9ga-Alakazam-XY.png/250px-M%C3%A9ga-Alakazam-XY.png"

  },

];
function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);

  const handleNext = () => {
    setPokemonIndex((prevIndex) => (prevIndex + 1) % pokemonList.length);
  };

  const handlePrevious = () => {
    setPokemonIndex((prevIndex) => (prevIndex - 1 + pokemonList.length) % pokemonList.length);
  }

  const handlePokemonSelect = (index) => {
    setPokemonIndex(index);
  }
  return (
    <>
      <NavBar
        pokemonList={pokemonList}
        selectPokemon={handlePokemonSelect} />
      <div>
        <PokémonCard pokemon={pokemonList[pokemonIndex]} />

      </div >
    </>
  )
}

export default App
