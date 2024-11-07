import React from "react";

import { EGifRating } from "src/@types/gifs";
import { useRatingBadge } from "./hooks/useRatingBadge";

import { AgeRestrictionBadge, Container } from "./styles";

interface IRestrictionBadgeProps {
  rating: EGifRating;
}

export function RestrictionBadge({ rating }: Readonly<IRestrictionBadgeProps>) {
  const ageRestriction = useRatingBadge(rating);

  return (
    <Container rating={rating}>
      <AgeRestrictionBadge>{ageRestriction}</AgeRestrictionBadge>
    </Container>
  );
}
