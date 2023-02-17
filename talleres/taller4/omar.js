let pokemonsList = document.getElementById("pokemons-list");
let links = document.getElementById("links");
let search = document.getElementById("busca");
let dondeimpbusq = document.getElementById("impbusq");
let colorcart = document.getElementById("colorcarta");

function updatePokemons(url) {
  if (url) {

    pokemonsList.innerHTML = "";
    fetch(url)
      .then(res => res.json())
      .then(res => {



        // Obtenemos y recorremos a los primeros 20 pokemones obtenidos
      for (let i of res.results) {
          

          fetch(i.url)
            .then(x => x.json())
            .then(x => {



                  pokemonsList.innerHTML += `
                  <div id="colorcarta" class=" flex flex-wrap justify-center w-40 h-72 ml-0 mr-0 border border-2 border-black mt-2 bg-white">

                    <div class="card flex flex-col justify-center">
                        <img class="" src="${x.sprites.front_default}" alt="">
                        <p class="ml-5">id: #0${x.id}</p>
                        <p class="ml-5">nombre: ${x.name}</p>
                        <div class="flex flex-wrap">
                        <p class="ml-5">tipo: ${x.types[0].type.name}  </p></div>
                        <button class="border boder-3 border-black mt-5" onclick="Descripcion()">Descripcion</button>
                        
                    </div>
                  </div>
                    <br>`;

                    const el = document.querySelector('.colorcarta');
                    switch(x.types[0].type.name){
                      case "grass":
                        el.classList.add('bg-green-600');
                      break;
                      case "fire":
                        el.classList.add('bg-red-600');
                      break;
                      case "bug":
                        el.classList.add('bg-stone-600');
                      break;
                    }

            });

        };
        links.innerHTML = (res.previous) ? `<button class="border border-2 border-black mr-2 bg-white" onclick="updatePokemons('${res.previous}')">Atrás </button> ` : "";
        links.innerHTML += (res.next) ? `<button class="border border-2 border-black bg-white" onclick="updatePokemons('${res.next}')">Siguiente</button>` : "";

      });
  }

}
function Descripcion(){

  const fetchData = async (id) => {
    try {
      console.log(id);
  
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const data = await res.json();
  
      console.log(data);
  
      const pokemon = {
        img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`,
        imgJuego: data.sprites.front_default,
        imgCvg: data.sprites.other.dream_world.front_default,
        nombre: data.name,
        experiencia: data.base_experience,
        hp: data.stats[0].base_stat,
        ataque: data.stats[1].base_stat,
        defensa: data.stats[2].base_stat,
        especial: data.stats[3].base_stat,
        
      };

      pokemonsList.innerHTML = (pokemon);
      
    } catch (error) {
      console.log(error);
    }
  };
  
}
function buscar(url){
  if (url) {

    
    pokemonsList.innerHTML = "";
    fetch(url)
      .then(res => res.json())
      .then(res => {

        // Obtenemos y recorremos a los primeros 20 pokemones obtenidos
        for (let i of res.results) {


          fetch(i.url)
            .then(x => x.json())
            .then(x => {
              pokemonsList.innerHTML += `
                                            <div class="flex flex-wrap justify-center w-48 h-72 ml-0 mr-0 border border-2 border-black mt-2">

                                              <div class="card flex flex-col justify-center">
                                                  <img class="" src="${x.sprites.front_default}" alt="">
                                                  <p class="ml-5">${x}</p>
                                                  
                                              </div>
                                            </div>
                                              <br>`;

                                              console.log(x)
            });
        };
    
      });
  }

}

updatePokemons("https://pokeapi.co/api/v2/pokemon");