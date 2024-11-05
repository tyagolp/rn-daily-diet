import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";
import { TitleXS } from "../../components/TitleXS";
import { TitleM } from "../../components/TitleM";
import { BodyS } from "../../components/BodyS";

type SafeAreaViewProps = {
  negativeColor?: boolean;
};

export const Container = styled(SafeAreaView)<SafeAreaViewProps>`
  flex: 1;
  background-color: ${(x) =>
    !x.negativeColor ? x.theme.COLORS.GREEN_LIGHT : x.theme.COLORS.RED_LIGHT};
`;

export const ContainerDetails = styled.View`
  flex: 1;
  background-color: ${(x) => x.theme.COLORS.WHITE};
  border-radius: 20px 20px 0 0;
  padding: 25px;
`;

export const Title = styled(TitleXS)`
  color: ${(x) => x.theme.COLORS.GRAY1};
  text-align: center;
  margin-bottom: 25px;
`;

export const CardContent = styled.View`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const CardRow = styled.View`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

type CardProps = {
  collumn?: boolean;
  color: "gray" | "green" | "red";
};

export const Card = styled.View<CardProps>`
  padding: 20px 16px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  background-color: ${(x) => {
    switch (x.color) {
      case "gray":
        return x.theme.COLORS.GRAY6;
      case "green":
        return x.theme.COLORS.GREEN_LIGHT;
      case "red":
        return x.theme.COLORS.RED_LIGHT;
      default:
        return x.theme.COLORS.GRAY6;
    }
  }};
`;

export const CardColumn = styled(Card)`
  flex: 1;
`;

export const CardDescription = styled(BodyS)`
  text-align: center;
`;
