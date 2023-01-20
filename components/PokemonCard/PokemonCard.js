import { View, Text, Image } from 'react-native'

const PokemonCard = () => {
    return (
        <View className="border-green-500 border rounded-lg w-28 bg-white">
            <Text className="text-green-500 text-right pr-1"
                style={{fontFamily: 'Poppins_400Regular', fontSize: 8}}>
                #001
            </Text>
            <Image className="mx-auto" style={{ width: 72, height: 72}}
                source={{
                    uri: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png'
                }}
            />
            <View className="bg-green-500 rounded-b-md">
                <Text className="text-white text-xs p-2 text-center rounded-"
                    style={{
                        fontFamily: 'Poppins_400Regular'
                    }}
                >
                    Bulbasaur
                </Text>

            </View>
        </View>
    )
}

export default PokemonCard