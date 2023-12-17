import styled from "styled-components/native";
import CircleCloseSvg from "../../assets/svgs/cancel-circle-light.svg";

export const Container = styled.View`
  flex: 1;
  justify-content: flex-end;
  background-color: ${({ theme }) => theme.colors.opacity_25};
`;

export const ModalBackground = styled.View`
  width: 100%;
  height: auto;
  padding: 24px 24px 40px 24px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  margin-bottom: 16px;
  justify-content: space-between;
`;

export const Label = styled.Text`
  font-size: 18px;
  font-weight: 600;
  font-style: normal;
`;

export const CircleCloseIcon = styled(CircleCloseSvg).attrs({
  width: 24,
  height: 24,
})``;
