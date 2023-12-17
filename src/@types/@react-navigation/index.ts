import { StackScreenProps } from "@react-navigation/stack";

export type RootStackParamList = {
  DashboardPage: undefined;
  SplashScreenPage: undefined;
  DetailPage: { gifId: string };
};

export type ScreenProps<screenName extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, screenName>;
