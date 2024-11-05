import React, { useEffect, useState } from "react";
import {
  BackButton,
  Container,
  Footer,
  FormControl,
  Header,
  ModalContent,
  ModalFooter,
  ModalTitle,
  Overlay,
  Section,
  ViewCollumn,
} from "./styles";
import { ArrowLeft, PencilLine, Trash2 } from "lucide-react-native";
import { theme } from "../../theme";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Input } from "../../components/Input";
import { TitleXS } from "../../components/TitleXS";
import { TextArea } from "../../components/TextArea";
import { SelectButton } from "../../components/SelectButton";
import { ButtonInputDate } from "../../components/ButtonInputDate";
import { Button } from "../../components/Button";
import { TitleS } from "../../components/TitleS";
import { Alert, Modal, Text, TouchableOpacity, View } from "react-native";
import {
  mealCreate,
  mealDelete,
  mealsGetByID,
  MealType,
  MealUpdate,
} from "@storage/storageMeal";
import { ButtonOutline } from "@components/ButtonOutline";

type ParamsProps = {
  id: string;
};

export function MealEdit() {
  const route = useRoute();
  const { id } = route.params as ParamsProps;

  const [meal, setMeal] = useState<null | MealType>(null);
  const [openModal, setOpenModal] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(new Date());
  const [isOnDiet, setIsOnDiet] = useState<boolean | null>(null);
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  const { navigate } = useNavigation();

  async function handleEdit() {
    await MealUpdate(id, {
      date,
      description,
      isOnDiet: !!isOnDiet,
      title,
    });

    navigate("feedback", {
      goal: !!isOnDiet,
    });
  }

  async function handleDelete() {
    await mealDelete(id);

    navigate("home");
  }

  function onCloseModal() {
    setOpenModal(false);
  }

  useEffect(() => {
    async function load() {
      const data = await mealsGetByID(id);
      if (!data) {
        Alert.alert("Refeição não encontrada");
        return;
      }
      setDate(new Date(data.date));
      setDescription(data.description);
      setIsOnDiet(data.isOnDiet);
      setTitle(data.title);
      setMeal(data);
    }
    load();
  }, []);

  return (
    <>
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
          <Button
            Icon={PencilLine}
            title="Editar refeição"
            onPress={handleEdit}
          ></Button>
          <ButtonOutline
            Icon={Trash2}
            title="Excluir refeição"
            onPress={() => setOpenModal(true)}
          />
        </Footer>
      </Container>
      <Modal
        transparent
        visible={openModal}
        animationType="fade"
        onRequestClose={onCloseModal}
      >
        <Overlay>
          <ModalContent>
            <ModalTitle>
              Deseja realmente excluir o registro da refeição?
            </ModalTitle>
            <ModalFooter>
              <ButtonOutline
                fullWidth={false}
                style={{ flex: 1 }}
                onPress={onCloseModal}
                title="Cancelar"
              />
              <Button
                fullWidth={false}
                style={{ flex: 1 }}
                onPress={handleDelete}
                title="Sim, excluir"
              />
            </ModalFooter>
          </ModalContent>
        </Overlay>
      </Modal>
    </>
  );
}
