import './NavBar.css'

function NavBar({ handleNext, handlePrevious, pokemonIndex, totalPokemon }) {


    return (
        <nav>
            {pokemonIndex < totalPokemon - 1 && <button onClick={handleNext}>Next</button>}
            {pokemonIndex > 0 && <button onClick={handlePrevious}>Previous</button>}
        </nav>

    )
}


export default NavBar;