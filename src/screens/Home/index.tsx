import { View, Text } from "react-native";
import { HomeHeader } from "../../components/HomeHeader";
import {
  CardPorcent,
  CardPorcentDescription,
  CardPorcentIconAbsolute,
  CardPorcentTitle,
  Container,
} from "./styles";
import { HomeInfo } from "../../components/HomeInfo";

export function Home() {
  return (
    <Container>
      <HomeHeader />

      <HomeInfo porcent={60} />

      <CardPorcent>
        <CardPorcentIconAbsolute />
        <CardPorcentTitle>90,86%</CardPorcentTitle>
        <CardPorcentDescription>
          das refeições dentro da dieta
        </CardPorcentDescription>
      </CardPorcent>
    </Container>
  );
}
