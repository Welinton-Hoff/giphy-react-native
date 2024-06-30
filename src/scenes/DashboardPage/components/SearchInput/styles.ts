import { Animated } from "react-native";
import styled from "styled-components/native";
import SearchSvg from "../../../../assets/svgs/search.svg";

export const Container = styled.View`
  width: 100%;
  align-items: center;
  flex-direction: row;
  margin-bottom: 24px;
  justify-content: space-between;
`;

export const SearchIcon = styled(SearchSvg).attrs({
  width: 22,
  height: 22,
})`
  margin-right: 8px;
`;

export const ButtonWrapper = styled.View`
  max-width: 30%;
  padding-left: 8px;
`;

export const ButtonViewAnimated = styled(Animated.View)`
  width: 100%;
`;
