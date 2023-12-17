import styled from "styled-components/native";

export const Container = styled.View`
  height: 90%;
  padding: 16px 0 40px 0;
`;

export const Card = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  margin: 8px;
  align-items: center;
  justify-content: center;
`;
