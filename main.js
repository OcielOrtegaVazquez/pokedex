/* Definimos las variables */
const aButton = document.getElementById('a-button');
const bButton = document.getElementById('b-button');
const searchInput = document.getElementById('buscarId');
const datos = document.getElementById('datosPokemon');
const pokemonImage = document.getElementById('main-screen');
const pokemonName = document.getElementById('name-screen');
const pokemonType = document.getElementById('type-screen');
const pokemonId = document.getElementById('id-screen');
const pokemonHeight = document.getElementById('height-screen');
const pokemonWeight = document.getElementById('weight-screen');
const pokemonEvolution = document.getElementById('evolution-screen');
const pokemonMov1 = document.getElementById('mov-1-screen');
const pokemonMov2 = document.getElementById('mov-2-screen')

/* Funcion para la API */

const getPokemonData = (pokemon) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        .then((response) => response.json())
        .then((data) => {
            let id = ('00' + data.id).slice(-3);
            pokemonImage.style.backgroundImage = `url('https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png')`;
            pokemonName.innerHTML = data.name;
            pokemonType.innerHTML = `Tipo: ${data.types[0].type.name}`;
            pokemonId.innerHTML = `Id: #${data.id}`;
            pokemonHeight.innerHTML = `Altura: ${data.height * 10}cms`;
            pokemonWeight.innerHTML = `Peso: ${data.weight / 10}kg`;
            pokemonEvolution.innerHTML = `Pts. Exp: ${data.base_experience}`;
            pokemonMov1.innerHTML = `Mov. 1: ${data.abilities[0].ability.name}`
            pokemonMov2.innerHTML = `Mov. 2: ${data.abilities[1].ability.name}`
            searchInput.value = '';
        });
}

searchInput.addEventListener(
    'keydown',
    (event) => event.key === 'Enter' && aButton.click()
);
aButton.addEventListener('click', () => getPokemonData(searchInput.value));
bButton.addEventListener('click', () => searchInput.remove);