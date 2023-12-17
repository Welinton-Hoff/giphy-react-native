import React from "react";

import { Container } from "./styles";
import { LoaderIndicator } from "../../../LoaderIndicator";

interface ILoaderProps {
  isLoading: boolean;
}

export function Loader({ isLoading }: ILoaderProps) {
  return (
    <Container>
      <LoaderIndicator isLoading={isLoading} />
    </Container>
  );
}
