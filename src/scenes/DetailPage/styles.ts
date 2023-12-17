import styled from "styled-components/native";
import ChevronLeftSvg from "../../assets/svgs/chevron-left-large.svg";

export const Container = styled.View`
  flex: 1;
  padding: 24px;
`;

export const ChevronLeftIcon = styled(ChevronLeftSvg).attrs({
  width: 24,
  height: 24,
})``;
