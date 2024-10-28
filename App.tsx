import { StatusBar, Text } from "react-native";
import { Routes } from "./src/routes";
import { ThemeProvider } from "styled-components/native";
import {
  useFonts,
  Nunito_400Regular,
  Nunito_700Bold,
} from "@expo-google-fonts/nunito";
import { theme } from "./src/theme";

export default function App() {
  const [fontsLoaded] = useFonts({ Nunito_400Regular, Nunito_700Bold });

  if (!fontsLoaded) {
    return <Text>Text</Text>; // Load enquanto carrega a font
  }

  return (
    <ThemeProvider theme={theme}>
      <>
        <StatusBar
          barStyle="dark-content"
          backgroundColor="transparent"
          translucent
        />
        <Routes />
      </>
    </ThemeProvider>
  );
}
