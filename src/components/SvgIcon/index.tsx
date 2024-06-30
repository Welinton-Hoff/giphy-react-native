import React from "react";
import { SvgProps } from "react-native-svg";

export interface ISvgIconProps extends SvgProps {
  icon?: React.FC<SvgProps>;
}

export function SvgIcon(props: Readonly<ISvgIconProps>) {
  const { icon: Icon, ...rest } = props;
  return Icon ? <Icon {...rest} /> : null;
}
