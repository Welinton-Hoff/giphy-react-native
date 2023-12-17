import { ERating } from "../../@types/gifs";

function getRatingAge(rating: ERating) {
  const ratingTemplate = {
    [ERating.G]: "0 +",
    [ERating.R]: "18 +",
    [ERating.PG]: "12 +",
    [ERating.PG_13]: "16 +",
  };

  return ratingTemplate[rating];
}

export { getRatingAge };
