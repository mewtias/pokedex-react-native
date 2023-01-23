import { useState, useEffect, Text } from 'react';
import { ScrollView, FlatList } from 'react-native'
import axios from 'axios';
import PokemonCard from '../PokemonCard';

const PokemonList = () => {
    const [pokemones, setPokemones] = useState({})

    useEffect(() => {
        const getDataUsingAsyncAwaitGetCall = async () => {
            try {
                const response = await axios.get(
                    'https://pokeapi.co/api/v2/pokedex/2/',
                );
                const { pokemon_entries } = await response.data
                setPokemones(Object.values(pokemon_entries))
            } catch (error) {
                // handle error
                alert(error.message);
            }
        };
        getDataUsingAsyncAwaitGetCall()
        
    }, [])

    return (
        <ScrollView 
            className="grid grid-cols-3">
            {pokemones.length && 
                pokemones.map(p => (
                    <PokemonCard 
                        key={p.entry_number}
                        idPkmn={p.entry_number}
                        namePkmn={p.pokemon_species.name}
                    />
                ))
            }
        </ScrollView>
    )
}

export default PokemonList