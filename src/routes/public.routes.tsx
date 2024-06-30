import { createStackNavigator } from "@react-navigation/stack";

import { DetailPage } from "src/scenes/DetailPage";
import { DashboardPage } from "src/scenes/DashboardPage";
import { SplashScreenPage } from "src/scenes/SplashScreenPage";

import {
  RootStackParamList,
  StackRoutes as SR,
} from "../@types/@react-navigation";

const Stack = createStackNavigator<RootStackParamList>();

export function PublicRoutes() {
  const screenOptions = { headerShown: false };

  return (
    <Stack.Navigator
      screenOptions={screenOptions}
      initialRouteName={SR.SplashScreenPage}
    >
      <Stack.Screen name={SR.DetailPage} component={DetailPage} />
      <Stack.Screen name={SR.DashboardPage} component={DashboardPage} />
      <Stack.Screen name={SR.SplashScreenPage} component={SplashScreenPage} />
    </Stack.Navigator>
  );
}
