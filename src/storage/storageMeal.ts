import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "@storage/storageConfig";
import { formatDateDots } from "../util/date";
import uuid from "react-native-uuid";
import dayjs from "dayjs";

export type MealType = {
  id: string;
  title: string;
  date: Date;
  description: string;
  isOnDiet: boolean;
};

type MealCreateProps = Omit<MealType, "id">;

export interface SectionMealProps {
  title: string;
  data: MealType[];
}

export async function mealsGetAll() {
  try {
    const storageData = await AsyncStorage.getItem(MEAL_COLLECTION);
    const data: MealType[] = storageData ? JSON.parse(storageData) : [];

    const sortedItems = data.sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
    );

    return sortedItems;
  } catch (error) {
    throw error;
  }
}

export async function mealsGetByID(id: string) {
  try {
    const storageData = await AsyncStorage.getItem(MEAL_COLLECTION);
    const data: MealType[] = storageData ? JSON.parse(storageData) : [];

    const response = data.find((x) => x.id === id);
    return response;
  } catch (error) {
    throw error;
  }
}

export async function mealCreate(item: MealCreateProps) {
  try {
    const storageData = await mealsGetAll();

    const newMeal = {
      ...item,
      id: uuid.v4().toString(),
    };
    await AsyncStorage.setItem(
      MEAL_COLLECTION,
      JSON.stringify([...storageData, newMeal])
    );
  } catch (error) {
    throw error;
  }
}
export async function mealDelete(id: string) {
  try {
    const storageData = await mealsGetAll();

    await AsyncStorage.setItem(
      MEAL_COLLECTION,
      JSON.stringify(storageData.filter((meal) => meal.id !== id))
    );
  } catch (error) {
    throw error;
  }
}
export async function MealUpdate(id: string, updatedMeal: MealCreateProps) {
  try {
    const storageData = await mealsGetAll();
    const meal = storageData.find((item) => item.id === id);
    if (meal) {
      meal.date = updatedMeal.date;
      meal.title = updatedMeal.title;
      meal.description = updatedMeal.description;
      meal.isOnDiet = updatedMeal.isOnDiet;
    }
    await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(storageData));
  } catch (error) {
    throw error;
  }
}
