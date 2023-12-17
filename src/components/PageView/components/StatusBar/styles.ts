import { css } from "styled-components";
import styled from "styled-components/native";
import { Platform, StatusBar } from "react-native";

const isApplePlatform = Platform.OS === "ios";
const statusBarHeight = StatusBar?.currentHeight ?? 0;

interface IContainerProps {
  color: string;
}

export const Container = styled.View<IContainerProps>`
  background-color: ${({ theme, color }) => color ?? theme.colors.background};

  /* Workaround to deal with the statusbar background on iOS */
  ${!!isApplePlatform &&
  css`
    height: ${statusBarHeight}px;
    margin-top: -${statusBarHeight + 5}px;
  `}
`;

export const RNStatusBar = styled(StatusBar).attrs(({ theme }) => ({
  backgroundColor: theme.colors.background,
}))``;
