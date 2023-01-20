import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Poppins_800ExtraBold
} from '@expo-google-fonts/poppins'

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_800ExtraBold,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View className="flex-1 items-center justify-center bg-white">
        <Text className="text-2xl" style={{ fontFamily: 'Poppins_800ExtraBold' }}>
          Pokédex
        </Text>
        <StatusBar style="auto" />
      </View>
    );
  }
}