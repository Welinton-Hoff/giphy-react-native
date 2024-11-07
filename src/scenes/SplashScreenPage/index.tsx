import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

import { Content, Page, SplashIcon } from "./styles";
import { StackRoutes } from "src/@types/@react-navigation";

const SPLASH_ANIMATION_TIME = 7000;

export function SplashScreenPage() {
  const { reset } = useNavigation();

  function onDashboardPageNavigate(): void {
    reset({ index: 0, routes: [{ name: StackRoutes.DashboardPage }] });
  }

  useEffect(() => {
    const timer = setTimeout(onDashboardPageNavigate, SPLASH_ANIMATION_TIME);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Page disableHeader hiddenStatusBar>
      <Content>
        <SplashIcon source={require("../../assets/gifs/giphy.gif")} />
      </Content>
    </Page>
  );
}
