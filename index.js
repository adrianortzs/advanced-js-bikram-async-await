//DESARROLLA AQUI TUS SOLUCIONES
//1

async function getRandomPokemon (){

    let pokemon = Math.floor(Math.random()*248);
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    let data = await response.json();
    return data;
    
}

//2 

async function getImageAndName (pokemon){

    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    let data = await response.json();
    let name = data.name;
    let img = data.sprites.front_default;
    return {img, name};
    
}

//3

async function printImageAndName (){

    let pokemon = Math.floor(Math.random()*248);
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`) 
    let data = await response.json();
    let nombre = data.name;
    let img = data.sprites.front_default;

    return `<section>
    <img src="${img}" alt="${nombre}">
    <h1>Nombre del pokemon</h1>
    </section>`
 
}

//4

async function getRandomDogImage (){

    let img = await fetch('https://dog.ceo/api/breeds/image/random')
    let data = await img.json();
    let url = data.message;
    return url;
    
}


//5 

async function getRandomPokemonImage(){

    let pokemon = Math.floor(Math.random()*248);
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    let data = await response.json();
    let url = data.sprites.front_default;
    return url;
    
}

//6

async function printPugVsPikachu (){

    const pikachu = await fetch("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png")

    const allPugs = await fetch ('https://dog.ceo/api/breed/pug/images');
    const pug = allPugs.message[3];

    return `<section>
        <img src="${pikachu}" alt="pikachu">
        <h1>Pikachu</h1>

        <img src="${pug}" alt="pug">
        <h1>Pug</h1>

        </section>`
}

//7

async function getRandomCharacter(){
    let random = Math.floor(Math.random()*826)

    let url = await fetch (`https://rickandmortyapi.com/api/character/${random}`)
    let personaje = await url.json();
    return personaje;
    
}

// 8

async function getRandomCharacterInfo(){
    let random = Math.floor(Math.random()*826)

    //primer  fetch conseguimos personaje
    let url = await fetch (`https://rickandmortyapi.com/api/character/${random}`)
    let personaje = await url.json();
    let name = personaje.name;
    let img = personaje.image;
    let episodes = personaje.episode;
    //segundo fetch entramos al index 0 de episodes que en realidad es un array de una posición con la url
    let epiInfo = await fetch(personaje.episode[0]);
    let epiData = await epiInfo.json();

    let firstEpisode = epiData.episode;
    let dateEpisode = epiData.air_date;

    return {img, name, episodes, firstEpisode, dateEpisode}
}