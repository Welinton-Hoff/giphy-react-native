import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

import { Content, Page, SplashIcon } from "./styles";

export function SplashScreenPage() {
  const navigation = useNavigation();

  function onDashboardPageNavigate(): void {
    navigation.reset({ index: 0, routes: [{ name: "DashboardPage" }] });
  }

  useEffect(() => {
    setTimeout(() => {
      onDashboardPageNavigate();
    }, 7000);
  }, []);

  return (
    <Page disableHeader hiddenStatusBar>
      <Content>
        <SplashIcon source={require("../../assets/gifs/giphy.gif")} />
      </Content>
    </Page>
  );
}
