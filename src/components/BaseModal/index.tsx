import React from "react";
import { Modal, ModalProps, TouchableOpacity } from "react-native";

import {
  Label,
  Header,
  Container,
  CircleCloseIcon,
  ModalBackground,
} from "./styles";

export interface IBaseModalProps extends ModalProps {
  label?: string;
  onClose: () => void;
  children: React.ReactNode;
}

export function BaseModal(props: IBaseModalProps) {
  const { label, onClose, children, ...rest } = props;

  return (
    <Modal {...rest} transparent statusBarTranslucent>
      <Container>
        <ModalBackground>
          <Header>
            <Label>{label}</Label>

            <TouchableOpacity onPress={onClose}>
              <CircleCloseIcon />
            </TouchableOpacity>
          </Header>

          {children}
        </ModalBackground>
      </Container>
    </Modal>
  );
}
