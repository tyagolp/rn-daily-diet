import React from "react";
import { Button, Container, Description, IconAbsolute, Title } from "./styles";
import { useNavigation } from "@react-navigation/native";

type Props = {
  porcent: number;
};

export function StatisticHeader({ porcent }: Props) {
  const { goBack } = useNavigation();

  return (
    <Container positiveColor={porcent >= 50}>
      <Button onPress={goBack}>
        <IconAbsolute />
      </Button>
      <Title>{`${porcent.toFixed(2)}%`}</Title>
      <Description>das refeições dentro da dieta</Description>
    </Container>
  );
}
