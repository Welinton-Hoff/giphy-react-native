import React, { useMemo } from "react";

import { ERating } from "../../@types/gifs";
import { getRatingAge } from "../../utils/rating";
import { AgeRestrictionBadge, Container } from "./styles";

interface IRestrictionBadgeProps {
  rating: ERating;
}

export function RestrictionBadge({ rating }: IRestrictionBadgeProps) {
  const ageRestriction = useMemo(() => {
    return getRatingAge(rating);
  }, [rating]);

  return (
    <Container rating={rating}>
      <AgeRestrictionBadge>{ageRestriction}</AgeRestrictionBadge>
    </Container>
  );
}
