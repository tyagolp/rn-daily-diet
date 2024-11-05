import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../screens/Home";
import { Statistics } from "../screens/Statistics";
import { Feedback } from "../screens/Feedback";
import { MealCreate } from "@screens/mealCreate";
import { MealEdit } from "@screens/mealEdit";

const { Navigator, Screen, Group } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="statistics" component={Statistics} />
      <Screen name="mealCreate" component={MealCreate} />
      <Screen name="feedback" component={Feedback} />
      <Screen name="mealEdit" component={MealEdit} />
      {/* <Group>
        <Screen name="exemple" component={Home} />
      </Group> */}
    </Navigator>
  );
}
