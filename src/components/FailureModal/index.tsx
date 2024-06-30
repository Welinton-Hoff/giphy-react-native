import React from "react";

import { BaseModal, IBaseModalProps } from "../BaseModal";
import { Container, ErrorAnimation, FailureMessage } from "./styles";

interface IFailureModalProps extends Omit<IBaseModalProps, "children"> {
  message: string | null | undefined;
}

export function FailureModal(props: Readonly<IFailureModalProps>) {
  const { message, ...rest } = props;

  return (
    <BaseModal {...rest}>
      <Container>
        <ErrorAnimation
          autoPlay
          loop={false}
          source={require("../../assets/animations/error-animation.json")}
        />

        <FailureMessage>{message}</FailureMessage>
      </Container>
    </BaseModal>
  );
}
