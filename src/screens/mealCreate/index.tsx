import React, { useState } from "react";
import {
  BackButton,
  Container,
  Footer,
  FormControl,
  Header,
  Section,
  ViewCollumn,
} from "./styles";
import { ArrowLeft } from "lucide-react-native";
import { theme } from "../../theme";
import { useNavigation } from "@react-navigation/native";
import { Input } from "../../components/Input";
import { TitleXS } from "../../components/TitleXS";
import { TextArea } from "../../components/TextArea";
import { SelectButton } from "../../components/SelectButton";
import { ButtonInputDate } from "../../components/ButtonInputDate";
import { Button } from "../../components/Button";
import { TitleS } from "../../components/TitleS";
import { Text } from "react-native";
import { mealCreate } from "@storage/storageMeal";

export function MealCreate() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(new Date());
  const [isOnDiet, setIsOnDiet] = useState<boolean | null>(null);
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  const { navigate } = useNavigation();

  async function handleSubmit() {
    await mealCreate({
      date,
      description,
      isOnDiet: !!isOnDiet,
      title,
    });

    navigate("feedback", {
      goal: !!isOnDiet,
    });
  }

  return (
    <Container>
      <Header>
        <BackButton onPress={handleGoBack}>
          <ArrowLeft color={theme.COLORS.GRAY1} />
        </BackButton>
        <TitleS>Nova refeição</TitleS>
        <Text></Text>
      </Header>
      <Section>
        <FormControl>
          <TitleXS>Nome</TitleXS>
          <Input onChangeText={setTitle} value={title} />
        </FormControl>
        <FormControl>
          <TitleXS>Descrição</TitleXS>
          <TextArea onChangeText={setDescription} value={description} />
        </FormControl>

        <ViewCollumn>
          <FormControl>
            <TitleXS>Data</TitleXS>
            <ButtonInputDate changeDate={setDate} date={date} type="date" />
          </FormControl>
          <FormControl>
            <TitleXS>Hora</TitleXS>
            <ButtonInputDate changeDate={setDate} date={date} type="time" />
          </FormControl>
        </ViewCollumn>

        <FormControl>
          <TitleXS>Entá dentro da dieta?</TitleXS>
          <ViewCollumn>
            <SelectButton
              onPress={() => setIsOnDiet(true)}
              selected={!!isOnDiet}
            />
            <SelectButton
              onPress={() => setIsOnDiet(false)}
              selected={isOnDiet === false}
              color="red"
            />
          </ViewCollumn>
        </FormControl>
      </Section>
      <Footer>
        <Button title="Salvar" onPress={handleSubmit}></Button>
      </Footer>
    </Container>
  );
}
