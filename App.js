import { StatusBar } from 'expo-status-bar';
import { Text, View, FlatList  } from 'react-native';
import AppLoading from 'expo-app-loading';
import PokemonList from './components/PokemonList';
import {
  useFonts,
  Poppins_800ExtraBold,
  Poppins_400Regular
} from '@expo-google-fonts/poppins'

export default function App() {
  

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
        <PokemonList />
        <StatusBar style="auto" />
      </View>
    );
  }
}