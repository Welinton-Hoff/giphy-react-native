declare namespace ReactNavigation {
  export interface RootParamList extends RootStackParamList {
    DashboardPage: NavigationStackProp<string>;
    SplashScreenPage: NavigationStackProp<string>;
    DetailPage: {
      gifId: string;
    };
  }
}
