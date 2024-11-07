import React, { useCallback } from "react";
import { SvgProps } from "react-native-svg";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { capitalize } from "src/utils/string";
import { SvgIcon } from "src/components/SvgIcon";

import * as S from "./styles";

export interface IHeaderProps {
  headerTitle?: string;
  disableHeader?: boolean;
  onLeftIconPress?: () => void;
  onRightIconPress?: () => void;
  leftIcon?: React.FC<SvgProps>;
  rightIcon?: React.FC<SvgProps>;
}

export function Header(props: Readonly<IHeaderProps>) {
  const {
    leftIcon,
    rightIcon,
    headerTitle,
    disableHeader,
    onLeftIconPress,
    onRightIconPress,
  } = props;

  const { goBack } = useNavigation();

  const onBackNavigate = useCallback((): void => {
    if (onLeftIconPress) onLeftIconPress();
    else goBack();
  }, [onLeftIconPress, goBack]);

  if (disableHeader) return null;

  return (
    <S.Container>
      <S.LeftSide>
        <TouchableOpacity onPress={onBackNavigate}>
          <SvgIcon icon={leftIcon} />
        </TouchableOpacity>
      </S.LeftSide>

      <S.TitleContainer>
        <S.Title numberOfLines={1}>{capitalize(headerTitle ?? "")}</S.Title>
      </S.TitleContainer>

      <S.RightSide>
        <TouchableOpacity onPress={onRightIconPress}>
          <SvgIcon icon={rightIcon} />
        </TouchableOpacity>
      </S.RightSide>
    </S.Container>
  );
}
