import React from "react";
import { Loader } from "./styles";

interface ILoaderIndicatorProps {
  isLoading: boolean;
}

export function LoaderIndicator({
  isLoading,
}: Readonly<ILoaderIndicatorProps>) {
  if (!isLoading) return null;
  return <Loader />;
}
