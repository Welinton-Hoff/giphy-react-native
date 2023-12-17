import React from "react";
import { Loader } from "./styles";

interface ILoaderIndicatorProps {
  isLoading: boolean;
}

export function LoaderIndicator({ isLoading }: ILoaderIndicatorProps) {
  if (!isLoading) return;
  return <Loader />;
}
