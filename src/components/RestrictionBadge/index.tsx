import React from "react";

import { EGifRating } from "src/@types/gifs";
import { getRatingAge } from "src/utils/rating";
import { AgeRestrictionBadge, Container } from "./styles";

interface IRestrictionBadgeProps {
  rating: EGifRating;
}

export function RestrictionBadge({ rating }: Readonly<IRestrictionBadgeProps>) {
  const ageRestriction = getRatingAge(rating);

  return (
    <Container rating={rating}>
      <AgeRestrictionBadge>{ageRestriction}</AgeRestrictionBadge>
    </Container>
  );
}
