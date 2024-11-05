import React from "react";
import { Container, Description, Logo, Title, TitleRed } from "./styles";
import { Button } from "../../components/Button";
import { BodyM } from "../../components/BodyM";

import sourceWoman from "../../assets/woman.png";
import sourceMen from "../../assets/men.png";

import { useNavigation, useRoute } from "@react-navigation/native";

type ParamsProps = {
  goal: boolean;
};

export function Feedback() {
  const route = useRoute();
  const { goal } = route.params as ParamsProps;

  const { navigate } = useNavigation();

  function handleNavigate() {
    navigate("home");
  }

  if (goal)
    return (
      <Container>
        <Title>Continue assim</Title>
        <Description>Você continua dentro da dieta. Muito bem!</Description>
        <Logo source={sourceWoman} />
        <Button
          title="Ir para a página inicial"
          onPress={handleNavigate}
          fullWidth={false}
        />
      </Container>
    );

  return (
    <Container>
      <TitleRed>Que pena</TitleRed>
      <Description>
        Você saiu da dieta dessa vez, mas continue se esforçando e não desista!
      </Description>
      <Logo source={sourceMen} />
      <Button
        title="Ir para a página inicial"
        onPress={handleNavigate}
        fullWidth={false}
      />
    </Container>
  );
}
