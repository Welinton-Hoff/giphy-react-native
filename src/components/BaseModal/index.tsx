import React from "react";
import { Modal, ModalProps, TouchableOpacity } from "react-native";

import * as S from "./styles";

export interface IBaseModalProps extends ModalProps {
  label?: string;
  onClose: () => void;
  children: React.ReactNode;
}

export function BaseModal(props: Readonly<IBaseModalProps>) {
  const { label, onClose, children, ...rest } = props;

  return (
    <Modal {...rest} transparent statusBarTranslucent>
      <S.Container>
        <S.ModalBackground>
          <S.Header>
            {label && <S.Label>{label}</S.Label>}

            <TouchableOpacity onPress={onClose}>
              <S.CircleCloseIcon />
            </TouchableOpacity>
          </S.Header>

          {children}
        </S.ModalBackground>
      </S.Container>
    </Modal>
  );
}
