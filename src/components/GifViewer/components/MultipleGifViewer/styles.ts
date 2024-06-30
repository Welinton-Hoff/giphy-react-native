import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding-top: 16px;
`;

export const Card = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  margin: 8px;
  align-items: center;
  justify-content: center;
`;

export const GifImage = styled.Image`
  width: 100px;
  height: 100px;
`;

export const EmptyListContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const EmptyListMessage = styled.Text`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.text};
`;
