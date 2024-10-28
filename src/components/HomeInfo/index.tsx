import React from "react";
import {
  ContainerNegative,
  ContainerPositive,
  Description,
  IconAbsolute,
  Title,
} from "./styles";

type Props = {
  porcent: number;
};
export function HomeInfo({ porcent }: Props) {
  if (porcent < 50)
    return (
      <ContainerNegative>
        <Title>{porcent}%</Title>
        <Description>das refeições dentro da dieta</Description>
        <IconAbsolute />
      </ContainerNegative>
    );

  return (
    <ContainerPositive>
      <Title>{porcent}%</Title>
      <Description>das refeições dentro da dieta</Description>
      <IconAbsolute />
    </ContainerPositive>
  );
}
