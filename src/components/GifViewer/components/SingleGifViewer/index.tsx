import React, { useRef } from "react";
import { VideoRef } from "react-native-video";

import { IGifs } from "../../../../@types/gifs";
import { capitalize } from "../../../../utils/string";
import { RestrictionBadge } from "../../../RestrictionBadge";

import {
  Footer,
  GifUrl,
  GifTitle,
  Container,
  GifPlayer,
  GifContainer,
  GifTitleWrapper,
} from "../../styles";

interface IGifViewerProps {
  gif: IGifs | null;
}

export function SingleGifViewer({ gif }: IGifViewerProps) {
  const videoRef = useRef<VideoRef>(null);

  if (!gif) return null;

  return (
    <Container>
      <GifContainer>
        <GifPlayer
          repeat
          ref={videoRef}
          source={{ uri: gif?.images?.original_mp4?.mp4 }}
        />
      </GifContainer>

      <Footer>
        <GifTitleWrapper>
          {gif?.title && <GifTitle>{capitalize(gif?.title)}</GifTitle>}
          <GifUrl>{gif?.url}</GifUrl>
        </GifTitleWrapper>

        <RestrictionBadge rating={gif?.rating} />
      </Footer>
    </Container>
  );
}
