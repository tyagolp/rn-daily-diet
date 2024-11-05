import React, { useMemo, useState } from "react";
import {
  Card,
  CardColumn,
  CardContent,
  CardDescription,
  CardRow,
  Container,
  ContainerDetails,
  Title,
} from "./styles";
import { StatisticHeader } from "../../components/StatisticHeader";
import { TitleM } from "../../components/TitleM";
import { useFocusEffect } from "@react-navigation/native";
import { mealsGetAll, MealType } from "@storage/storageMeal";

export function Statistics() {
  const [meals, setMeals] = useState<MealType[]>([]);

  const count = meals.length;
  const countOnDiet = meals.filter((x) => x.isOnDiet).length;
  const countOutDiet = meals.filter((x) => !x.isOnDiet).length;
  const porcent = (countOnDiet / count) * 100;

  const countBestDietStreak = useMemo(() => {
    let bestStreak = 0; // Melhor sequência encontrada
    let currentStreak = 0; // Sequência atual

    meals.forEach((record) => {
      if (record.isOnDiet) {
        currentStreak++; // Incrementa a sequência atual
        if (currentStreak > bestStreak) {
          bestStreak = currentStreak; // Atualiza a melhor sequência se a atual for maior
        }
      } else {
        currentStreak = 0; // Reseta a sequência atual se não estiver na dieta
      }
    });

    return bestStreak;
  }, [meals]);

  useFocusEffect(() => {
    async function load() {
      const all = await mealsGetAll();

      setMeals(all);
    }
    load();
  });

  return (
    <Container negativeColor={porcent < 50}>
      <StatisticHeader porcent={porcent} />
      <ContainerDetails>
        <Title>Estatísticas gerais</Title>
        <CardContent>
          <Card color="gray">
            <TitleM>{`${countBestDietStreak}`}</TitleM>
            <CardDescription>
              melhor sequência de pratos dentro da dieta
            </CardDescription>
          </Card>

          <Card color="gray">
            <TitleM>{`${count}`}</TitleM>
            <CardDescription>refeições registradas</CardDescription>
          </Card>
          <CardRow>
            <CardColumn color="green">
              <TitleM>{`${countOnDiet}`}</TitleM>
              <CardDescription>refeições dentro da dieta</CardDescription>
            </CardColumn>

            <CardColumn color="red">
              <TitleM>{`${countOutDiet}`}</TitleM>
              <CardDescription>refeições fora da dieta</CardDescription>
            </CardColumn>
          </CardRow>
        </CardContent>
      </ContainerDetails>
    </Container>
  );
}
