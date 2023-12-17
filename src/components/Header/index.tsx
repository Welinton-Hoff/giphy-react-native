import React from "react";
import { SvgProps } from "react-native-svg";
import { useNavigation } from "@react-navigation/native";

import { SvgIcon } from "../SvgIcon";
import { capitalize } from "../../utils/string";

import {
  Title,
  LeftSide,
  Container,
  RightSide,
  MainContent,
  TouchableButton,
} from "./styles";

export interface IHeaderProps {
  headerTitle?: string;
  disableHeader?: boolean;
  onLeftIconPress?: () => void;
  onRightIconPress?: () => void;
  leftIcon?: React.FC<SvgProps>;
  rightIcon?: React.FC<SvgProps>;
}

export function Header(props: IHeaderProps) {
  const {
    leftIcon,
    rightIcon,
    headerTitle,
    disableHeader,
    onLeftIconPress,
    onRightIconPress,
  } = props;

  const navigation = useNavigation();

  function onBackNavigate(): void {
    if (onLeftIconPress) {
      return onLeftIconPress();
    }

    navigation.goBack();
  }

  if (disableHeader) return;

  return (
    <Container>
      <LeftSide>
        <TouchableButton onPress={onBackNavigate}>
          <SvgIcon icon={leftIcon} />
        </TouchableButton>
      </LeftSide>

      <MainContent>
        <Title>{capitalize(headerTitle ?? "")}</Title>
      </MainContent>

      <RightSide>
        <TouchableButton onPress={onRightIconPress}>
          <SvgIcon icon={rightIcon} />
        </TouchableButton>
      </RightSide>
    </Container>
  );
}
