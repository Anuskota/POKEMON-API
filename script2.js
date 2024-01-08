const pokeCardsContainer = document.getElementById("poke-container");
const pokemon_count = 150;
const load = document.getElementById("load");

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

function createPokemonCard(id) {


    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(response => response.json())
        .then(data => {
            const pokeName = data.name;
            const pokeId = data.id;
            const pokeImg = data.sprites.front_default;
            const pokeType = data.type;
            console.log(data)

            const pokeCard = document.createElement('div');
            pokeCard.classList.add('pokemon');

            const pokeColor = colors[pokeType];
            pokeCard.style.backgroundColor = pokeColor;


            pokeCard.innerHTML = `
            <div class="img-container"">
                <img src= "${pokeImg}" alt ="${pokeName}"> 
            </div>   
            <div class="info"
            
            
            
            `
        })

}