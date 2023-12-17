import styled from "styled-components/native";

import theme from "../../theme";
import { ERating } from "../../@types/gifs";

interface IContainerProps {
  rating: ERating;
}

const getContainerColor = (rating: ERating) => {
  const colorTemplate = {
    [ERating.R]: theme.colors.black,
    [ERating.G]: theme.colors.success,
    [ERating.PG]: theme.colors.warning,
    [ERating.PG_13]: theme.colors.primary,
  };

  return colorTemplate[rating];
};

export const Container = styled.View<IContainerProps>`
  width: 48px;
  height: 48px;
  border-radius: 24px;
  align-items: center;
  justify-content: center;
  background-color: ${({ rating }) => getContainerColor(rating)};
`;

export const AgeRestrictionBadge = styled.Text`
  font-size: 16px;
  font-weight: 800;
  font-style: normal;
  color: ${({ theme }) => theme.colors.background};
`;
