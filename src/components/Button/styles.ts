import styled from "styled-components/native";

interface ILabelProps {
  textColor: string;
}

export const TouchableButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  width: 100%;
  padding: 12px 16px;
  border-radius: 4px;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const Label = styled.Text<ILabelProps>`
  font-size: 16px;
  font-weight: 600;
  font-style: normal;
  color: ${({ textColor }) => textColor};
`;
