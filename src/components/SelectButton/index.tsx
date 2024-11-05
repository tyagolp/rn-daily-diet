import React from "react";
import {
  Container,
  ContainerSelectedGreen,
  ContainerSelectedRed,
  Dot,
  DotRed,
} from "./styles";
import { TouchableOpacityProps } from "react-native";
import { TitleXS } from "../TitleXS";

type Props = TouchableOpacityProps & {
  selected?: boolean;
  color?: "green" | "red";
};

export function SelectButton({
  selected = false,
  color = "green",
  ...rest
}: Props) {
  if (selected) {
    if (color === "green") {
      return (
        <ContainerSelectedGreen {...rest}>
          <Dot />
          <TitleXS>Sim</TitleXS>
        </ContainerSelectedGreen>
      );
    }

    return (
      <ContainerSelectedRed {...rest}>
        <DotRed />
        <TitleXS>Não</TitleXS>
      </ContainerSelectedRed>
    );
  }

  if (color === "green") {
    return (
      <Container {...rest}>
        <Dot />
        <TitleXS>Sim</TitleXS>
      </Container>
    );
  }

  return (
    <Container {...rest}>
      <DotRed />
      <TitleXS>Não</TitleXS>
    </Container>
  );
}
