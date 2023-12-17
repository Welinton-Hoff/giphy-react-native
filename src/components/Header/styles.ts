import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  padding: 12px 16px;
  flex-direction: row;
  justify-content: center;
  border-bottom-width: 0.5px;
  border-color: ${({ theme }) => theme.colors.opacity_25};
  background-color: ${({ theme }) => theme.colors.background};
`;

export const LeftSide = styled.View`
  width: auto;
  min-width: 24px;
  align-items: center;
  justify-content: center;
`;

export const TouchableButton = styled.TouchableOpacity``;

export const MainContent = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: 600;
  line-height: 27px;
  font-style: normal;
  letter-spacing: 0.12px;
  color: ${({ theme }) => theme.colors.black};
`;

export const RightSide = styled.View`
  width: auto;
  min-width: 24px;
  align-items: center;
  justify-content: center;
`;
