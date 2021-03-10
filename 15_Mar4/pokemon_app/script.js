// (function () {
    document.addEventListener('DOMContentLoaded', executeScript)

   
    async function executeScript() {
        const resp = await fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=100')
            const json = await resp.json();
            const pokemons = json.results;
            // console.log(pokemons);
            pokemons.forEach(addPokemon);
    }

    // The funciton below does the same as the above one without using async/await
    /* function executeScript() {
        fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=50')
            .then(resp => resp.json())
            .then(json => {
                json.results.forEach(addPokemon)
            })
    } */

    function addPokemon(pokemon) {
        let pokemonUrl = pokemon.url;
        let pokemonName = pokemon.name;
        // console.log(`this is pokemonName "${pokemonName}" and pokemonUrl "${pokemonUrl}"`);
        const newElement = document.createElement('div');
        newElement.className = 'pokemon-container';
        newElement.innerHTML = `
            <div class="pokemon-name">
           
            <p> ${pokemon.name}    
            <button id="seeDetails" onclick="fetchPokemonData('${pokemon.url}')"> See image</button>
            </p> </div>

        `;


        document.getElementById('pokemon-list').appendChild(newElement);

    }

         function fetchPokemonData (url) {
            console.log(`This is how url looks: `+url+`. url is ${typeof(url)}`);
            fetch(`${url}`)
                .then(resp => resp.json())
                .then(json => {
                    console.log(json.sprites.front_shiny);
                    let imageUrl = json.sprites.front_shiny;
                    return addPokemonData(imageUrl);
                });
        }

        
        // Commented function to test the one above using async/await
        /*    async function fetchPokemonData(url) {
               // console.log(`This is how url looks: `+url+`. url is ${typeof(url)}`);
               const resp = await fetch(`${url}`)
               const json = await resp.json();
               const imageUrl = json.sprites.front_shiny;
               // json.sprites.forEach(addPokemonData)
               console.log(json.sprites.front_shiny);
               // return addPokemonData(imageUrl);
           }; */
        
    


    function addPokemonData(imageUrl) {
        console.log(`this is imageUrl in the addPokemonData function: ${imageUrl} and it is a ${typeof(imageUrl)}`);

        const pokeImage = document.getElementById('imageTag').setAttribute('src',imageUrl);

        const pokeImgName = document.getAnimations('poke-img-name');
        pokeImgName.innerText = imageUrl;


        // pokeImage.className = "pokemon-image";
        // pokeImage.innerHTML = `
        // <img src="${imageUrl}" alt="from https://pokeapi.co/api/v2/pokemon/1">
        // `;
        // document.getElementById('pokemon-test').appendChild(pokeImage);
        
    }
    
    
// })();