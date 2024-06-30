import React from "react";

import { IGifs } from "../../@types/gifs";
import { Loader } from "./components/Loader";
import { SingleGifViewer } from "./components/SingleGifViewer";
import { MultipleGifViewer } from "./components/MultipleGifViewer";

type TGif = IGifs | IGifs[] | null;

interface IGifViewerProps {
  gif: TGif;
  isLoading?: boolean;
}

export function GifViewer({ gif, isLoading }: Readonly<IGifViewerProps>) {
  if (!gif) return null;
  if (isLoading) return <Loader isLoading={isLoading} />;

  if (!Array.isArray(gif)) return <SingleGifViewer gif={gif} />;
  return <MultipleGifViewer gif={gif} />;
}
