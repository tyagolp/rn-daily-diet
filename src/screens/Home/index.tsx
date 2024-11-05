import { HomeHeader } from "../../components/HomeHeader";
import { AreaContent, Container, SectionTitle } from "./styles";
import { HomeInfo } from "../../components/HomeInfo";
import { Button } from "../../components/Button";
import { Plus } from "lucide-react-native";
import { SectionList } from "react-native";
import { ListItem } from "../../components/ListItem";
import { useMemo, useState } from "react";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { BodyM } from "../../components/BodyM";
import { mealsGetAll, MealType, SectionMealProps } from "@storage/storageMeal";
import { formatDateDots } from "../../util/date";

export function Home() {
  const [meals, setMeals] = useState<MealType[]>([]);

  const { navigate } = useNavigation();

  function handleDetails() {
    navigate("statistics");
  }
  function handleAdd() {
    navigate("mealCreate");
  }
  const section = useMemo(() => {
    const response = meals.reduce<SectionMealProps[]>((acc, item) => {
      const title = formatDateDots(item.date);

      const indexSection = acc.findIndex((x) => x.title === title);

      if (indexSection === -1) {
        acc.push({
          title,
          data: [item],
        });
      } else {
        acc[indexSection].data.push(item);
      }
      return acc;
    }, []);

    return response;
  }, [meals]);

  const porcent = useMemo(() => {
    const count = meals.length;
    if (!count) return 0;

    const countOnDiet = meals.filter((x) => x.isOnDiet).length;
    const value = (countOnDiet / count) * 100;

    return value;
  }, [meals]);

  useFocusEffect(() => {
    async function load() {
      const all = await mealsGetAll();

      setMeals(all);
    }
    load();
  });

  return (
    <Container>
      <HomeHeader />

      <HomeInfo porcent={porcent} onPress={handleDetails} />
      <AreaContent>
        <BodyM style={{ marginBottom: 4 }}>Refeições</BodyM>
        <Button title="Nova refeição" Icon={Plus} onPress={handleAdd} />

        <SectionList
          style={{ marginTop: 10 }}
          sections={section}
          renderSectionHeader={({ section: { title } }) => (
            <SectionTitle>{title}</SectionTitle>
          )}
          renderItem={({ item }) => <ListItem data={item} />}
          keyExtractor={(x) => x.id}
          showsVerticalScrollIndicator={false}
        />
      </AreaContent>
    </Container>
  );
}
