const pokemonID = document.getElementById('pokemon-id');
const pokemonName = document.getElementById('pokemon-name');
const spriteContainer = document.getElementById('sprite-container');
const types = document.getElementById('types');
const height = document.getElementById('height');
const weight = document.getElementById('weight');
const hp = document.getElementById('hp');
const attack = document.getElementById('attack');
const defense = document.getElementById('defense');
const specialAttack = document.getElementById('special-attack');
const specialDefense = document.getElementById('special-defense');
const speed = document.getElementById('speed');
const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');

const pokemon = async () => {
    try{
        const pokemonNameOrId = searchInput.value.toLowerCase();
        // Fetching the data from the API
        const response = await fetch(
            `https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${pokemonNameOrId}`
        );

        if (!response.ok) {
            throw new Error('Pokémon not found');
        }
    
        const data = await response.json();
        // Displaying the data
        pokemonID.textContent = `#${data.id}`;
        pokemonName.textContent = `${data.name.toUpperCase()}`;
        spriteContainer.innerHTML = `<img id="sprite"  src="${data.sprites.front_default}" alt="${data.name}"/>`;
        types.innerHTML = data.types.map((type) => `<span> ${type.type.name.toUpperCase()}</span>`).join(', ');
        height.textContent = `Height: ${data.height}`;
        weight.textContent = `Weight: ${data.weight}`;
        
        hp.textContent = `${data.stats[0].base_stat}`;
        attack.textContent = `${data.stats[1].base_stat}`;
        defense.textContent = `${data.stats[2].base_stat}`;
        specialAttack.textContent = `${data.stats[3].base_stat}`;
        specialDefense.textContent = `${data.stats[4].base_stat}`;
        speed.textContent = `${data.stats[5].base_stat}`;

    }catch (error) {
        reset();
        alert('Pokemon not found');

    }
};



const reset = () => {
    pokemonID.textContent = '';
    pokemonName.textContent = '';
    spriteContainer.innerHTML = '';
    types.innerHTML = '';
    height.textContent = '';
    weight.textContent = '';
    hp.textContent = '';
    attack.textContent = '';
    defense.textContent = '';
    specialAttack.textContent = '';
    specialDefense.textContent = '';
    speed.textContent = '';
};

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    pokemon();
    searchInput.value = '';
});


