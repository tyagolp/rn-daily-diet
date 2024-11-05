import React from "react";
import { Container, IconAbsolute } from "./styles";
import { TitleG } from "../TitleG";
import { BodyS } from "../BodyS";
import { PressableProps } from "react-native";

type Props = PressableProps & {
  porcent: number;
};

export function HomeInfo({ porcent, ...rest }: Props) {
  return (
    <Container positiveColor={porcent >= 50} {...rest}>
      <TitleG>{`${porcent.toFixed(2)}%`}</TitleG>
      <BodyS>das refeições dentro da dieta</BodyS>
      <IconAbsolute />
    </Container>
  );
}
