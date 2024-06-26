import React, { useMemo } from "react";

import { EGifRating } from "../../@types/gifs";
import { getRatingAge } from "../../utils/rating";
import { AgeRestrictionBadge, Container } from "./styles";

interface IRestrictionBadgeProps {
  rating: EGifRating;
}

export function RestrictionBadge({ rating }: Readonly<IRestrictionBadgeProps>) {
  const ageRestriction = useMemo(() => {
    return getRatingAge(rating);
  }, [rating]);

  return (
    <Container rating={rating}>
      <AgeRestrictionBadge>{ageRestriction}</AgeRestrictionBadge>
    </Container>
  );
}
