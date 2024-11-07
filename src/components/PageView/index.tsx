import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import theme from "src/theme";
import { Header, IHeaderProps } from "./components/Header";
import { IStatusBarProps, StatusBar } from "./components/StatusBar";

interface IPageViewProps extends IHeaderProps, IStatusBarProps {
  backgroundColor?: string;
  children: React.ReactNode;
}

export function PageView(props: Readonly<IPageViewProps>) {
  const {
    children,
    backgroundColor = theme.colors.background,
    ...rest
  } = props;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor }}>
      <StatusBar {...rest} />
      <Header {...rest} />

      {children}
    </SafeAreaView>
  );
}
