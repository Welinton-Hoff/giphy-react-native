import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding: 24px 24px 0px 24px;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.text};
`;
