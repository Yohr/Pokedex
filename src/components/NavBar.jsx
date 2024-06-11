function NavBar({ handleNext, handlePrevious }) {

    const handleNext = () => {
        setPokemonindex((prevIndex) => (prevIndex + 1) % pokemonList.length);
    };

    const handlePrevious = () => {
        setPokemonindex((prevIndex) => (prevIndex - 1 + pokemonList.length) % pokemonList.length);
    }
    return (
        <nav>
            {pokemonindex < pokemonList.length - 1 && <button onClick={handleNext}>Next</button>}
            {pokemonindex > 0 && <button onClick={handlePrevious}>Previous</button>}
        </nav>

    )
}


export default NavBar;