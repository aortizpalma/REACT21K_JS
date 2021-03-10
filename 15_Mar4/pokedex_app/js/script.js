(function(){
    window.addEventListener('DOMContentLoaded', executeScript);

    const POKEMON_URL = 'https://pokeapi.co/api/v2/pokemon?limit=100&offset=200';
    let pokemons = [];

    function executeScript() {
        fetch(POKEMON_URL)
            .then(resp => resp.json())
            .then(json => {
                console.log(json);
                pokemons = json.results;
                console.log(pokemons.length);
                console.log(pokemons[0].name, pokemons[0].url);
                pokemons.forEach(pokemon => addPokemonEl(pokemon)); // this could also be simplified to: pokemos.forEach(addPokemonEl)

    //A simplified version of the above code using async/await is:
    /*  async function executeScript() {
        let resp = await fetch(POKEMON_URL);
        let json = await resp.json();
        pokemons = json.results;
        pokemons.forEach(pokemon => addPokemonEl(pokemon)); */

                document.querySelectorAll('.pokemon .name').forEach(el => {
                    el.addEventListener('click', (e) => {
                        // console.log(e.target.getAttribute('data-url'));
                        // getAttribute helps to see the value of the different html tag attributes (mainly custom attributes like data-url) For example, document.getElementById('list').getAttribute('id') -> "list")

                        fetch(e.target.getAttribute('data-url'))
                            .then(resp => resp.json())
                            .then(json => {
                                console.log(json.sprites.front_default);
                                document.getElementById('current-pokemon').setAttribute('src',json.sprites.front_default);

                //A simplified version of the above would be
                /*document.querySelectorAll('.pokemon .name').forEach(el => {
                    el.addEventListener('click', async (e) => {

                        let resp = await fetch(e.target.getAttribute('data-url'));
                        let json = await resp.json();
                        
                            console.log(json.sprites.front_default);
                            document.getElementById('current-pokemon').setAttribute('src',json.sprites.front_default); */

                            })

                    })


                })

            })

    }

    function addPokemonEl(pokemonObj) {
        let newPokemonEl = document.createElement('div');
        newPokemonEl.className = 'pokemon';
        newPokemonEl.innerHTML = `
            <div class="name" data-url="${pokemonObj.url}">
                ${pokemonObj.name}
            </div>

        `;
        document.getElementById("list").appendChild(newPokemonEl);
    }




})();
