import PropTypes from "prop-types";


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
PokémonCard.propTypes = {
    pokemon: PropTypes.shape({
        name: PropTypes.string.isRequired,
        imgSrc: PropTypes.string.isRequired,
    })
}


export default PokémonCard;

