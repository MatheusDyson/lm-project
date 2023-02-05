function pokedex (name, type, generation) {
    const pkmn = {
        pokemonName: name,
        pokemonType: type,
        pokemonGeneration: generation
    }
    return pkmn
}

const pkmn1 = pokedex('Bulbasaur', 'Grama', 'Geração 1')
const pkmn2 = pokedex('Charmander', 'Fogo', 'Geração 1')
const pkmn3 = pokedex('Squirtle', 'Água', 'Geração 1')
const pkmn4 = pokedex('Chikorita', 'Grama', 'Geração 2')
const pkmn5 = pokedex('Cyndaquil', 'Fogo', 'Geração 2')
const pkmn6 = pokedex('Totodile', 'Água', 'Geração 2')
const pkmn7 = pokedex('Treecko', 'Grama', 'Geração 3')
const pkmn8 = pokedex('Torchic', 'Fogo', 'Geração 3')
const pkmn9 = pokedex('Mudkip', 'Água', 'Geração 3')


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

function comparePokemon() {
    const userPokemon = document.getElementById("userPokemon").value

    if (userPokemon.toLowerCase() === correctName.toLowerCase()) {
        document.getElementById("answer").innerHTML = "Boa! Era o " + correctName + "."
    } else {
        document.getElementById("userPokemon").value = ""
        document.getElementById("tipType").innerHTML = "Dica 1: O pokémon é do tipo " + correctType.toLowerCase() + "."
    }
}