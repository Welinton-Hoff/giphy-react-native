import LottieView from "lottie-react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const ErrorAnimation = styled(LottieView)`
  width: 120px;
  height: 180px;
`;

export const FailureMessage = styled.Text`
  font-size: 16px;
  font-weight: 400;
  text-align: center;
  color: ${({ theme }) => theme.colors.text};
`;
