import styled from "styled-components/native";

export const Loader = styled.ActivityIndicator.attrs(({ theme }) => ({
  size: "large",
  color: theme.colors.primary,
}))``;
