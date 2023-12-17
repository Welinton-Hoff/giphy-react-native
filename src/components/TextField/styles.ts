import styled from "styled-components/native";
import CancelCircleSvg from "../../assets/svgs/cancel-circle-light.svg";

export const Container = styled.View`
  width: 100%;
`;

export const InputContainer = styled.View`
  width: 100%;
  padding: 0 12px;
  border-radius: 4px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.text_field};
`;

export const InputWrapper = styled.View`
  width: 92%;
  flex-direction: row;
  align-items: center;
`;

export const Input = styled.TextInput`
  width: 100%;
  height: 48px;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.text};
`;

export const ClearFieldIcon = styled(CancelCircleSvg).attrs({
  width: 22,
  height: 22,
})``;

export const TouchableButton = styled.TouchableOpacity`
  width: 8%;
`;
