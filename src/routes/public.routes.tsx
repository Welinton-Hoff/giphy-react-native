import { createStackNavigator } from "@react-navigation/stack";

import { DetailPage } from "../scenes/DetailPage";
import { DashboardPage } from "../scenes/DashboardPage";
import { SplashScreenPage } from "../scenes/SplashScreenPage";
import { RootStackParamList } from "../@types/@react-navigation";

const Stack = createStackNavigator<RootStackParamList>();

export function PublicRoutes() {
  const screenOptions = { headerShown: false };

  return (
    <Stack.Navigator
      screenOptions={screenOptions}
      initialRouteName="SplashScreenPage"
    >
      <Stack.Screen name="DetailPage" component={DetailPage} />
      <Stack.Screen name="DashboardPage" component={DashboardPage} />
      <Stack.Screen name="SplashScreenPage" component={SplashScreenPage} />
    </Stack.Navigator>
  );
}
