import React, { useMemo } from "react";
import { SvgProps } from "react-native-svg";
import { TextInputProps } from "react-native";

import { SvgIcon } from "../SvgIcon";

import {
  Input,
  Container,
  InputWrapper,
  ClearFieldIcon,
  InputContainer,
  TouchableButton,
} from "./styles";

interface ITextFieldProps extends TextInputProps {
  onClear?: () => void;
  leftIcon?: React.FC<SvgProps>;
}

export function TextField(props: ITextFieldProps) {
  const { value, leftIcon, onChangeText, onClear, ...rest } = props;

  const shouldDisplayClearFieldAction = useMemo(() => {
    return !!value?.length;
  }, [value]);

  function onClearField(): void {
    if (onClear && onChangeText) {
      onClear();
      onChangeText("");
    }
  }

  return (
    <Container>
      <InputContainer>
        <InputWrapper>
          {leftIcon && <SvgIcon icon={leftIcon} />}
          <Input value={value} onChangeText={onChangeText} {...rest} />
        </InputWrapper>

        {shouldDisplayClearFieldAction && (
          <TouchableButton onPress={onClearField}>
            <SvgIcon icon={ClearFieldIcon} />
          </TouchableButton>
        )}
      </InputContainer>
    </Container>
  );
}
