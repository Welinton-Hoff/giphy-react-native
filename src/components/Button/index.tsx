import React from "react";
import { TouchableOpacityProps } from "react-native";

import { Label, TouchableButton } from "./styles";
import theme from "src/theme";

interface IButtonProps extends TouchableOpacityProps {
  label: string;
  textColor?: string;
}

export function Button(props: Readonly<IButtonProps>) {
  const { label, textColor = theme?.colors?.background, ...rest } = props;

  return (
    <TouchableButton {...rest}>
      <Label textColor={textColor}>{label}</Label>
    </TouchableButton>
  );
}
