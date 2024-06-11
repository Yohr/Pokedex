function NavBar({ pokemonList, selectPokemon }) {


    return (
        <nav>
            {pokemonList.map((pokemon, index) =>
                <button
                    key={pokemon.name}
                    onClick={() => selectPokemon(index)}
                >{pokemon.name}
                </button>
            )}
        </nav>

    )
}


export default NavBar;