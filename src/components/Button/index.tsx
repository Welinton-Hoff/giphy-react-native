import React from "react";
import { TouchableOpacityProps } from "react-native";

import theme from "../../theme";
import { Label, TouchableButton } from "./styles";

interface IButtonProps extends TouchableOpacityProps {
  label: string;
  textColor?: string;
}

export function Button(props: IButtonProps) {
  const { label, textColor = theme?.colors?.background, ...rest } = props;

  return (
    <TouchableButton {...rest}>
      <Label textColor={textColor}>{label}</Label>
    </TouchableButton>
  );
}
