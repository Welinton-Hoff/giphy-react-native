import styled from "styled-components/native";

export const Container = styled.View`
  padding: 24px;
`;

export const TitleContainer = styled.Text`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.text};
`;
