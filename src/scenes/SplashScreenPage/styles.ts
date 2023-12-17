import styled from "styled-components/native";
import { PageView } from "../../components/PageView";

export const Page = styled(PageView).attrs(({ theme }) => ({
  backgroundColor: theme.colors.black,
}))``;

export const Content = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.black};
`;

export const SplashIcon = styled.Image`
  width: 100%;
  height: 20%;
  margin-left: 10px;
  resize-mode: contain;
`;
