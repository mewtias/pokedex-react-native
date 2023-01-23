import { View, Text, Image } from 'react-native'

const PokemonCard = ({idPkmn, namePkmn}) => {
    return (
        <View 
            className="border-green-500 border rounded-lg w-28 bg-white">
            <Text 
                className="text-green-500 text-right pr-1"
                style={{fontFamily: 'Poppins_400Regular', fontSize: 8}}>
                {idPkmn}
            </Text>
            <Image 
                className="mx-auto" 
                style={{ width: 72, height: 72}}
                source={{
                    uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${idPkmn}.png`
                }}
            />
            <View 
                className="bg-green-500 rounded-b-md">
                <Text 
                    className="text-white text-xs p-2 text-center capitalize"
                    style={{
                        fontFamily: 'Poppins_400Regular'
                    }}
                >
                    {namePkmn}
                </Text>

            </View>
        </View>
    )
}

export default PokemonCard