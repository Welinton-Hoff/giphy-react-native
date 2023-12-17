import React from "react";
import { Container, RNStatusBar } from "./styles";

export interface IStatusBarProps {
  statusBarColor?: string;
  hiddenStatusBar?: boolean;
}

export function StatusBar(props: IStatusBarProps) {
  const { statusBarColor, hiddenStatusBar = false } = props;

  return (
    <Container color={statusBarColor}>
      <RNStatusBar
        translucent
        barStyle="dark-content"
        hidden={hiddenStatusBar}
        backgroundColor={statusBarColor}
      />
    </Container>
  );
}
