import React from "react";
import { Container, Time, Description, Divider } from "./styles";
import { Circle } from "lucide-react-native";
import { theme } from "../../theme";
import { MealType } from "@storage/storageMeal";
import { formatTime } from "../../util/date";
import { useNavigation } from "@react-navigation/native";

type Props = {
  data: MealType;
};
export function ListItem({ data }: Props) {
  const { navigate } = useNavigation();

  function handleOpenMeal() {
    navigate("mealEdit", {
      id: data.id,
    });
  }

  return (
    <Container onPress={handleOpenMeal}>
      <Time>{formatTime(data.date)}</Time>
      <Divider />
      <Description numberOfLines={1}>{data.title}</Description>
      <Circle
        fill={data.isOnDiet ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID}
      />
    </Container>
  );
}
