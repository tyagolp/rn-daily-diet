export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      statistics: undefined;
      mealCreate: undefined;
      mealEdit: { id: string };
      feedback: { goal: boolean };
      // statistics: { id: string };
      // history: undefined;
      // finish: { total: string, points: string };
    }
  }
}
