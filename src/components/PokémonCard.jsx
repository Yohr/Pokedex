

function PokémonCard({ pokemon }) {
    return (
        <div>
            <h1>{pokemon.name}</h1>
            <figure>
                {pokemon.imgSrc ? (
                    <img src={pokemon.imgSrc} alt={pokemon.name} />
                ) : (
                    <p>???</p>
                )}
                <figcaption>{pokemon.name}</figcaption>
            </figure>
        </div>

    );
}


export default PokémonCard;

{/* <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" alt="Bulbasaur" /> */ }

// 