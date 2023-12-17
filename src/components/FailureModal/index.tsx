import React from "react";

import { BaseModal } from "../BaseModal";
import { IFailureModalProps } from "./types";
import { Container, ErrorAnimation, FailureMessage } from "./styles";

export function FailureModal(props: IFailureModalProps) {
  const { message, ...rest } = props;

  return (
    <BaseModal {...rest}>
      <Container>
        <ErrorAnimation
          autoPlay
          source={require("../../assets/animations/error-animation.json")}
        />

        <FailureMessage>{message}</FailureMessage>
      </Container>
    </BaseModal>
  );
}
