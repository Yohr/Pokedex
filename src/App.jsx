
import { useEffect, useState } from "react";
import './App.css'
import PokémonCard from './components/PokémonCard'
import NavBar from './components/NavBar';
import ModalComponent from './components/ModalComponent';
import ModalPokemon from "./components/ModalPokemon";

const pokemonList = [

  {

    name: "Méga-Ectoplasma",

    imgSrc:

      "https://www.pokepedia.fr/images/thumb/9/9e/M%C3%A9ga-Ectoplasma-XY.png/250px-M%C3%A9ga-Ectoplasma-XY.png",

    message: "Eeeectooo...eeeecttoooo....Ecttooooopllaaaasmaaaa!!!!"
  },
  {

    name: "Ossatueur d'Alola",

    imgSrc:

      "https://www.pokepedia.fr/images/thumb/3/33/Ossatueur_d%27Alola-SL.png/250px-Ossatueur_d%27Alola-SL.png",

    message: "Ossatuuuuuueur"
  },

  {

    name: "Darkrai",

    imgSrc:

      "https://www.pokepedia.fr/images/thumb/1/17/Darkrai-DEPS.png/250px-Darkrai-DEPS.png",
    message: "Dark...rai"
  },


  {

    name: " Mega Alakazam",

    imgSrc: "https://www.pokepedia.fr/images/thumb/9/96/M%C3%A9ga-Alakazam-XY.png/250px-M%C3%A9ga-Alakazam-XY.png",
    message: "Alakazam!"

  },

];
function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [showPokemonModal, setShowPokemonModal] = useState(true);
  const [pokemonMessage, setPokemonMessage] = useState("");

  const handlePokemonSelect = (index) => {
    setPokemonIndex(index);
    setPokemonMessage(pokemonList[index].message);
    setShowPokemonModal(true);
  }

  const closeModal = () => {
    setShowModal(false);
  }

  useEffect(() => {
    setShowModal(true);
  }, []);

  const closePokemonModal = () => {
    setShowPokemonModal(false);
  }

  return (
    <>
      <NavBar
        pokemonList={pokemonList}
        selectPokemon={handlePokemonSelect} />
      <div>
        <PokémonCard pokemon={pokemonList[pokemonIndex]} />
      </div >
      <ModalComponent showModal={showModal} closeModal={closeModal} />
      <ModalPokemon showModal={showPokemonModal} closeModal={closePokemonModal} message={pokemonMessage} />
    </>

  )
}

export default App
