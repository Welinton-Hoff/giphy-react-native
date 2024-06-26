declare namespace ReactNavigation {
  export interface RootParamList extends RootStackParamList {
    DetailPage: { gifId: string };
    DashboardPage: NavigationStackProp<string>;
    SplashScreenPage: NavigationStackProp<string>;
  }
}
