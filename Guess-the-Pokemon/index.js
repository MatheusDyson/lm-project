function pokedex (name, type, generation) {
    const pkmn = {
        pokemonName: name,
        pokemonType: type,
        pokemonGeneration: generation
    }
    return pkmn
}

const pkmn1 = pokedex('Bulbasaur', 'Grama', 1)
const pkmn2 = pokedex('Charmander', 'Fogo', 1)
const pkmn3 = pokedex('Squirtle', 'Água', 1)
const pkmn4 = pokedex('Chikorita', 'Grama', 2)
const pkmn5 = pokedex('Cyndaquil', 'Fogo', 2)
const pkmn6 = pokedex('Totodile', 'Água', 2)
const pkmn7 = pokedex('Treecko', 'Grama', 3)
const pkmn8 = pokedex('Torchic', 'Fogo', 3)
const pkmn9 = pokedex('Mudkip', 'Água', 3)


const pokemonRandom = [pkmn1, pkmn2, pkmn3,
    pkmn4, pkmn5, pkmn6,
    pkmn7, pkmn8, pkmn9]
    
document.getElementById("tipType").innerHTML = ''
document.getElementById("tipGeneration").innerHTML = ''

const correctPokemon = pokemonRandom[Math.floor(Math.random() * pokemonRandom.length)]
const correctName = correctPokemon.pokemonName
const correctType = correctPokemon.pokemonType
const correctGeneration = correctPokemon.pokemonGeneration

console.log(correctName)
console.log(correctType)
console.log(correctGeneration)

let attempts = 0
let maxguesses = 3

function comparePokemon() {
    const userPokemon = document.getElementById("userPokemon").value

    if (attempts <= maxguesses) {
        if (userPokemon.toLowerCase() === correctName.toLowerCase()) {
            document.getElementById("answer").innerHTML = "Boa! Era o " + correctName + "."
            document.getElementById("userPokemon").setAttribute("Readonly", "Readonly")
        } else if (userPokemon.toLowerCase() !== correctName.toLowerCase() && attempts === 1) {
            document.getElementById("userPokemon").value = ""
            document.getElementById("tipGeneration").innerHTML = "Dica 2: O pokémon é da " + correctGeneration + "ª geração."
            attempts++
        } else
            document.getElementById("userPokemon").value = ""
            document.getElementById("tipType").innerHTML = "Dica 1: O pokémon é do tipo " + correctType.toLowerCase() + "."
            attempts++
    }
    else {
        document.getElementById("answer").innerHTML = "Fim de jogo!" + "</br>" + "O pokémon escondido era o " + correctName + "."
        document.getElementById("userPokemon").setAttribute("Readonly", "Readonly")
    }
}