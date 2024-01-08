const pokeCardsContainer = document.getElementById("poke-container");
const pokemon_count = 150;
const load = document.getElementById("load")

const colors = {
  fire: "#FDDFDF",
  grass: "#DEFDE0",
  electric: "#FCF7DE",
  water: "#DEF3FD",
  ground: "#f4e7da",
  rock: "#d5d5d4",
  fairy: "#fceaff",
  poison: "#98d7a5",
  bug: "#f8d5a3",
  dragon: "#97b3e6",
  psychic: "#eaeda1",
  flying: "#F5F5F5",
  fighting: "#E6E0D4",
  normal: "#F5F5F5",
};

async function getData(id) {
    let data = await fetch(`https://pokeapi.co/api/v2/pokemon/{id}`); //Aqui estoy haciendo una llamada a la APi

    let response = await data.json(); //Espero respuesta en formato json
    let imagePokemon = response.sprites.front_default;
    let idPokemon = response.id;
    let namePokemon = response.name;
    let typePokemon = response.types[0].type.name;

    return { imagePokemon, idPokemon, namePokemon, typePokemon };
}

//Funcion para tener el Background

function getBackgroundPOke(type) {
    return type in colors ? colors[type] : "No exite el color"

}

//Creo el pokemon

function createPokemon(imagePokemon, idPokemon, namePokemon, typePokemon) {
    let background = getBackgroundPOke(typePokemon);
    let formattedNumber = String(idPokemon).padStart(3, "0");

    const contentCard = `
    <div class="pokemon style="background-color: ${background};">
        <div class ="img-container">
            <img src="${imagePokemon}" alt=${namePokemon};
        </div>
        <div class = "info">
            <span class = "number">${formattedNumber}</span>
            <h1 class="name">${namePokemon}</h1>
            <small class="type">Type : <span>${typePokemon}</span></small>
        </div>
    </div>
    `;

    pokeCardsContainer.innerHTML += contentCard

}

async function fetchAndCreatePokemon() {
    const promises = [];
    for (let i = 1; i <= pokemon_count; i++){
        promises.push(getData(i));
    }
    const pokemonDataArray = await Promise.all(promises);
    pokemonDataArray.sort((a, b) => a.idPokemon - b.idPokemon);
    pokemonDataArray.forEach(({ namePokemon, imagePokemon, idPokemon, typePokemon }) => {
        createPokemon(namePokemon, imagePokemon, idPokemon, typePokemon);
    });
    load.style.display="none"
}
fetchAndCreatePokemon();   


