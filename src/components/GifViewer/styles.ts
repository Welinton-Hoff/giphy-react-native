import Video from "react-native-video";
import styled from "styled-components/native";

export const Container = styled.View``;

export const Label = styled.Text`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.text};
`;

export const GifContainer = styled.View`
  padding-top: 24px;
  align-items: center;
  justify-content: center;
`;

export const GifPlayer = styled(Video).attrs({
  resizeMode: "cover",
})`
  width: 100%;
  height: 85%;
`;

export const Footer = styled.View`
  bottom: 0;
  width: 100%;
  position: absolute;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const GifTitleWrapper = styled.View`
  width: 80%;
`;

export const GifTitle = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
`;

export const GifUrl = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
`;
