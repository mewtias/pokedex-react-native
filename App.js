import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, FlatList  } from 'react-native';
import AppLoading from 'expo-app-loading';
import PokemonCard from './components/PokemonCard';
import axios from 'axios';
import {
  useFonts,
  Poppins_800ExtraBold,
  Poppins_400Regular
} from '@expo-google-fonts/poppins'

export default function App() {
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
    console.log(pokemones)
  }, [])


  // console.log(pokemones.length || 'cargando')

  let [fontsLoaded] = useFonts({
    Poppins_800ExtraBold,
    Poppins_400Regular
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View className="flex-1 items-center justify-center bg-slate-50">
        <Text className="text-2xl" style={{ fontFamily: 'Poppins_800ExtraBold' }}>
          Pokédex
        </Text>
        <PokemonCard/>
        <FlatList
          data={pokemones}
          renderItem={({item}) => <Text>{item.pokemon_species.name}</Text>}
          keyExtractor={item => item.entry_number}
        />
        <StatusBar style="auto" />
      </View>
    );
  }
}